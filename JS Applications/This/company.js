class Company {

    constructor() {
        this.departments = [];
    }

    addEmployee(username, salary, position, department){

        if (!username || !salary || ! position || !department) {
            return "Invalid input!";
        }

        if (slaty < 0) {
            throw new Error("Invalid input!");
        }

        let employee = {
            username,
            salary,
            position,
            department
        };

        this.departments.push(employee);

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment(){
        
    }
}
