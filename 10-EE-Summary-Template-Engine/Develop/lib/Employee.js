class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };
    getName(name) {
        console.log(name);
    };
    getID(id) {
        console.log(id);
    };
    getEmail(email) {
        console.log(email);
    };
    getRole() {
        let role = "Employee";
        return(role)
    };
    
};

const employee1 = new Employee("Carmen", "cj12345", "email@someemail.com");
employee1.getName();
employee1.getID();
employee1.getEmail();
employee1.getRole();


module.exports = Employee;