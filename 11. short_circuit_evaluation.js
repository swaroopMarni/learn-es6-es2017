function conditionalAnd(a, b) {
    return a && b;
}

function conditionalOr(a, b) {
    return a || b;
}

function whatDoCowsSays(sound) {
    sound = sound || "moo";
    return sound;
}

var cow = {
    sound: function() {
        console.log("MoOo");
    },
};

var cow1 = undefined;

console.log(conditionalAnd(false, true));
console.log(conditionalAnd(true, false));

console.log(!0);
console.log(!null);
console.log(!"hello");

console.log(whatDoCowsSays());

cow.sound();

cow && cow.sound();
