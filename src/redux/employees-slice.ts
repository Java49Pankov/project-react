import { createSlice } from '@reduxjs/toolkit';
import { Employee } from '../model/Employee';
import { CompanyFirebase } from '../service/CompanyFirebase';
import { codeActions } from './codeSlice';
const company = new CompanyFirebase();
const initialState: { employees: Employee[] } = {
    employees: []
}
const employeesSlice = createSlice({
    initialState,
    name: "company",
    reducers: {
        setEmployees: (state, data) => {
            state.employees = data.payload;
        }
    }
})

export const employeesReducer = employeesSlice.reducer;
const actions = employeesSlice.actions;

export const employeesActions: any = {
    addEmployee: (empl: Employee) => {
        return async (dispatch: any) => {
            try {
                await company.addEmployee(empl);
                try {
                    const employees = await company.getAllEmployees();
                    dispatch(codeActions.setCode("OK"));
                    dispatch(actions.setEmployees(employees));
                } catch (error) {
                    dispatch(codeActions.setCode("Unknown Error"));
                }
            } catch (error) {
                dispatch(codeActions.setCode("Authorization Error"));
            }
        }
    },
    updateEmployee: (empl: Employee) => {
        return async (dispatch: any) => {
            try {
                await company.updateEmployee(empl);
                try {
                    const employees = await company.getAllEmployees();
                    dispatch(actions.setEmployees(employees));
                    dispatch(codeActions.setCode("OK"));
                } catch (error) {
                    dispatch(codeActions.setCode("Unknown Error"));
                }
            } catch (error) {
                dispatch(codeActions.setCode("Authorization Error"));
            }
        }
    },
    removeEmployee: (id: number) => {
        return async (dispatch: any) => {
            try {
                await company.removeEmployee(id);
                try {
                    const employees = await company.getAllEmployees();
                    dispatch(actions.setEmployees(employees));
                    dispatch(codeActions.setCode("OK"))
                } catch {
                    dispatch(codeActions.setCode("Unknown Error"));
                }
            } catch (error) {
                dispatch(codeActions.setCode("Authorization Error"));
            }
        }
    },
    getEmployees: () => {
        return async (dispatch: any) => {
            try {
                const employees = await company.getAllEmployees();
                dispatch(actions.setEmployees(employees));
                dispatch(codeActions.setCode("OK"));
            } catch (error) {
                dispatch(codeActions.setCode("Unknown Error"));
            }
        }
    },
    addBulkEmployees: (employeesArr: Employee[]) => {
        return async (dispatch: any) => {
            try {
                employeesArr.forEach(async (empl) => await company.addEmployee(empl));
                try {
                    const employees = await company.getAllEmployees();
                    dispatch(actions.setEmployees(employees));
                    dispatch(codeActions.setCode("OK"));
                } catch (error) {
                    dispatch(codeActions.setCode("Unknown Error"));
                }
            } catch (error) {
                dispatch(codeActions.setCode("Authorization Error"));
            }
        }
    }
}