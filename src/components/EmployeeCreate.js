import * as React from 'react';
import {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useSelector } from 'react-redux';
import { Button } from '@mui/material';
function EmployeeForm() {
   
   const [employee, setEmployee] =useState({
    first_name: '',
    last_name: ''
   })

//    const handleChange = e => {
//     setEmployee({
//         ...employee,
//         [e.target.name]: e.target.value,
//     });
//    };

//    const handleSubmit=(e)=> {
//     e.preventDefault();
//     console.log(employee);
// };
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
        value=""
      
        />
    
        <TextField
               name="first_name" 
               label= "First Name"
               value=""
               
        /><TextField
        name="last_name"
              label= "Last Name"
              value=""
       />
        <TextField
        name="email"
              label= "Email"
              value=""
       />
      <TextField
      name="phone_number"
              label= "Phone Number"
              value=""
       />
        <TextField
        name="hire_date"
              label= "Hire Date"
              value=""
              type="date"
              
       />
       <TextField
       name="salary"
              label= "Salary"
              value=""
            
       />
       <TextField
       name="commission_pct"
              label= "Commission PCT"
              value=""
              
       />
        </div>
        <Button variant="contained">Save</Button>

        <Button variant="contained">Cancel</Button>
    </Box>
  
    );
}
export default EmployeeForm

//import { useDispatch } from 'react-redux';

//const handleSubmit = (e) => {
 //   e.preventDefault();
//    console.log(employee);
//}