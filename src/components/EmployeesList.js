import {useSelector} from 'react-redux';
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';


export default function DataGridDemo() {
    const {employees} = useSelector(state => state.employees)
    const navigate = useNavigate()
    
const handleNavigateCreateEmployee= () => {
  navigate('/create-employee')
}

const renderDetailsButton = (params) => {
  const handleNavigateEditEmployee= (event) => {
    //console.log(params)
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
                // onClick={() => {
                //     parseName(params.row.col6)
                // }}
            >
                Details
            </Button>
            <Button variant="outlined" startIcon={<DeleteIcon />} color="error">
  Delete
</Button>

        </strong>
    )
}
const columns = [
  { field: 'employee_id', headerName: 'ID', width: 90 },
  {
    field: 'first_name',
    headerName: 'First name',
    width: 150,
    editable: false,
  },
  {
    field: 'last_name',
    headerName: 'Last name',
    width: 150,
    editable: false,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 300,
   renderCell: renderDetailsButton,
    disableClickEventBubbling: true,
},
 
];
  return (
    <>
    <h1>Employees-Vortex</h1>
    <Box sx={{ height: 400, width: '60%', justifyContent: 'center', alignItems: 'center' }}>
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
                     
                 >Create New Employee</Button>
       
    </Box>
    </>
  );
}

