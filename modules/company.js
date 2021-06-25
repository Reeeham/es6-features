import Employee from "./employee.js";

export class Company{

    hire(...names){
        this.employees = names.map( n => new Employee(n))
    }
    doWork() {
        return this.employees.map((e) =>  e.doWork());
    }
}