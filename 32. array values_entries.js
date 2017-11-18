let arr = ["a", "b", "c"];

let iterator = arr.keys();
console.log(iterator);

console.log(iterator.next());
console.log(iterator.next());

let arr1 = ["a", "b", "c"];
let iterator1 = arr1.values();

console.log(iterator1.value());
console.log(iterator1.value());

let arr2 = ["a", "b", "c"];
let iterator2 = arr1.entries();

console.log(iterator2.next().value());
console.log(iterator2.next().value());
