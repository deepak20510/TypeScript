var firstname = "Deepak";
var age = 22;
function greet(user) {
    console.log("Hello " +
        user.firstname +
        " " +
        ", " +
        user.lastname +
        " Your Age is : " +
        user.age);
}
var user = {
    firstname: "Deepak",
    lastname: "Mahato",
    age: 22,
};
greet(user);
var Manager = /** @class */ (function () {
    function Manager(name, age) {
        this.name = name;
        this.age = age;
        this.number = "12321";
    }
    return Manager;
}());
var user1 = new Manager("Deepak", 22);
console.log(user1.number);
