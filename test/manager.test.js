const Manager = require("../lib/manager");

describe("This tests the manager class ", ()=> {
    // it("should have a officeNumber property when instantiated with the officeNumber parameter", ()=> {
    //     const name = "Maria";
    //     const id = 7;
    //     const email = "maria@yahoo.com";
    //     const officeNumber = 1;

    //     const emp = new Manager(name, id, email, officeNumber);
    //     expect(emp.officeNumber).toEqual(officeNumber);
    // })

    // it("Should return the officeNumber property when getofficeNumber method is invoked", ()=> {
    //     const name = "Maria";
    //     const id = 7;
    //     const email = "maria@yahoo.com";
    //     const officeNumber = 1;

    //     const emp = new Manager(name, id, email, officeNumber);
    //     expect(emp.getOfficeNumber()).toEqual(officeNumber);
    // })

    it("Should return 'Manager' when the getRole method is invoked", ()=> {
        const name = "Maria";
        const id = 7;
        const email = "maria@yahoo.com";
        const officeNumber = 1;

        const emp = new Manager(name, id, email, officeNumber);
        expect(emp.getRole()).toEqual("Manager");
    })
})