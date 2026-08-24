import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "../Features/TODOS/todoSlice";



export const store = configureStore({

    reducer : todoReducer
})