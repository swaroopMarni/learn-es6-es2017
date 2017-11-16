// var person = {
//     first: "John",
//     last: "Smith",
//     full: function() {
//         return this.first + " " + this.last;
//     },
// };

// var person = {
//     first: "John",
//     last: "Smith",
//     full: function() {
//         return this;
//     },
// };

var person = {
    first: "John",
    last: "Smith",
    full: function() {
        return this.first + " " + this.last;
    },
    personTwo: {
        first: "Allison",
        last: "Jones",
        full: function() {
            return this.first + " " + this.last;
        },
    },
};

console.log(person.first);
console.log(person.full());
console.log(person.personTwo.full());
