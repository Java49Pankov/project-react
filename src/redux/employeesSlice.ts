import { createSlice } from "@reduxjs/toolkit";
import { Employee } from "../model/Employee";
const employees: Employee[] = [];
const initialState = {
    arrEmployee: employees
};

const employeesSlice = createSlice({
    initialState,
    name: "employees",
    reducers: {
        addEmployee: (state, data) => {
            const newEmployee: Employee[] = state.arrEmployee.slice();
            newEmployee.push(data.payload);
            state.arrEmployee = newEmployee;
        }
    }
})

export const employeeActions = employeesSlice.actions;
export const employeeReducer = employeesSlice.reducer;