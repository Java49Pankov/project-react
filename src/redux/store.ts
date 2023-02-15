import { configureStore } from "@reduxjs/toolkit";
import { employeeReducer } from "./employeesSlice";

export const store = configureStore({
    reducer: {
        employees: employeeReducer
    }
})