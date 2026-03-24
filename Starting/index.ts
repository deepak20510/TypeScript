function greet(firstName: string) {
  console.log("Hello " + firstName);
}

greet("Deepak");

function sum(a: number, b: number) {
  return a + b;
}
let ans = sum(11, 2);
console.log(ans);

function delayedCall(anotherFn: () => number) {
  setTimeout(anotherFn, 1000);
}

function log() {
  console.log("Hello Man");
  return 1;
}
delayedCall(log);

function isEven(num: number): Boolean {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(5));

interface Address {
  city: string;
  country: string;
  pincode: number;
}

interface User {
  name: string;
  age: number;
  address: Address;
}

let user: User = {
  name: "Deepak",
  age: 22,
  address: {
    city: "Jamshedpur",
    country: "India",
    pincode: 812100,
  },
};

function isLegal(user: User): Boolean {
  if (user.age >= 18) {
    return true;
  } else {
    return false;
  }
}
const anss = isLegal(user);
if (anss) {
  console.log("I am Legal");
} else {
  console.log("I am not Legal");
}
