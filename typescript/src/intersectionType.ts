
type IntersectionType = Type1 & Type2 & Type3;

// Use Case 1: Merging Interfaces
type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: number;
  department: string;
};

type EmployeeDetails = Person & Employee;

const john: EmployeeDetails = {
  name: "John",
  age: 30,
  employeeId: 12345,
  department: "Engineering",
};

console.log(john);

// Use Case 2: Component Properties in a UI Library
type BaseProps = {
  id: string;
  className?: string;
};

type ButtonSpecificProps = {
  label: string;
  onClick: () => void;
};

type ButtonProps = BaseProps & ButtonSpecificProps;

const button: ButtonProps = {
  id: "btn1",
  label: "Submit",
  onClick: () => console.log("Button clicked!"),
};

console.log(button);

// Use Case 3
type Admin = {
  accessLevel: "admin";
  manageUsers: () => void;
};

type Editor = {
  accessLevel: "editor";
  editContent: () => void;
};

type SuperUser = Admin & Editor;

const superUser: SuperUser = {
  accessLevel: "admin", // Access level is now narrowed to match both types
  manageUsers: () => console.log("Managing users"),
  editContent: () => console.log("Editing content"),
};

// superUser.manageUsers();
// superUser.editContent();

