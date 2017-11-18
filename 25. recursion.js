function factorial(x) {
    // termination
    if (x < 0) return;
    // base case
    if (x === 0) return 1;
    // recursion
    return x * factorial(x - 1);
}

var data = factorial(3);
console.log(data);

function revStr(str) {
    if (str === "") return "";
    return revStr(str.substr(1)) + str[0];
}

var text = revStr("cat");
console.log(text);
