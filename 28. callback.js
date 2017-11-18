function first(callback) {
    setTimeout(function() {
        console.log(1);
        callback();
    }, 500);
}

function second() {
    console.log(2);
}

first(second);
second();

function doHomework(subject, callback) {
    console.log(`Starting my ${subject}`);
    callback();
}

function alertFinished() {
    console.log("finished my homework");
}

doHomework("math", function() {
    console.log("Finished my homework");
});
doHomework("math", alertFinished);
