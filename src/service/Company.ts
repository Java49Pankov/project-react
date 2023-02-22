import { Employee } from "../model/Employee";

export class Company {
    private employees: Employee[] = [];
    addEmployee(empl: Employee): void {
        this.employees.push(empl)
    }

    updateEmployee(empl: Employee): void {
        const emplUpdated = this.getEmployee(empl.id);
        if (emplUpdated != null) {
            empl.department = emplUpdated.department;
             empl.name = emplUpdated.name;
             empl.birthDate = emplUpdated.birthDate;
            if (emplUpdated.salary >= 20000) {
                empl.salary = emplUpdated.salary * 0.9;
            } else {
                empl.salary = emplUpdated.salary * 1.1;
            }
            this.removeEmployee(empl.id);
            this.addEmployee(empl);
        }
    }

    getEmployee(id: number): Employee | null {
        const index: number = this.employees.findIndex(empl => empl.id === id)
        return index < 0 ? null : this.employees[index];
    }

    removeEmployee(id: number): void {
        const index: number = this.employees.findIndex(empl => empl.id === id);
        index >= 0 && this.employees.splice(index, 1);
    }

    getAllEmployees(): Employee[] {
        return this.employees.slice();
    }
}