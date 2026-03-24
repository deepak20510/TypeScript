type User = {
  name: string;
  age: number;
};

let user: User = {
  name: "Deepak",
  age: 22,
};
function isLegal(user: User) {
  return user.age > 18;
}
isLegal(user);
console.log(isLegal(user));
