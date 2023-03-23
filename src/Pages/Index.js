import {useDispatch, useSelector} from 'react-redux';
import * as React from 'react';
import {useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import { DataGrid, GridSearchIcon } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { deleteEmployee } from '../features/employees/employeeSlice';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import LoupeIcon from '@mui/icons-material/Loupe'; 
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import api from '../services/api';
export default function DataGridEmployees() {
    const {employees} = useSelector(state => state.employees)
    const navigate = useNavigate()
    const dispatch=useDispatch()
    // const { isError, isLoading, error}= useGetEmployeesQuery()
    const [tableData, setTableData] = useState([])

    const [roleInput, setRoleInput] = useState([])
    const [firstNameInput, setFirstNameInput] = useState([])
    const [lastNameInput, setLastNameInput] = useState([])

    useEffect(() => { 
      getEmployees();
    }, [])
  // if(isLoading) return <div> <h1>Loading...</h1>  </div>;
  // else if(isError) return <div> Error {error.message} </div>;

  // return (

  // <>
  // {data.data.map((empl) => empl.last_name)}
  
  // </>

  // );
  // }

  
//ESTA VA A SER MI FUNCION QUE TOME EL FILTRADO
  const handleRoleInput= (event) => {
    setRoleInput(event.target.value)
  }

  const handleFirstNameInput= (event) => {
    setFirstNameInput(event.target.value)
  }

  const handleLastNameInput= (event) => {
    setLastNameInput(event.target.value)
  }

  const handleSearch = () => {
    getEmployees();
  }

  const getEmployees = () => {
    api.getAllEmployees(getUrl()).then((res) => {
      setTableData(res.data ? res.data.data : [])
    });
  }; 

  const getUrl= () => {
    const nombre = firstNameInput.length;
    const apellido = lastNameInput.length;
    const rol = roleInput.length;
    let basicUrl = "http://localhost:3001/api/employees?" + (nombre ? "first_name=" + firstNameInput : '') + (apellido ? "&last_name=" + lastNameInput : '') + (rol ? "&rol=" + roleInput : '');
    return basicUrl;
  }

const handleNavigateCreateEmployee= () => {
  navigate('/create-employee')
}

const handleDelete=(id)=>{
  api.deleteEmployee(id).then(res => {
    if(res) {
      getEmployees()
    } else {
      
    }
  })
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
                sx={{marginRight: '50px'}}>
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
    <Box sx={{ height: '60vh', justifyContent: 'center', alignItems: 'center', margin: '5%', width: '40vw'}}>
    <TextField onChange={handleRoleInput} id="outlined-basic" label="Filtrar por el rol: " variant="outlined"/>
    <TextField onChange={handleFirstNameInput} id="outlined-basic" label="Filtrar por el nombre: " variant="outlined"/>
    <TextField onChange={handleLastNameInput} id="outlined-basic" label="Filtrar por el apellido: " variant="outlined"/>
     <Button
                variant="contained"
                onClick={ handleSearch}
                color="primary"
                size="small"
                startIcon={<GridSearchIcon />} 
                style={{ marginLeft: 16 }}
                sx={{marginRight: '50px'}}
                
            ></Button>
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={25}
        getRowId={(row) => row.id_employee} 
        rowsPerPageOptions={[25]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
       <Button variant="contained" startIcon={<PersonAddAltIcon />} color="primary" onClick={ handleNavigateCreateEmployee} 
       sx={{marginTop: '15px'}}
                 >Create New Employee</Button>
    </Box>
    </>
  );
}


