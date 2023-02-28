let obj, method;

obj = {
  go: function() { alert(this); }
};

obj.go();               // (1) [object Object]

(obj.go)();             // (2) [object Object]

(method = obj.go)();    // (3) undefined

(obj.go || obj.stop)(); // (4) undefined

/*
Ответ: вызовы (1) и (2) работают иначе, чем (3) и (4), т.к 3 и 4
теряют контекст this.
*/