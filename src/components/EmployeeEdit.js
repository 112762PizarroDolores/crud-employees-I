import * as React from 'react';
import {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useSelector } from 'react-redux';
import { Button } from '@mui/material';

export default function EmployeeEdit(props) {
 //Dolo
//  const [employee, setEmployee] =useState({
//   first_name: '',
//   last_name: ''
//  })

//  const handleChange = e => {
//   setEmployee({
//       ...employee,
//       [e.target.name]: e.target.value,
//   });
//  };

//  const handleSubmit=(e)=> {
//   e.preventDefault();
//   console.log(employee);
// };
 
 
 //dolo
  const [thisEmployee, setThisEmployee]=useState(props.employee) 
  const [enable, setEnable]=useState(false)
  const {employees}=useSelector(state=>state.employees)
console.log(employees)
const handleEditEmployee=()=>
{
  setEnable(!enable)
}

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          label= "Id"
        value={thisEmployee.employee_id}
        disabled={enable}
        />
    
        <TextField
               label= "First Name"
               value={thisEmployee.first_name}
               
        />
         <TextField
               label= "Last Name"
               value={thisEmployee.last_name}
        />
         <TextField
               label= "Email"
               value={thisEmployee.email}
        />
       <TextField
               label= "Phone Number"
               value={thisEmployee.phone_number}
        />
         <TextField
               label= "Hire Date"
               value={thisEmployee.hire_date}
               type="date"
               InputLabelProps={{shrink:true}}
              
        />
        <TextField
               label= "Salary"
               value={thisEmployee.salary}
        />
        <TextField
               label= "Commission PCT"
               value={thisEmployee.commission_pct}
        />
      </div>

      <Button
                variant="contained"
                onClick={ handleEditEmployee}
                color="primary"
                size="small"
                style={{ marginLeft: 16 }}
             
            >
                Edit
            </Button>
    </Box>
  );
}


// const EmployeeEdit = () => {
//   return (
//     <div>EmployeeEdit</div>
//   )
// }

// export default EmployeeEdit