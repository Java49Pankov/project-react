import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authenticated: false
};

const authSlice = createSlice({
    initialState,
    name: 'authenticated',
    reducers: {
        login: (state) => {
            if (!state.authenticated) {
                state.authenticated = true;
            }
        },
        logout: (state) => {
            if (state.authenticated) {
                state.authenticated = false;
            }
        }
    }
})

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;