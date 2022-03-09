const Engineer = require("../lib/engineer");

describe("This tests the engineer class ", ()=> {

    it("Should return engineer for role", ()=> {
        const name = "Maria";
        const id = 7;
        const email = "maria@yahoo.com";
        const github = "paterma";

        const emp = new Engineer(name, id, email, github);
        expect(emp.getRole()).toEqual("Engineer");
    })
})