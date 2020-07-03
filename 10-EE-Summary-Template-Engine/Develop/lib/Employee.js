class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };
    
    getName() {
        return this.name;
        // console.log(this.name);
    };
    
    getId() {
        return (parseInt(this.id));
        // console.log(this.id);
    };
    
    getEmail() {
        return this.email;
        // console.log(this.email);
    };
    
    getRole() {
        return "Employee";
        // console.log(this.role);
    };
};

// const employee1 = new Employee("Carmen", "cj12345", "email@someemail.com", "Employee");
// employee1.getName();
// employee1.getID();
// employee1.getEmail();
// employee1.getRole();


module.exports = Employee;