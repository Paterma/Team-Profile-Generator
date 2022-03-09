
const Employee = require("../lib/employee");

describe("TEST FOR EMPLOYEE CLASS", ()=> {
    it("Should instantiate and create a employee object", ()=> {
        const emp = new Employee();
        expect(typeof emp).toBe("object")
    });

    it("Should have a name property when instantiated with a name parameter", ()=> {
        const name = "Maria";
        const emp = new Employee(name);
        expect(emp.name).toEqual(name);
    });

    it("Should have a id property when instantiated with a id parameter", ()=> {
        const name = "Maria";
        const id = 7;
        const emp = new Employee(name, id);
        expect(emp.id).toEqual(id);
    });

    it("should have a email property whehn email is an option", ()=> {
        const name = "Maria";
        const id = 7;
        const email = "maria@yahoo.com"
        const emp = new Employee(name, id, email);
        expect(emp.email).toEqual(email);
    });


    //test methods
    it("dhould return name of object when get name is invoked", ()=> {
        const name = "Maria";
        const id = 7;
        const email = "maria@yahoo.com"
        const emp = new Employee(name, id, email);
        expect(emp.getName()).toEqual(name)
    });

    it("should return id number when id is invoked", ()=> {
        const name = "Maria";
        const id = 7;
        const email = "maria@yahoo.com"
        const emp = new Employee(name, id, email);
        expect(emp.getId()).toEqual(id)
    })

    it("should return email when email is invoked", ()=> {
        const name = "Molly";
        const id = 7;
        const email = "maria@yahoo.com"
        const emp = new Employee(name, id, email);
        expect(emp.getEmail()).toEqual(email)
    })

    it("should return employee when getrole is invoked", ()=> {
        const name = "Maria";
        const id = 7;
        const email = "maria@yahoo.com"
        const emp = new Employee(name, id, email);
        expect(emp.getRole()).toEqual("Employee")
    })
})