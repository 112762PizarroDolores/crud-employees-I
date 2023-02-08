//en el slice pongo el estado inicial de redux. aunque normalmente lo consumiría de api.
import {createSlice} from '@reduxjs/toolkit'

const initialState = [
{
    employee_id: "1",
    first_name: "Dolores",
    last_name: "Pizarro",
    email: "lolipizarro@hotmail.com",
    phone_number: 3564625560,
    hire_date: "07/01/2023",
    salary: 250000,
    comission_pct: "10%"
},
{ 
employee_id: "2",
first_name: "Nicolas",
last_name: "Merlo",
email: "nmmerlo@hotmail.com",
phone_number: 35155462551,
hire_date: "07/01/2022",
salary: 250000,
comission_pct: "10%"
},
{ 
    employee_id: "3",
    first_name: "Milton",
    last_name: "Moreira",
    email: "milton_mor@hotmail.com",
    phone_number: 3564546251,
    hire_date: "05/01/2022",
    salary: 250000,
    comission_pct: "10%"
    },
    { 
        employee_id: "4",
        first_name: "Milagros",
        last_name: "Carranza",
        email: "mili_car@hotmail.com",
        phone_number: 3513424751,
        hire_date: "05/01/2022",
        salary: 250000,
        comission_pct: "10%"
        },
        { 
            employee_id: "5",
            first_name: "Silvia",
            last_name: "Caballero",
            email: "silvic@hotmail.com",
            phone_number: 3512224751,
            hire_date: "05/01/2022",
            salary: 250000,
            comission_pct: "10%"
            },
               { 
                employee_id: "6",
                first_name: "Florencia",
                last_name: "Montes",
                email: "flor_montes@hotmail.com",
                phone_number: 3513524751,
                hire_date: "05/01/2022",
                salary: 250000,
                comission_pct: "10%"
                },
            
                { 
                    employee_id: "7",
                    first_name: "Franco",
                    last_name: "Perez",
                    email: "franpe@hotmail.com",
                    phone_number: 3564621859,
                    hire_date: "05/01/2022",
                    salary: 250000,
                    comission_pct: "10%"
                    },
]    
    
    
    
export const employeeSlice = createSlice({
name: 'employees',
initialState,
reducers: {
 addEmployee: (state, action) => {
console.log(state,action)
 }
}
})


export default employeeSlice.reducer