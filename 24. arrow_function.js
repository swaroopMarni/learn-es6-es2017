var double = num => num * 2;

console.log(double(2));

function Counter() {
    var that = this;
    this.num = 0;
    this.time = setInterval(() => {
        // this.num++;
        console.log(that === this); // windows object
    }, 1000);
}

var a = new Counter();
console.log(a.num);
