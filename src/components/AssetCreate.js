import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useState} from 'react'
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addAsset } from '../features/assetSlice';
import { useNavigate } from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckIcon from '@mui/icons-material/Check';
import api from '../services/api';
import swal from "sweetalert";

function AssetCreate() {
  //const {assets}=useSelector(state=>state.assets)
  // const proxId=Number(employees[employees.length -1].employee_id)+1

const [asset, setAsset]=useState({ //estado local para guardar lo introducido por form
// id_asset: proxId,
name:'',
type:'',
code:'',
marca: '',
description: '',
purchase_date:'',
id_employee: ''
});

let errArray = [];
const dispatch=useDispatch();
const navigate=useNavigate();

const handleChange=e=>{
setAsset({
  ...asset,
  [e.target.name]: e.target.value,
})
}

const handleSubmit = (e) => {
e.preventDefault();
if(validateAsset(asset)) {
   const url = "http://localhost:3001/api/assets"
    api.createAsset(url, asset).then(res => {
      if(res.status===201) {
        swal("Asset inserted successfully!");
        dispatch(addAsset ({
          ...asset,
          }));
        navigate('/assets');
        
    }
    else {
      swal (res.data.message);
    }
   })
    
}
};

const validateAsset = (asset) => {
  const keys = Object.keys(asset);
  const values = Object.values(asset);
  if(values.every(v => v !== '')) {
    return true;
  } else {
    values.forEach((val, index) => {
      const errMsg = getErrorString(keys[index].toString());
      if(!val) {
        errArray.push(errMsg);
      }
    })
    swal('Incomplete. You must complete all the required fields.\nRemaining field/s: \n'  + errArray.join('\n'));
  }

}
const handleCancelAsset = () => {

  navigate('/assets');
}
  const getErrorString = (prop) => {
   switch (prop) {
        case 'id_asset':
        return 'id_asset';
        case 'name':
        return 'name';
        case 'type':
        return 'type';
        case 'code':
        return 'code';
        case 'marca':
        return 'marca';
        case 'description':
        return 'description';
        case 'purchase_date':
        return 'purchase_date';
        case 'id_employee':
            return 'id_employee';
      default:
        break;
    }
  }

  return (
    <>
    <h1>Assets-Create</h1>
    <Box 
      component="form" 
         sx={{'& > :not(style)': { m: 1, width: '25ch' },
         height: 400, width: '60%', justifyContent: 'center', 
         alignItems: 'center', marginLeft: '28%', maxWidth: '695px' }}
      noValidate
      autoComplete="off">
      
      <TextField 
      name= "name" label="Name" variant="outlined" onChange={handleChange}/>
      <TextField
      name="type" label="Type" variant="outlined" onChange={handleChange}/>
      <TextField 
      name="code" label="Code" type="code" variant="outlined" onChange={handleChange}/>
      <TextField 
      name="marca"label="Marca" type="marca" variant="outlined" onChange={handleChange} />
      <TextField
      name="description" label="Description" type="description" variant="outlined" onChange={handleChange} InputLabelProps={{shrink:true}} />
      <TextField 
      name="purchase_date" label="Purchase_date" type="date" variant="outlined" onChange={handleChange} InputLabelProps={{shrink:true}}/>
      <TextField 
      name="id_employee" label="ID_employee" type="id_employee" variant="outlined" onChange={handleChange}/>
      
            <Button
                variant="contained"
                color="primary"
                startIcon={<CheckIcon />} 
                size="large"
                style={{ marginLeft: 16 }}
                onClick={handleSubmit}>
                Save
            </Button>
            <Button
                variant="contained"
                onClick={ handleCancelAsset}
                color="primary"
                startIcon={<CancelIcon />} 
                size="large"
                style={{ marginLeft: 16 }}
                >
                Cancel
            </Button>
    </Box>
   </>
  );
}

export default AssetCreate