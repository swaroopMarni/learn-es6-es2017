// function add(c, d) {
//     console.log(this.a + this.b + c + d);
// }

// var nums = {
//     a: 1,
//     b: 2,
// };

// add.call(nums, 3, 4);
// add.apply(nums, [3, 4]);

var small = {
    a: 1,
    go: function(b, c, d) {
        console.log(this.a + b + c + d);
    },
};

var large = {
    a: 100,
};

small.go(2, 3, 4);
small.go.call(large, 2, 3, 4);

var saveForlater = small.go.bind(large, 2);
console.log(saveForlater);
saveForlater(3, 4);
