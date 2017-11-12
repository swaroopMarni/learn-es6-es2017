function strict_equality(a, b) {
    return a === b;
}

function loose_equality(a, b) {
    return a == b;
}

console.log(loose_equality(false, 0));
console.log(loose_equality(0, ""));
console.log(loose_equality("", false));

console.log(loose_equality(null, false));
console.log(loose_equality(null, null));
console.log(loose_equality(null, undefined));

console.log(loose_equality(undefined, undefined));
console.log(loose_equality(false, undefined));

console.log(loose_equality(NaN, null));
console.log(loose_equality(NaN, undefined));
console.log(loose_equality(NaN, NaN));
