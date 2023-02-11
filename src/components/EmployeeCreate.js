import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useState} from 'react'
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee } from '../features/employees/employeeSlice';
// import {v4 as uuid} from 'uuid'
import { useNavigate } from 'react-router-dom';

function EmployeeCreate() {
  const {employees}=useSelector(state=>state.employees)
  const proxId=Number(employees[employees.length -1].employee_id)+1

const [employee, setEmployee]=useState({
employee_id: proxId,
first_name:'',
last_name:'',
email:'',
phone_number: '',
hire_date: '',
salary:'',
commission_pct: ''
});

let errArray = [];
const dispatch=useDispatch();
const navigate=useNavigate();

const handleChange=e=>{
setEmployee({
  ...employee,
  [e.target.name]: e.target.value,
})
}

const handleSubmit = (e) => {
e.preventDefault();
if(validateEmployee(employee)) {
  dispatch(addEmployee ({
    ...employee,
     // id: uuid(),
    }));
    alert("Record inserted successfully!");
    navigate('/');
}
};

const validateEmployee = (employee) => {
  const keys = Object.keys(employee);
  const values = Object.values(employee);
  if(values.every(v => v !== '')) {
    return true;
  } else {
    values.forEach((val, index) => {
      const errMsg = getErrorString(keys[index].toString());
      if(!val) {
        errArray.push(errMsg);
      }
    })
    alert('Incomplete. You must complete all the required fields.\nRemaining field/s: \n'  + errArray.join('\n'));
  }

}

  const getErrorString = (prop) => {
   switch (prop) {
        case 'employee_id':
        return 'Employee Id';
        case 'first_name':
        return 'First Name';
        case 'last_name':
        return 'Last Name';
        case 'email':
        return 'E-mail';
        case 'phone_number':
        return 'Phone Number';
        case 'hire_date':
        return 'Hire Date';
        case 'salary':
        return 'Salary';
        case 'commission_pct':
        return 'Commission PCT';
      default:
        break;
    }
  }

  return (
    <>
    <h1>Employees-Create</h1>
    <Box 
      component="form" 
         sx={{'& > :not(style)': { m: 1, width: '25ch' },
         height: 400, width: '60%', justifyContent: 'center', 
         alignItems: 'center', marginLeft: '28%', maxWidth: '695px' }}
      noValidate
      autoComplete="off">
      <TextField
      name="employee_id" value= {proxId} label="ID" variant="outlined"  InputProps={{
        readOnly: true,
      }} onChange={handleChange} />
      <TextField 
      name= "first_name" label="First Name" variant="outlined" onChange={handleChange}/>
      <TextField
      name="last_name" label="Last Name" variant="outlined" onChange={handleChange}/>
      <TextField 
      name="email" label="Email" type="email" variant="outlined" onChange={handleChange}/>
      <TextField 
      name="phone_number"label="Phone Number" type="number" variant="outlined" onChange={handleChange} />
      <TextField
      name="hire_date" label="Hire Date" type="date" variant="outlined" onChange={handleChange} InputLabelProps={{shrink:true}} />
      <TextField 
      name="salary" label="Salary" type="number" variant="outlined" onChange={handleChange}/>
      <TextField 
      name="commission_pct" type="number" label="Commission PCT" variant="outlined" onChange={handleChange} />
            <Button
                variant="contained"
                color="primary"
                size="large"
                style={{ marginLeft: 16 }}
                onClick={handleSubmit}>
                Save
            </Button>
    </Box>
   </>
  );
}

export default EmployeeCreate