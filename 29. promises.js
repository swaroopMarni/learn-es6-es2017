function delay(t) {
    return new Promise((resolve, reject) => {
        console.log("hello");
        setTimeout(() => resolve(), t);
    });
}

function logHi() {
    console.log("hi");
}

delay(2000).then(logHi);
