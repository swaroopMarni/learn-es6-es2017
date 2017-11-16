function Student(name, age) {
    this.name = name;
    this.age = age;
}

console.log(Student.prototype);

var second = new Student("Fred", 44);
console.log(second.__proto__);
console.log(second.__proto__ === Student.prototype);
console.log(Student.prototype.constructor);

Student.prototype.sayInfo = function() {
    return this.name + " is " + this.age + " years old";
};

console.log(second);
console.log(second.sayInfo());

var cat = "cat";
console.log(cat.charAt(0));
