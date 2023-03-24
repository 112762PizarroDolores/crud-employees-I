import { useDispatch, useSelector } from "react-redux";
import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridSearchIcon } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import LoupeIcon from "@mui/icons-material/Loupe";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import swal from "sweetalert";
import api from "../services/api";
import { exportedColumns } from "../constants";
export default function DataGridEmployees() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [tableData, setTableData] = useState([]);

  const [roleInput, setRoleInput] = useState([]);
  const [firstNameInput, setFirstNameInput] = useState([]);
  const [lastNameInput, setLastNameInput] = useState([]);
  const importedColumns = exportedColumns;

  useEffect(() => {
    getEmployees();
  }, []);

  const handleRoleInput = (event) => {
    setRoleInput(event.target.value);
  };

  const handleFirstNameInput = (event) => {
    setFirstNameInput(event.target.value);
  };

  const handleLastNameInput = (event) => {
    setLastNameInput(event.target.value);
  };

  const handleSearch = () => {
    getEmployees();
  };

  const getEmployees = () => {
    
    api.getAllEmployees(getUrl()).then((res) => {
      
      if(res.data.data.length>0){
        setTableData(res.data ? res.data.data : []);
      }
      else{
        swal('No data found. Please check the filters');
        setTableData([]);
      }
    
    });
  };

  const getUrl = () => {
    const nombre = firstNameInput.length;
    const apellido = lastNameInput.length;
    const rol = roleInput.length;
    let basicUrl =
      "http://localhost:3001/api/employees?" +
      (nombre ? "first_name=" + firstNameInput : "") +
      (apellido ? "&last_name=" + lastNameInput : "") +
      (rol ? "&rol=" + roleInput : "");
    return basicUrl;
  };

  const handleNavigateCreateEmployee = () => {
    navigate("/create-employee");
  };

  const deleteEmployee = (id) => {
    api.deleteEmployee(id).then((res) => {
      if (res) {
        getEmployees();
      }
    });
  };

  const renderDetailsButton = (params) => {
    const handleNavigateEditEmployee = (e) => {
      navigate(`/edit-employee/${params.id}`);
    };

    const handleDelete = (e) => {
      e.preventDefault();
      swal({
        title: "Are you sure?",
        text: "You want to delete this employee?",
        icon: "warning",
        buttons: [
          true,
          {
            text: "Yes",
            value: true,
            visible: true,
            className: "red-alert-button",
            closeModal: true,
          },
        ],
      }).then((accepted) => {
        if (accepted) {
          deleteEmployee(params.id);
        }
      });
    };
    return (
      <strong>
        <Button
          variant="contained"
          onClick={handleNavigateEditEmployee}
          color="primary"
          size="small"
          startIcon={<LoupeIcon />}
          style={{ marginLeft: 16 }}
          sx={{ marginRight: "50px" }}
        >
          Details
        </Button>
        <Button
          variant="outlined"
          onClick={handleDelete}
          startIcon={<DeleteIcon />}
          color="error"
        >
          Delete
        </Button>
      </strong>
    );
  };

  const columns = [
   ...importedColumns,
    {
      field: "actions",
      headerName: "Actions",
      width: 300,
      renderCell: renderDetailsButton,
      disableClickEventBubbling: true,
      align: "center",
      headerAlign: "center",
    },
  ];
  return (
    <>
      <h1>Employees-Vortex</h1>
      <Box
        sx={{
          height: "60vh",
          justifyContent: "center",
          alignItems: "center",
          width: "90vw",
          margin: "3%",
        }}
      >
        <TextField
          onChange={handleRoleInput}
          id="outlined-basic"
          label="Filtrar por el rol: "
          variant="outlined"
        />
        <TextField
          onChange={handleFirstNameInput}
          id="outlined-basic"
          label="Filtrar por el nombre: "
          variant="outlined"
        />
        <TextField
          onChange={handleLastNameInput}
          id="outlined-basic"
          label="Filtrar por el apellido: "
          variant="outlined"
        />
        <Button
          variant="contained"
          onClick={handleSearch}
          color="primary"
          size="small"
          startIcon={<GridSearchIcon />}
          style={{ marginLeft: 16 }}
          sx={{ marginRight: "50px" }}
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
        <Button
          variant="contained"
          startIcon={<PersonAddAltIcon />}
          color="primary"
          onClick={handleNavigateCreateEmployee}
          sx={{ marginTop: "15px" }}
        >
          Create New Employee
        </Button>
      </Box>
    </>
  );
}
