function greet(firstName) {
    console.log("Hello " + firstName);
}
greet("Deepak");
function sum(a, b) {
    return a + b;
}
var ans = sum(11, 2);
console.log(ans);
function delayedCall(anotherFn) {
    setTimeout(anotherFn, 1000);
}
function log() {
    console.log("Hello Man");
    return 1;
}
delayedCall(log);
function isEven(num) {
    if (num % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isEven(5));
var user = {
    name: "Deepak",
    age: 22,
    address: {
        city: "Jamshedpur",
        country: "India",
        pincode: 812100,
    },
};
function isLegal(user) {
    if (user.age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
var anss = isLegal(user);
if (anss) {
    console.log("I am Legal");
}
else {
    console.log("I am not Legal");
}
