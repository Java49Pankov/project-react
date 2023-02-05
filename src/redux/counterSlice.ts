import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0
}

const counterSlice = createSlice({
    initialState,
    name: 'counter',
    reducers: {
        increment: (state) => {
            state.count++;
        },
        decrement: (state) => {
            state.count--;
        },
        reset: state => {
            state.count = initialState.count;
        }
    }
})

export const counterActions = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
