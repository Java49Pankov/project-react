import { createSlice } from "@reduxjs/toolkit";
import { LoginData } from "../model/LoginData";
import { AuthServiceFirebase } from "../service/AuthServiceFirebase";
import { codeActions } from "./codeSlice";

const authService = new AuthServiceFirebase();
const initialState: { authenticated: string } = {
    authenticated: localStorage.getItem('authUser') || ''
};

const authSlice = createSlice({
    initialState: initialState,
    name: "auth",
    reducers: {
        setAuthenticated(state, data) {
            state.authenticated = data.payload;
        }
    }
})

export const authReducer = authSlice.reducer;
const actions = authSlice.actions;
export const authActions = {
    login: (loginData: LoginData) => {
        return async (dispatch: any) => {
            try {
                const authUser = await authService.login(loginData);
                localStorage.setItem("authUser",authUser);
                dispatch(codeActions.setCode("OK"));
                dispatch(actions.setAuthenticated(authUser));
            } catch (error) {
                dispatch(codeActions.setCode("Creadentials Error"));
            }
        } 
    },
    logout: () => {
        return async (dispatch: any) => {
            await authService.logout();
            localStorage.setItem("authUser", '');
            dispatch(actions.setAuthenticated(''));
        }
    }
}