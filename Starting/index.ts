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
