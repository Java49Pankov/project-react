import { Employee } from "../model/Employee"
import { getElement, getRandomDate, getRandomNumber } from "../utils/random";
import employeeConfig from "../config/employee-config.json";

export function createRandomEmployee(): Employee {
    const { minId, maxId, departments, minBirthYear, maxBirthYear, minSalary, maxSalary } = employeeConfig;
    const id = getRandomNumber(minId, maxId, true, true);
    const name = "name" + id;
    const department = getElement(departments);
    const birthDate = getRandomDate(minBirthYear, maxBirthYear).toISOString().slice(0, 10);
    const salary = getRandomNumber(minSalary, maxSalary);
    const employee: Employee = {
        id, name, department,
        birthDate, salary
    }
    return employee;
}

export function statAge(employees: Employee[]): { minValue: number, maxValue: number, avgValue: number } {
    const currentYear = new Date().getFullYear();
    const result = employees.reduce((res, empl) => {
        const age = currentYear - new Date(empl.birthDate).getFullYear();
        if (res.minValue > age) {
            res.minValue = age;
        } else if (res.maxValue < age) {
            res.maxValue = age
        }
        res.avgValue += age;
        return res;

    }, { minValue: 1000, maxValue: 0, avgValue: 0 });
    result.avgValue = Math.trunc(result.avgValue / employees.length);
    return result;
}
export function statSalary(employees: Employee[]): { minValue: number, maxValue: number, avgValue: number } {

    const result = employees.reduce((res, empl) => {
        const { salary } = empl;
        if (res.minValue > salary) {
            res.minValue = salary;
        } else if (res.maxValue < salary) {
            res.maxValue = salary;
        }
        res.avgValue += salary;
        return res;

    }, { minValue: Number.MAX_VALUE, maxValue: 0, avgValue: 0 });
    result.avgValue = Math.trunc(result.avgValue / employees.length);
    Math.trunc(result.avgValue / employees.length);
    return result;
}