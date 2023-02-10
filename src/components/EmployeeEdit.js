import * as React from 'react';
import {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useSelector, useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { editEmployee } from '../features/employees/employeeSlice';
import { useNavigate } from 'react-router-dom';


//DOLO: FALTA USEDISPATCH?PORQUE USÉ EL USE SELECTOR PARA TRAER LOS DATOS DEL STATE, PERO AHORA TAMBIEN DEBO MODIFICARLOS..
//ENTONCES DEBERIA AGREGAR USE DISPATCH PARA HACER EL SAVE..
export default function EmployeeEdit(props,{navigation}) {
 //Dolo
//  const [employee, setEmployee] =useState({
//   first_name: '',
//   last_name: ''
//  })
const [thisEmployee, setThisEmployee]=useState(props.employee)//este es empleado local pero que se va a editar
const [temp, setTemp]=useState({})//estado local para guardar el empelado original que no quiero cambiar
const [enable, setEnable]=useState(true)
const {employees}=useSelector(state=>state.employees)
const [isEdit, setIsEdit]=useState(false)
const dispatch=useDispatch()
const navigate=useNavigate()


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

  const handleEditEmployee=()=>
{

  console.log(enable)
  setEnable(!enable)
  setTemp(thisEmployee)
  // setIsEdit(!isEdit)

}

const handleSaveEmployee=()=>
{

  // const id = thisEmployee?.employee_id;
  dispatch(editEmployee(thisEmployee))
  alert("Registro actualizado")
  setIsEdit(false)
  setEnable(true)


}
const handleCancelEmployee=()=>
{
  
  // e.preventDefault();
  const id = thisEmployee?.employee_id.toString();
  console.log(id)
  // dispatch(editEmployee(thisEmployee))
   setIsEdit(false)
   setEnable(true)
   setThisEmployee(temp)
   
   //navigation?.push('edit-employee', {id:id})
  //  navigate(`/edit-employee/${id}`, { replace: true })
   
  navigate('/edit-employee/${id}' )
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
        //   InputProps={{
        //     readOnly: !enable,
        //   }}
        // onChange={handleChange}
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
                onClick={ handleSaveEmployee}
                color="primary"
                size="small"
                style={{ marginLeft: 16 }}
                disabled={enable?true: false} //SI ENABLE ESTA EN TRUE, DESHABILITALO
            >
                Save
            </Button>
            <Button
                variant="contained"
                onClick={ handleEditEmployee}
                color="primary"
                size="small"
                style={{ marginLeft: 16 }}
                disabled={enable?false: true}
            >
                Edit
            </Button>
            <Button
                variant="contained"
                onClick={ handleCancelEmployee}
                color="primary"
                size="small"
                style={{ marginLeft: 16 }}
                disabled={enable?true: false}

            >
                Cancel
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