
import { Button } from '@mui/material';
import {useState} from 'react'

function EmployeeForm() {
   
   const [employee, setEmployee] =useState({
    first_name: '',
    last_name: ''
   })

   const handleChange = e => {
    setEmployee({
        ...employee,
        [e.target.name]: e.target.value,
    });
   };

   const handleSubmit=(e)=> {
    e.preventDefault();
    console.log(employee);
};
    return (
    //  <form onSubmit={handleSubmit}>
    // //     <input 
    //     name= 'first_name' 
    //     type= "text"
    //      placeholder="first_name" 
    //      onChange={handleChange}
    //       />

    //     <textarea 
    //         name= "last_name" 
    //         placeholder="last_name"
    //         onChange={handleChange}
            // ></textarea>
            <Button variant="contained">Save</Button>
    // </form>  
    )
   }

export default EmployeeForm

//import { useDispatch } from 'react-redux';

//const handleSubmit = (e) => {
 //   e.preventDefault();
//    console.log(employee);
//}