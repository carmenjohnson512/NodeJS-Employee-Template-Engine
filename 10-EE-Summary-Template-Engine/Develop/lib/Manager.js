// TODO: Write code to define and export the Manager class.  
//HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber, role) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = role;
    };

    getOfficeNumber() {
        console.log(this.officeNumber);
    }

    getRole() {
        console.log(this.role);
    };
};

const manager1 = new Manager("Hass", "hfj34456", "email@email.com", "512-876-0989", "Manager");

manager1.getName();
manager1.getID();
manager1.getEmail()
manager1.getOfficeNumber();
manager1.getRole()

module.exports = Manager;