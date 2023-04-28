import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../features/counter/counterSlice";

export default configureStore({
    reducer: {
        counter: countReducer,
    },
});