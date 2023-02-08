import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userName: '',
};

const authSlice = createSlice({
    initialState,
    name: 'authenticated',
    reducers: {
        login: (state, data) => {
            if (state.userName.length == 0) {
                state.userName = data.payload
            }
        },
        logout: (state) => {
            if (state.userName.length != 0) {
                state.userName = '';
            }
        }
    }
})

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;