type Employee = {
  name: string;
  startDate: string;
};

type Manager = {
  name: string;
  department: string;
};

type TeamLead = Employee & Manager;

let e: Employee = {
  name: "Deepak",
  startDate: "28-04-2004",
};

let m: Manager = {
  name: "Deepak",
  department: "IT",
};
let t: TeamLead = {
  name: "Deepak",
  startDate: "28-04-2004",
  department: "IT",
};

console.log(t.name)