// TODO: Write code to define and export the Engineer class.  
//HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
        // console.log(this.github); 
    }

    getRole() {
        return "Engineer";
        // console.log(this.role);
    }
}

// const engineer1 = new Engineer("Carmen", "cj12345", "email@someemail.com", "carmenjohnson512", "Engineer");
// engineer1.getName();
// engineer1.getID();
// engineer1.getEmail();
// engineer1.getGithub();
// engineer1.getRole();

module.exports = Engineer;
