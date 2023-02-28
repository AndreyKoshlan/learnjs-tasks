function unique(arr) {
    viewed = new Map();
    newArray = [];
    arr.forEach((value) => {
        if (!viewed.has(value))
            newArray.push(value);
        viewed.set(value, true);
    });
    return newArray;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log( unique(strings) ); // кришна, харе, :-O