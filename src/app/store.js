import {configureStore} from '@reduxjs/toolkit'
import employeesReducer  from '../features/employees/employeeSlice'
import { apiSlice } from "../api/apiSlice";
import assetsReducer from '../features/assetSlice'

export const store = configureStore ({
reducer: {
    employees: employeesReducer,
    assets: assetsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
},
middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})
