var user = {
    name: "Deepak",
    age: 22,
};
function isLegal(user) {
    return user.age > 18;
}
isLegal(user);
console.log(isLegal(user));
