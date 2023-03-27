//en el slice pongo el estado inicial de redux. aunque normalmente lo consumiría de api.
import {createSlice} from '@reduxjs/toolkit'

// const employees= api.getAllEmployees()
const initialState = {

employees : []
}
       
export const employeeSlice = createSlice({
name: 'employees',
initialState,
reducers: {
    //mi estado de redux recibe allEmployees de la APIREST (y atraves de ella de la BD)
 addEmployee: (state, action) => {
state.employees.push(action.payload)
//[...state, action.payload]
 },
 deleteEmployee: (state, action) => {
   
    const employeeFound=state.employees.find(employee=>employee.employee_id===action.payload)
    if(employeeFound) {
        state.employees.splice(state.employees.indexOf(employeeFound), 1)
    }
    
 },
 editEmployee: (state, action) => {
     const foundIndex = state.employees.findIndex(employee => employee.employee_id === action.payload.employee_id);
     state.employees[foundIndex] = action.payload;
 },

},
});
export const {addEmployee, deleteEmployee, editEmployee, }=employeeSlice.actions;
export default employeeSlice.reducer