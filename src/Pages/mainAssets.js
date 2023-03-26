//GET DE ASSETS  CON FILTRADO
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
import { exportedColumns } from "../constantsAssets";
import { addAsset } from "../features/assetSlice";
export default function DataGridAssets() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [tableData, setTableData] = useState([]);

  const [nameInput, setNameInput] = useState([]);
  const [codeInput, setCodeInput] = useState([]);
  const [typeInput, setTypeInput] = useState([]);
  const importedColumns = exportedColumns;

  useEffect(() => {
    getAssets();
  }, []);

  const handleNameInput = (event) => {
    setNameInput(event.target.value);
  };

  const handleCodeInput = (event) => {
    setCodeInput(event.target.value);
  };

  const handleTypeInput = (event) => {
    setTypeInput(event.target.value);
  };

  const handleSearch = () => {
    getAssets();
  };

  const getAssets = () => {
    
    api.getAllAssets(getUrl()).then((res) => {
      
      if(res.data.data.length>0){
        setTableData(res.data ? res.data.data : []);
              //state redux con getALLAssets
              dispatch(addAsset(res.data.data))
      }
      else{
        swal('No data found. Please check the filters');
        setTableData([]);
      }
    
    });
  };

  const getUrl = () => {
    const code = codeInput.length;
    const type = typeInput.length;
    const name = nameInput.length;
    let basicUrl =
      "http://localhost:3001/api/assets?" +
      (code ? "code=" + codeInput : "") +
      (type ? "&type=" + typeInput : "") +
      (name ? "&name=" + nameInput : "");
    return basicUrl;
  };

  const handleNavigateCreateAsset = () => {
    navigate("/create-asset");
  };

  const deleteAsset = (id) => {
    api.deleteAsset(id).then((res) => {
      if (res) {
        getAssets();
      }
    });
  };

  const renderDetailsButton = (params) => {
    const handleNavigateEditAsset = (e) => {
      navigate(`/edit-asset/${params.id}`);
    };

    const handleDelete = (e) => {
      e.preventDefault();
      swal({
        title: "Are you sure?",
        text: "You want to delete this asset?",
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
          deleteAsset(params.id);
        }
      });
    };
    return (
      <strong>
        <Button
          variant="contained"
          onClick={handleNavigateEditAsset}
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
      <h1>Assets-Vortex</h1>
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
          onChange={handleNameInput}
          id="outlined-basic"
          label="Filtrar por el name: "
          variant="outlined"
        />
        <TextField
          onChange={handleCodeInput}
          id="outlined-basic"
          label="Filtrar por el code: "
          variant="outlined"
        />
        <TextField
          onChange={handleTypeInput}
          id="outlined-basic"
          label="Filtrar por el type: "
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
          getRowId={(row) => row.id_asset}
          rowsPerPageOptions={[25]}
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
        <Button
          variant="contained"
          // startIcon={<PersonAddAltIcon />}
          color="primary"
          onClick={handleNavigateCreateAsset}
          sx={{ marginTop: "15px" }}
        >
          Create New Asset
        </Button>
      </Box>
    </>
  );
}
