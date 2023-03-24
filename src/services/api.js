import axios from 'axios';
import swal from "sweetalert";

const api = {
    //get
    getAllEmployees: async (url) => {
      return await axios
        .get(url)
        .then((res) => res)
        .catch((err) => {
            swal(err.response.data.errors[0].msg);
        });
    }, 
    //get employee by id
    getEmployeeById: async (employeeId) => {
        const url = 'http://localhost:3001/api/employees/' + employeeId.toString();
        return await axios
          .get(url)
          .then((res) => res.data)
          .catch((err) => {
            swal(err.response.data.errors[0].msg);
          });
        }, 
    //delete
    deleteEmployee: async(employeeId) => {
        const url = 'http://localhost:3001/api/employees/' + employeeId.toString();
        return await axios
        .delete(url)
        .then((res) => res)
        .catch((err) => {
            swal(err.response.data.errors[0].msg);
        });
    },
    //create
    createEmployee: async(url, body) => {
        return await axios
        .post(url, body)
        .then((res) => res)
        .catch((err) => {
            swal(err.response.data.errors[0].msg);
        }
        );
    },
    //update
    updateEmployee: async(id, body) => {
        const url = "http://localhost:3001/api/employees/" + id;
        return await axios
        .put(url, body)
        .then((res) => res)
        .catch((err) => {
            swal(err.response.data.errors[0].msg);
        });
    }
};

export default api;
