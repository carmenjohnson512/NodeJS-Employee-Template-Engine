// TODO: Write code to define and export the Engineer class.  
//HINT: This class should inherit from Employee.

const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, github, role) {
        super(name, id, email);
        this.github = github;
        this.role = role;
    }

    getGithub() {
        console.log(this.github); 
    }

    getRole() {
        console.log(this.role);
    }
}

const engineer1 = new Engineer("Carmen", "cj12345", "email@someemail.com", "carmenjohnson512", "Engineer");
engineer1.getName("Carmen");
engineer1.getID("cj12345");
engineer1.getEmail("email@someemail.com");
engineer1.getGithub("carmenjohnson512");
engineer1.getRole("Engineer");

module.exports = Engineer;
