const Manager = require("../lib/manager");

describe("This tests the manager class ", ()=> {

    it("Should return manager for role", ()=> {
        const name = "Maria";
        const id = 7;
        const email = "maria@yahoo.com";
        const officeNumber = 1;

        const emp = new Manager(name, id, email, officeNumber);
        expect(emp.getRole()).toEqual("Manager");
    })
})