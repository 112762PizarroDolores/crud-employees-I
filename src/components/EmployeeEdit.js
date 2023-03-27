import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { editEmployee } from "../features/employees/employeeSlice";
import { useNavigate } from "react-router-dom";
import CancelIcon from "@mui/icons-material/Cancel";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import api from "../services/api";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import {format} from "date-fns";


export default function EmployeeEdit(props) {
  const [employee, setEmployee] = useState({});
  const [temp, setTemp] = useState({});
  const [enable, setEnable] = useState(true);
  const [isEdit, setIsEdit] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const handleChange=e=>{
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    })
  }
  
  useEffect(() => {
    setEmployee({});
    api.getEmployeeById(params.id).then((res) => {
      setEmployee(res.data);
    });
  }, []);

  const handleEditEmployee = () => {
    setIsEdit(false);
    setEnable(!enable);
    // setTemp(thisEmployee);
  };

  //'http://localhost:3001/api/employees/' + employeeId.toString();
  //
  const handleSaveEmployee = () => {
    if (validateEmployee(employee)) {
      api.updateEmployee(employee.id_employee, employee).then((res) => {
        if (res) {
          dispatch(editEmployee(employee));
          alert("Record updated!");
          setIsEdit(false);
          setEnable(true);
        }
      });
    }
  };

  let errArray = [];
  const validateEmployee = (employee) => {
    const keys = Object.keys(employee);
    const values = Object.values(employee);
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
      case "id_employee":
        return "id_employee";
      case "first_name":
        return "first_name";
      case "last_name":
        return "last_name";
      case "cuit":
        return "cuit";
      case "team_id":
        return "team_id";
      case "join_date":
        return "join_date";
      case "rol":
        return "rol";

      default:
        break;
    }
  };

  const handleCancelEmployee = () => {
    setIsEdit(false);
    setEnable(true);

    navigate(`/edit-employee/${employee.id_employee}`);
  };

  return (
    <>
      <h1>Employees: Read & Update</h1>
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
            name="first_name"
            label="First Name"
            value={employee.first_name ? employee.first_name : ''}
            onChange={handleChange}
            disabled={enable}
          />
          <TextField
            name="last_name"
            label="Last Name"
            value={employee.last_name ? employee.last_name : ''}
            onChange={handleChange}
            disabled={enable}
          />
          <TextField
            name="cuit"
            label="Cuit"
            value={employee.cuit ? employee.cuit : ''}
            onChange={handleChange}
            disabled={enable}
          />
          <TextField
            name="team_id"
            label="Team_id"
            value={employee.team_id ? employee.team_id : ''}
            onChange={handleChange}
            disabled={enable}
          />
          <TextField
            name="join_date"
            label="Join Date"
            type="date"
            value={employee.join_date ? format (new Date (employee.join_date), 'yyyy-MM-dd') : ''}
            InputLabelProps={{ shrink: true }}
            onChange={handleChange}
            disabled={enable}
          />
          <TextField 
          name="rol" 
          label="Rol"
          value={employee.rol ? employee.rol : ''}
          onChange={handleChange}
          disabled={enable}
          />
        </div>

        <Button
          variant="contained"
          onClick={handleSaveEmployee}
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
          onClick={handleEditEmployee}
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
          onClick={handleCancelEmployee}
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
