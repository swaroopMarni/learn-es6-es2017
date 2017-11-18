// var words = 'hi'

// function speak() {
//     // var words = "hi"; // locally scope to speak function
//     console.log(words);
// }

// speak();
// console.log(words);

function speak() {
    var words = "hi";

    return function logIt() {
        console.log(words);
    };
}

var sayHello = speak();
console.log(sayHello());
