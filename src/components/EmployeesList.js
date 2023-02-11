import {useDispatch, useSelector} from 'react-redux';
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { deleteEmployee } from '../features/employees/employeeSlice';

export default function DataGridDemo() {
    const {employees} = useSelector(state => state.employees)
    const navigate = useNavigate()
    const dispatch=useDispatch()

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
    field: 'employee_id', 
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
        rows={employees}
        columns={columns}
        pageSize={3}
        getRowId={(row) => row.employee_id} 
        rowsPerPageOptions={[3]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
       <Button variant="contained" onClick={ handleNavigateCreateEmployee} 
       sx={{marginTop: '15px'}}
                 >Create New Employee</Button>
    </Box>
    </>
  );
}

