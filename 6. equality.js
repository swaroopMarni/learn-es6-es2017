function strict_equality(a, b) {
    return a === b;
}

function loose_equality(a, b) {
    return a == b;
}

console.log(strict_equality(3, 3));
console.log(strict_equality("test", "test"));
console.log(strict_equality(true, false));
console.log(strict_equality(3, "3"));

console.log(loose_equality(3, "3"));
