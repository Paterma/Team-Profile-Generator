//CLASSES
const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, role, school){
        super(name, id, email, "Intern")
        this.school = school
    }

    getSchool(){
        return this.school;
    }
}

module.exports = Intern