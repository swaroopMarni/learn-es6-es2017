function strict_equality(a, b) {
    return a === b;
}

function loose_equality(a, b) {
    return a == b;
}

function define_value(a) {
    return a;
}

console.log(define_value(null));
console.log(typeof null);

var test2;
console.log(test2);

var test3 = undefined
console.log(test3)

var test4 = {}
console.log(test4.prop)


