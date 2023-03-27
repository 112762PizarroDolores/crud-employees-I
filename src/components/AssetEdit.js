import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { editAsset } from "../features/assetSlice";
import { useNavigate } from "react-router-dom";
import CancelIcon from "@mui/icons-material/Cancel";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import api from "../services/api";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import {format} from "date-fns";

export default function AssetEdit(props) {
  const [asset, setAsset] = useState({});
  const [temp, setTemp] = useState({});
  const [enable, setEnable] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const handleChange=e=>{
    setAsset({
      ...asset,
      [e.target.name]: e.target.value,
    })
  }
  
  useEffect(() => {
    setAsset({});
    api.getAssetById(params.id).then((res) => {
      setAsset(res.data);
    });
  }, []);

  const handleEditAsset = () => {
    setEnable(!enable);
   
  };


  const handleSaveAsset = () => {
      if (validateAsset(asset)) {
      api.updateAsset(asset.id_asset, asset).then((res) => {
       
        if (res.status===200) {
          swal("Asset updated!");
          dispatch(editAsset(asset));
          setIsEdit(false);
          setEnable(true);
          navigate('/assets');
        }
       
      }).catch(function (error) {
         swal (error.response.data.message);

      });
    }
  };

  let errArray = [];
  const validateAsset = (asset) => {
    const keys = Object.keys(asset);
    const values = Object.values(asset);
    if (values.every((v) => v !== "")) {
      return true;
    } else {
      values.forEach((val, index) => {
        const errMsg = getErrorString(keys[index].toString());
        if (!val) {
          errArray.push(errMsg);
        }
      });
      swal('Incomplete. You must complete all the required fields.\nRemaining field/s: \n'  + errArray.join('\n'));
      
    }
  };

  const getErrorString = (prop) => {
    switch (prop) {
      case "id_asset":
        return "id_asset";
      case "name":
        return "name";
      case "type":
        return "type";
      case "code":
        return "code";
      case "marca":
        return "marca";
      case "description":
        return "description";
      case "purchase_date":
        return "purchase_date";
      case "id_employee":
        return "id_employee";
      default:
        break;
    }
  };

  const handleCancelAsset = () => {
    setIsEdit(false);
    setEnable(true);

    navigate(`/edit-asset/${asset.id_asset}`);
  };

  return (
    <>
      <h1>Assets: Read & Update</h1>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          height: 400,
          width: "60%",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "28%",
          maxWidth: "695px",
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            name="name"
            label="Name"
            value={asset.name ? asset.name : ''}
            onChange={handleChange}
            disabled={enable}
          />
          <TextField
            name="type"
            label="Type"
            value={asset.type ? asset.type : ''}
            onChange={handleChange}
            disabled={enable}
          />
          <TextField
            name="code"
            label="Code"
            value={asset.code ? asset.code : ''}
            onChange={handleChange}
            disabled={enable}
          />
          <TextField
            name="marca"
            label="Marca"
            value={asset.marca ? asset.marca : ''}
            onChange={handleChange}
            disabled={enable}
          />
          <TextField
            name="description"
            label="Description"
            type="description"
            value={asset.description ? asset.description : ''}
            InputLabelProps={{ shrink: true }}
            onChange={handleChange}
            disabled={enable}
          />
          <TextField 
          name="purchase_date" 
          label="Purchase_date"
          type="date"
          value={asset.purchase_date ? format (new Date (asset.purchase_date ), 'yyyy-MM-dd'): ''}
          InputLabelProps={{ shrink: true}}
          onChange={handleChange}
          disabled={enable}
          />
          <TextField 
          name="id_employee" 
          label="Id_employee"
          value={asset.id_employee ? asset.id_employee : ''}
          onChange={handleChange}
          disabled={enable}
          />
        </div>

        <Button
          variant="contained"
          onClick={handleSaveAsset}
          color="primary"
          startIcon={<SaveIcon />}
          size="small"
          style={{ marginLeft: 16 }}
          disabled={enable ? true : false}
        >
          Save
        </Button>
        <Button
          variant="contained"
          onClick={handleEditAsset}
          color="primary"
          startIcon={<EditIcon />}
          size="small"
          style={{ marginLeft: 16 }}
          disabled={enable ? false : true}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          onClick={handleCancelAsset}
          color="primary"
          startIcon={<CancelIcon />}
          size="small"
          style={{ marginLeft: 16 }}
          disabled={enable ? true : false}
        >
          Cancel
        </Button>
      </Box>
    </>
  );
}
