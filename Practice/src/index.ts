interface User {
  name: string;
  age: number;
}
function sumOfAge(user1: User, user2: User) {
  return user1.age + user2.age;
}
const age = sumOfAge({ name: "Deepak", age: 22 }, { name: "Rohit", age: 19 });
console.log(age);
