"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet(firstName) {
    console.log("Hello " + firstName);
}
greet("Deepak");
function sum(a, b) {
    return a + b;
}
let ans = sum(11, 2);
console.log(ans);
function delayedCall(anotherFn) {
    setTimeout(anotherFn, 1000);
}
function log() {
    console.log("Hello Man");
    return 1;
}
delayedCall(log);
//# sourceMappingURL=index.js.map