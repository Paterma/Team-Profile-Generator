//CLASSES
const Employee = require("#employeeBox")

class Manager extends Employee {
    constructor(officeNum, role) {
        const officeNum = officeNum;
        const role = role
    }
    getOfficeNum() {
        console.log(`Name: ${this.officeNum}`);
    }
    getRole() {
        console.log("Manager");
    }
    super(name, id, email)
}

const manager = new Manager(getOfficeNum, "Manager")
manager.printInfo();

// class manager {extends, "employees"} () {
//     if (data.role === "Manager") {
//     return ("#managerQ")
//     } else {
//         return ``
//     }

// class Shape {
//     // Just like constructor functions, classes can accept arguments
//     constructor(area, perimeter) {
//       this.area = area;
//       this.perimeter = perimeter;
//     }

//     printInfo() {
//       console.log(`Area: ${this.area}`);
//       console.log(`Perimeter: ${this.perimeter}`);
//     }
//   }

//   const shape = new Shape(25, 25);

//   shape.printInfo();
