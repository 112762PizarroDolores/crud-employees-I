import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useState} from 'react'
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee } from '../features/employees/employeeSlice';
import { useNavigate } from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckIcon from '@mui/icons-material/Check';
import api from '../services/api';

function EmployeeCreate() {
  const {employees}=useSelector(state=>state.employees)
  // const proxId=Number(employees[employees.length -1].employee_id)+1

const [employee, setEmployee]=useState({ //estado local para guardar lo introducido por form
// id_employee: proxId,
first_name:'',
last_name:'',
cuit:'',
team_id: '',
join_date: '',
rol:''
// commission_pct: ''
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
   const url = "http://localhost:3001/api/employees"
   api.createEmployee(url, employee)
    dispatch(addEmployee ({
    ...employee,
    
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
const handleCancelEmployee = () => {

  navigate('/');
}
  const getErrorString = (prop) => {
   switch (prop) {
        case 'id_employee':
        return 'id_employee';
        case 'first_name':
        return 'first_name';
        case 'last_name':
        return 'last_name';
        case 'cuit':
        return 'cuit';
        case 'team_id':
        return 'team_id';
        case 'join_date':
        return 'join_date';
        case 'rol':
        return 'rol';
        
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
      {/* <TextField
      name="employee_id" value= {proxId} label="ID" variant="outlined"  InputProps={{
        readOnly: true,
      }} onChange={handleChange} /> */}
      <TextField 
      name= "first_name" label="First Name" variant="outlined" onChange={handleChange}/>
      <TextField
      name="last_name" label="Last Name" variant="outlined" onChange={handleChange}/>
      <TextField 
      name="cuit" label="Cuit" type="cuit" variant="outlined" onChange={handleChange}/>
      <TextField 
      name="team_id"label="Team_id" type="number" variant="outlined" onChange={handleChange} />
      <TextField
      name="join_date" label="Join_date" type="date" variant="outlined" onChange={handleChange} InputLabelProps={{shrink:true}} />
      <TextField 
      name="rol" label="Rol" type="rol" variant="outlined" onChange={handleChange}/>
      {/* <TextField 
      name="commission_pct" type="number" label="Commission PCT" variant="outlined" onChange={handleChange} /> */}
            <Button
                variant="contained"
                color="primary"
                startIcon={<CheckIcon />} 
                size="large"
                style={{ marginLeft: 16 }}
                onClick={handleSubmit}>
                Save
            </Button>
            <Button
                variant="contained"
                onClick={ handleCancelEmployee}
                color="primary"
                startIcon={<CancelIcon />} 
                size="large"
                style={{ marginLeft: 16 }}
                >
                Cancel
            </Button>
    </Box>
   </>
  );
}

export default EmployeeCreate