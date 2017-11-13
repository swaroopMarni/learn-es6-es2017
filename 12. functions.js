// a function is a subprogram designed to perform a particular task
// functions are executed when they are called (invoked)
// values can be passed into functions
// functions always return a value
// in javascript, function are function objects

// function name(parameters){

// }

// // anonymouse function, function does not have a name
// let name = function(parameters){

// }

function logIt(name) {
    console.log(name);
}

logIt("John");
console.log(logIt);

function test() {
    return true;
    return false;
}

let x = test();
console.log(x);

console.log(test());

var arr = [];
var nums = [1, 5, 10, 20];

for (var i = 0; i < nums.length; i++) {
    arr.push(nums[i] * 2);
}

console.log(arr);

var double = function(x) {
    return 2 * x;
};

// var doubled = nums.map(double)
var doubled = nums.map(function(x) {
    return 2 * x;
});
console.log(doubled);
