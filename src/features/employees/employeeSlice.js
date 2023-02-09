//en el slice pongo el estado inicial de redux. aunque normalmente lo consumiría de api.
import {createSlice, current} from '@reduxjs/toolkit'

const initialState = {
    employees : [
{
    employee_id: "1",
    first_name: "Dolores",
    last_name: "Pizarro",
    email: "lolipizarro@hotmail.com",
    phone_number: 3564625560,
    hire_date: "2023-01-01",
    salary: 250000,
    commission_pct: "10%"
},
{ 
employee_id: "2",
first_name: "Nicolas",
last_name: "Merlo",
email: "nmmerlo@hotmail.com",
phone_number: 35155462551,
hire_date: "2023-01-01",
salary: 250000,
commission_pct: "10%"
},
{ 
    employee_id: "3",
    first_name: "Milton",
    last_name: "Moreira",
    email: "milton_mor@hotmail.com",
    phone_number: 3564546251,
    hire_date: "2023-01-01",
    salary: 250000,
    commission_pct: "10%"
    },
    { 
        employee_id: "4",
        first_name: "Milagros",
        last_name: "Carranza",
        email: "mili_car@hotmail.com",
        phone_number: 3513424751,
        hire_date: "2023-01-01",
        salary: 250000,
        commission_pct: "10%"
        },
        { 
            employee_id: "5",
            first_name: "Silvia",
            last_name: "Caballero",
            email: "silvic@hotmail.com",
            phone_number: 3512224751,
            hire_date: "2023-01-01",
            salary: 250000,
            commission_pct: "10%"
            },
               { 
                employee_id: "6",
                first_name: "Florencia",
                last_name: "Montes",
                email: "flor_montes@hotmail.com",
                phone_number: 3513524751,
                hire_date: "2023-01-01",
                salary: 250000,
                commission_pct: "10%"
                },
            
                { 
                    employee_id: "7",
                    first_name: "Franco",
                    last_name: "Perez",
                    email: "franpe@hotmail.com",
                    phone_number: 3564621859,
                    hire_date: "2023-01-01",
                    salary: 250000,
                    commission_pct: "10%"
                    },
]    
}
    
       
export const employeeSlice = createSlice({
name: 'employees',
initialState,//esto es lo mismo que deicr initialstate: initialstate
reducers: {
 addEmployee: (state, action) => {
//console.log(state,action)
state.employees.push(action.payload)
//state.employees=[...state,action.payload]
 },
 //do
 deleteEmployee: (state, action) => {
   
    const employeeFound=state.employees.find(employee=>employee.employee_id===action.payload)
    if(employeeFound) {
        state.employees.splice(state.employees.indexOf(employeeFound), 1)
    }
    
 },
 //do
 editEmployee: (state, action) => {
   console.log("state", current(state.employees))
   console.log("action", action.payload)
    //...agregar en ell array en base a la mod

     //state.employees=[...state.employees, action.payload] 
     const foundIndex = state.employees.findIndex(employee => employee.employee_id === action.payload.employee_id);
     state.employees[foundIndex] = action.payload;
 },
//  createEmployee: (state, action) => {
//     console.log("state", current(state.employees))
//     console.log("action", action.payload)
//      //...agregar en ell array en base a la mod
 
//       //state.employees=[...state.employees, action.payload] 
//       state.employees=[state.employees, ...action.payload] 
//   }
},
});
//do
export const {addEmployee, deleteEmployee, editEmployee, }=employeeSlice.actions;
//do
export default employeeSlice.reducer