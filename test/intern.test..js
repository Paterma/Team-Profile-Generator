const Intern = require("../lib/intern");

describe("This tests the intern class ", ()=> {
    it("should have a school property when instantiated with the school parameter", ()=> {
        const name = "Maria";
        const id = 7;
        const email = "maria@yahoo.com"
        const school = "UCCS";

        const emp = new Intern(name, id, email, school);
        expect(emp.school).toEqual(school);
    })

    it("Should return the school property when getschool method is invoked", ()=> {
        const name = "Maria";
        const id = 7;
        const email = "maria@yahoo.com"
        const school = "UCCS";

        const emp = new Intern(name, id, email, school);
        expect(emp.getSchool()).toEqual(school);
    })

    it("Should return 'Intern' when the getRole method is invoked", ()=> {
        const name = "Maria";
        const id = 7;
        const email = "maria@yahoo.com"
        const school = "UCCS";

        const emp = new Intern(name, id, email, school);
        expect(emp.getRole()).toEqual("Intern");
    })
})