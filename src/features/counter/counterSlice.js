import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
};

export const countSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload // 액션에 대한 정보를 담고 있는 데이터
        }
    }
});

export const {increment, decrement, incrementByAmount} = countSlice.actions;

export const incrementAsync = (amount) => (dispatch) => {
    setTimeout(() => {
        dispatch(incrementByAmount(amount))
    }, 1000)
};
// setTimeout(실행할 함수, 지연시간)

export const selectCount = (state) => state.counter.value
// 업데이트 후 보여지는 value값

export default countSlice.reducer;