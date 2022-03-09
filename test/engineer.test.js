const Engineer = require("../lib/engineer");

describe("This tests the engineer class ", ()=> {
    it("should have a github property when instantiated with the github parameter", ()=> {
        const name = "Maria";
        const id = 7;
        const email = "maria@yahoo.com";
        const github = "paterma";

        const emp = new Engineer(name, id, email, github);
        expect(emp.github).toEqual(github);
    })

    it("Should return the github property when getGithub method is invoked", ()=> {
        const name = "Maria";
        const id = 7;
        const email = "maria@yahoo.com";
        const github = "paterma";

        const emp = new Engineer(name, id, email, github);
        expect(emp.getGithub()).toEqual(github);
    })

    it("Should return 'Engineer' when the getRole method is invoked", ()=> {
        const name = "Maria";
        const id = 7;
        const email = "maria@yahoo.com";
        const github = "paterma";

        const emp = new Engineer(name, id, email, github);
        expect(emp.getRole()).toEqual("Engineer");
    })
})