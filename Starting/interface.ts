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


interface People {
  name: string;
  age: number;
}

class Manager implements People {
  name: string;
  age: number;
  number: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.number = "12321";
  }
}
let user1 = new Manager("Deepak", 22);
console.log(user1.number);
