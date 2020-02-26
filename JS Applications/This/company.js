class Company {

    constructor() {
        this.departments = [];
        this.departmentsObj = {};
    }

    addEmployee(username, salary, position, department) {

        if (!username || !salary || !position || !department || salary < 0) {
            throw new Error("Invalid input!");
        }

        let employee = {
            username,
            salary,
            position,
            department
        };

        if (!this.departments[department]) {
            this.departments[department] = [];
            this.departmentsObj[department] = [];
        }

        this.departments[department].push(employee);
        this.departmentsObj[department].push(salary);

        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }

    getHighestAverageSalary() {
        let highestAverageSalaryDepartment = Object.keys(this.departmentsObj).sort((a, b) => this.departmentsObj[b].reduce((acc, c) => acc += c)/ this.departmentsObj[b].length - this.departmentsObj[a].reduce((acc, c) => acc += c)/ this.departmentsObj[a].length)[0];



        let highestAverageSalary = this.departmentsObj[highestAverageSalaryDepartment].reduce((acc, c) => acc += c) / this.departmentsObj[highestAverageSalaryDepartment].length;

        return {
            highestAverageSalaryDepartment,
            highestAverageSalary
        }
    }

    bestDepartment() {
        let department = this.getHighestAverageSalary();

        return `Best Department is: ${department.highestAverageSalaryDepartment}\nAverage salary: ${department.highestAverageSalary.toFixed(2)}\n${ this.departments[department.highestAverageSalaryDepartment].sort((a,b) => b.salary - a.salary || a.username.localeCompare(b.username)).reduce((acc,e) =>acc += `${e.username} ${e.salary} ${e.position}\n`,'').trim()}`;
    }
}
