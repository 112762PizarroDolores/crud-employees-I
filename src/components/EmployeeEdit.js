import * as React from 'react';
import {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { editEmployee } from '../features/employees/employeeSlice';
import { useNavigate } from 'react-router-dom';

export default function EmployeeEdit(props,{navigation}) {

const [thisEmployee, setThisEmployee]=useState(props.employee)
const [temp, setTemp]=useState({})
const [enable, setEnable]=useState(true)
const [isEdit, setIsEdit]=useState(false)
const dispatch=useDispatch()
const navigate=useNavigate()
const handleChange = e => {
  setThisEmployee({
       ...thisEmployee,
      [e.target.name]: e.target.value,
   });
}

const handleEditEmployee = () => {
  setEnable(!enable);
  setTemp(thisEmployee);
}

const handleSaveEmployee = () => {
  if(validateEmployee(thisEmployee)) {
  dispatch(editEmployee(thisEmployee));
  
  alert("Record updated!");
  setIsEdit(false);
  setEnable(true);
}
}

let errArray = [];
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


const handleCancelEmployee = () => {
  setIsEdit(false);
  setEnable(true);
  setThisEmployee(temp);
  // eslint-disable-next-line no-template-curly-in-string
  navigate('/edit-employee/${id}');
}

  return (
    <>
    <h1>Employees:
     Read & Update</h1>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        height: 400, width: '60%', justifyContent: 'center', alignItems: 'center', marginLeft: '28%', maxWidth: '695px'}}
      noValidate
      autoComplete="off">
      <div>
        <TextField
        label= "Id"
        value={thisEmployee.employee_id}
        disabled/>

        <TextField
               name="first_name"
               label= "First Name"
               value={thisEmployee.first_name}
               InputProps={{readOnly: enable}}
              onChange={handleChange}/>
         <TextField
               name="last_name"
               label= "Last Name"
               value={thisEmployee.last_name}
               InputProps={{readOnly: enable,}}
               onChange={handleChange}/>
        <TextField
               name="email"
               label= "Email"
               value={thisEmployee.email}
               InputProps={{readOnly: enable,}}
               onChange={handleChange}/>
        <TextField
               name="phone_number"
               label= "Phone Number"
               value={thisEmployee.phone_number}
               InputProps={{readOnly: enable,}}
               onChange={handleChange}/>
         <TextField
               name="hire_date"
               label= "Hire Date"
               value={thisEmployee.hire_date}
               type="date"
               InputLabelProps={{shrink:true}}
               InputProps={{readOnly: enable,}}
               onChange={handleChange}
               disabled/>
        <TextField
               name="salary"
               label= "Salary"
               value={thisEmployee.salary}     
               InputProps={{readOnly: enable,}}
               onChange={handleChange}/>
        <TextField
               name="commission_pct"
               label= "Commission PCT"
               value={thisEmployee.commission_pct}
               size='large'
               InputProps={{readOnly: enable}}
               onChange={handleChange}/>
      </div>


            <Button
                variant="contained"
                onClick={ handleSaveEmployee}
                color="primary"
                size="small"
                style={{ marginLeft: 16 }}
                disabled={enable?true: false}>
                Save
            </Button>
            <Button
                variant="contained"
                onClick={ handleEditEmployee}
                color="primary"
                size="small"
                style={{ marginLeft: 16 }}
                disabled={enable?false: true}>
                Edit
            </Button>
            <Button
                variant="contained"
                onClick={ handleCancelEmployee}
                color="primary"
                size="small"
                style={{ marginLeft: 16 }}
                disabled={enable?true: false}>
                Cancel
            </Button>
    </Box>
    </>
  );
}