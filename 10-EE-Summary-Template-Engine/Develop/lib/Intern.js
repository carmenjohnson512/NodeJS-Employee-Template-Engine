// TODO: Write code to define and export the Intern class.  
//HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school, role) {
        super(name, id, email);
        this.school = school;
        this.role = role;
    }

    getSchool() {
        console.log(this.school); 
    }

    getRole() {
        console.log(this.role);
    }
}

const intern1 = new Intern("Cimon", "cl67890", "email@someemail.com", "cimonlevine214", "Intern");
intern1.getName();
intern1.getID();
intern1.getEmail();
intern1.getSchool();
intern1.getRole();

module.exports = Intern;