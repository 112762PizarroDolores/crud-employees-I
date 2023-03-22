import {configureStore} from '@reduxjs/toolkit'
import employeesReducer  from '../features/employees/employeeSlice'
import { apiSlice } from "../api/apiSlice";

export const store = configureStore ({
reducer: {
    employees: employeesReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
},
middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})
