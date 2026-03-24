"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let firstname = "Deepak";
let age = 22;
function greet(user) {
    console.log("Hello " +
        user.firstname +
        " " +
        ", " +
        user.lastname +
        " Your Age is : " +
        user.age);
}
let user = {
    firstname: "Deepak",
    lastname: "Mahato",
    age: 22,
};
greet(user);
//# sourceMappingURL=interface.js.map