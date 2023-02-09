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

const handleChange = e => {
  console.log(e)
  setThisEmployee({
       ...thisEmployee,
      [e.target.name]: e.target.value,
   });
 };

//  const handleSubmit=(e)=> {
//   e.preventDefault();
//   console.log(employee);
// };
 
 
 //dolo
  const [thisEmployee, setThisEmployee]=useState(props.employee) 
  const [enable, setEnable]=useState(true)
  const {employees}=useSelector(state=>state.employees)

const handleEditEmployee=()=>
{
  console.log(enable)
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
        disabled
        // InputProps={{
        //   readOnly: !enable,
        // }}
        />
    
        <TextField
               name="first_name" 
               label= "First Name"
               value={thisEmployee.first_name}
               InputProps={{
                readOnly: enable,
              }}
              onChange={handleChange}
        />
         <TextField
         name="last_name"
               label= "Last Name"
               value={thisEmployee.last_name}
               InputProps={{
                readOnly: enable,
              }}
               onChange={handleChange}
        />
         <TextField
         name="email"
               label= "Email"
               value={thisEmployee.email}
               InputProps={{
                readOnly: enable,
              }}
               onChange={handleChange}
        />
       <TextField
       name="phone_number"
               label= "Phone Number"
               value={thisEmployee.phone_number}
               InputProps={{
                readOnly: enable,
              }}
               onChange={handleChange}
        />
         <TextField
         name="hire_date"
               label= "Hire Date"
               value={thisEmployee.hire_date}
               type="date"
               InputLabelProps={{shrink:true}}
               InputProps={{
                readOnly: enable,
              }}
               onChange={handleChange}
               disabled
              
        />
        <TextField
        name="salary"
               label= "Salary"
               value={thisEmployee.salary}
               InputProps={{
                readOnly: enable,
              }}
               onChange={handleChange}
        />
        <TextField
        name="commission_pct"
               label= "Commission PCT"
               value={thisEmployee.commission_pct}
               InputProps={{
                readOnly: enable,
              }}
               onChange={handleChange}
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