import {useDispatch, useSelector} from 'react-redux';
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { deleteEmployee } from '../features/employees/employeeSlice';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import LoupeIcon from '@mui/icons-material/Loupe'; 
import { useGetEmployeesQuery } from "../api/apiSlice";
import TextField from '@mui/material/TextField';
export default function DataGridEmployees() {
    const {employees} = useSelector(state => state.employees)
    const navigate = useNavigate()
    const dispatch=useDispatch()
    const {data, isError, isLoading, error}= useGetEmployeesQuery()
    console.log(data)
  if(isLoading) return <div> <h1>Loading...</h1>  </div>;
  else if(isError) return <div> Error {error.message} </div>;

  // return (

  // <>
  // {data.data.map((empl) => empl.last_name)}
  
  // </>

  // );
  // }

  
//ESTA VA A SER MI FUNCION QUE TOME EL FILTRADO
//   const handleInput= () => {
//     ('/create-employee')
//   }
  //DOLO HACELO Y  LLAMALO EN TU TEXT FIELD RETORNADO AL FINAL DEL CODIGO ONCHANGE={HANDLEINPUT}



const handleNavigateCreateEmployee= () => {
  navigate('/create-employee')
}

const handleDelete=(employee_id)=>{
  dispatch(deleteEmployee(employee_id))
}

const renderDetailsButton = (params) => {
  const handleNavigateEditEmployee= (event) => {
    navigate(`/edit-employee/${params.id}`)
     }
    return (
        <strong>
            <Button
                variant="contained"
                onClick={ handleNavigateEditEmployee}
                color="primary"
                size="small"
                startIcon={<LoupeIcon />} 
                style={{ marginLeft: 16 }}
                sx={{marginRight: '50px'}}
                
            >
                Details
            </Button>
            <Button variant="outlined" onClick={() => handleDelete(params.id)} startIcon={<DeleteIcon />} color="error">
  Delete
</Button> 

        </strong>
    )
}
const columns = [
  
  { 
    field: 'id_employee', 
    headerName: 'ID', 
    width: 90, 
    align: 'center',
    headerAlign: 'center',

  },
  {
    field: 'first_name',
    headerName: 'First name',
    width: 150,
    editable: false,
    align: 'center',
    headerAlign: 'center',

  },
  {
    field: 'last_name',
    headerName: 'Last name',
    width: 150,
    editable: false,
    align: 'center',
    headerAlign: 'center',

  },
  {
    field: 'cuit',
    headerName: 'cuit',
    width: 150,
    editable: false,
    align: 'center',
    headerAlign: 'center',

  },
  {
    field: 'team_id',
    headerName: 'team_id',
    width: 150,
    editable: false,
    align: 'center',
    headerAlign: 'center',

  },
  {
    field: 'join_date',
    headerName: 'join_date',
    width: 150,
    editable: false,
    align: 'center',
    headerAlign: 'center',

  },
  {
    field: 'rol',
    headerName: 'rol',
    width: 150,
    editable: false,
    align: 'center',
    headerAlign: 'center',

  },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 300,
    renderCell: renderDetailsButton,
    disableClickEventBubbling: true,
    align: 'center',
    headerAlign: 'center',
},
 
];
  return (
    <>
    <h1>Employees-Vortex</h1>
    <Box sx={{ height: 400, width: '60%', justifyContent: 'center', alignItems: 'center', marginLeft: '28%', maxWidth: '695px'}}>
      <DataGrid
        rows={data.data}
        columns={columns}
        pageSize={25}
        getRowId={(row) => row.id_employee} 
        rowsPerPageOptions={[25]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
      <TextField id="outlined-basic" label="Outlined" variant="outlined"  />
       <Button variant="contained" startIcon={<PersonAddAltIcon />} color="primary" onClick={ handleNavigateCreateEmployee} 
       sx={{marginTop: '15px'}}
                 >Create New Employee</Button>
    </Box>
    </>
  );
}


