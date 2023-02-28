'use strict';

function makeObservable(target) {
    let handlers = [];
    target.observe = function(handler) {
        handlers.push(handler);
    };
    return new Proxy(target, {
        set(target, prop, val, receiver) {
            handlers.forEach((f) => f(prop, val));
            return Reflect.set(target, prop, val, receiver);
        }
    });
}

let user = {};
user = makeObservable(user);

user.observe((key, value) => {
    console.log(`SET ${key}=${value}`);
});

user.name = "John"; // выводит: SET name=John