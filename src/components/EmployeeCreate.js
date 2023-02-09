import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useState} from 'react'
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../features/employees/employeeSlice';
import {v4 as uuid} from 'uuid'
import { useNavigate } from 'react-router-dom';

function EmployeeCreate() {

const [employee, setEmployee]=useState({
employee_id: '',
first_name:'',
last_name:'',
email:'',
phone_number: '',
hire_Date: '',
salary:'',
commission_pct: ''
})

const dispatch=useDispatch()
const navigate=useNavigate()

const handleChange=e=>{
setEmployee({
  ...employee,
  [e.target.name]: e.target.value,
})
}
const handleSubmit = (e) => {
e.preventDefault();

dispatch(addEmployee ({
...employee,
id: uuid(),
}) )

alert("Registro insertado correctamente!")

navigate('/')
};

  return (
    
    <Box 
      component="form" 
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      
    >
      <TextField
      name="employee_id" label="ID" variant="outlined" onChange={handleChange} />
      <TextField 
      name= "first_name" label="First Name" variant="outlined" onChange={handleChange}/>
      <TextField
      name="last_name" label="Last Name" variant="outlined" onChange={handleChange}/>
      <TextField 
      name="email" label="Email" variant="outlined" onChange={handleChange}/>
      <TextField 
      name="phone_number"label="Phone Number" variant="outlined" onChange={handleChange} />
      <TextField
      name="hire_date" label="Hire Date" type="date" variant="outlined" onChange={handleChange} />
      <TextField 
      name="salary" label="Salary" variant="outlined" onChange={handleChange}/>
      <TextField 
      name="commission_pct" label="Commission PCT" variant="outlined" onChange={handleChange} />
  <Button
                variant="contained"
                color="primary"
                size="small"
                style={{ marginLeft: 16 }}
                onClick={handleSubmit}
            >
                Save
            </Button>
    </Box>
   
  )
}

export default EmployeeCreate