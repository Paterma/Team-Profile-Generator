// //CLASSES
const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, role, github){
        super(name, id, email, "Engineer")
        this.github = github
    }

    getGithub(){
        return this.github;
    }
}

module.exports = Engineer