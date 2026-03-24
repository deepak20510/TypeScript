let firstname: string = "Deepak";
let age: number = 22;

interface UserType {
  firstname: string;
  lastname: string;
  age: number;
}

function greet(user: UserType) {
  console.log(
    "Hello " +
      user.firstname +
      " " +
      ", " +
      user.lastname +
      " Your Age is : " +
      user.age,
  );
}

let user: UserType = {
  firstname: "Deepak",
  lastname: "Mahato",
  age: 22,
};

greet(user);
