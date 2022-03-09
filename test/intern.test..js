const Intern = require("../lib/intern");

describe("This tests the intern class ", ()=> {
    it("test should have a school property", ()=> {
        const name = "Maria";
        const id = 7;
        const email = "maria@yahoo.com"
        const school = "UCCS";

        const emp = new Intern(name, id, email, school);
        expect(emp.school).toEqual(school);
    })

    it("when getSchool is invoked it should return a school property", ()=> {
        const name = "Maria";
        const id = 7;
        const email = "maria@yahoo.com"
        const school = "UCCS";

        const emp = new Intern(name, id, email, school);
        expect(emp.getSchool()).toEqual(school);
    })

    it("should return intern for role", ()=> {
        const name = "Maria";
        const id = 7;
        const email = "maria@yahoo.com"
        const school = "UCCS";

        const emp = new Intern(name, id, email, school);
        expect(emp.getRole()).toEqual("Intern");
    })
})