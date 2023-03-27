import axios from 'axios';
import swal from "sweetalert";

const api = {
    //Get all Employees
    getAllEmployees: async (url) => {
      return await axios
        .get(url)
        .then((res) => res)
        .catch((err) => {
            swal(err.response.data.errors[0].msg);
        });
    }, 
    //Get Employee by id
    getEmployeeById: async (employeeId) => {
        const url = 'http://localhost:3001/api/employees/' + employeeId.toString();
        return await axios
          .get(url)
          .then((res) => res.data)
          .catch((err) => {
            swal(err.response.data.errors[0].msg);
          });
        }, 
    //Delete Employee
    deleteEmployee: async(employeeId) => {
        const url = 'http://localhost:3001/api/employees/' + employeeId.toString();
        return await axios
        .delete(url)
        .then((res) => res)
        .catch((err) => {
            swal(err.response.data.errors[0].msg);
        });
    },
    //Create Employee
    createEmployee: async(url, body) => {
        return await axios
        .post(url, body)
        .then((res) => res)
        .catch((err) => {
            swal(err.response.data.errors[0].msg);
        }
        );
    },
    //Update Employee
    updateEmployee: async(id, body) => {
        const url = "http://localhost:3001/api/employees/" + id;
        return await axios
        .put(url, body)
        .then((res) => res)
        .catch((err) => {
            swal(err.response.data.errors[0].msg);
        });
    },
    //DOLO LO NUEVO DE ASSETS!!!

    //Get all Assets
    getAllAssets: async (url) => {
        return await axios
          .get(url)
          .then((res) => res)
          .catch((err) => {
              swal(err.response.data.errors[0].msg);
          });
      }, 
      //Get Asset by id
      getAssetById: async (assetId) => {
          const url = 'http://localhost:3001/api/assets/' + assetId.toString();
          return await axios
            .get(url)
            .then((res) => res.data)
            .catch((err) => {
              swal(err.response.data.errors[0].msg);
            });
          }, 
      //Delete Asset 
      deleteAsset: async(assetId) => {
          const url = 'http://localhost:3001/api/assets/' + assetId.toString();
          return await axios
          .delete(url)
          .then((res) => res)
          .catch((err) => {
              swal(err.response.data.errors[0].msg);
          });
      },
      //Create Asset 
      createAsset: async(url, body) => {
          return await axios
          .post(url, body)
          .then((res) => res)
          .catch((err) => {
              swal(err.response.data.errors[0].msg);
          }
          );
      },
      //Update Asset 
      updateAsset: async(id, body) => {
          const url = "http://localhost:3001/api/assets/" + id;
          return await axios
          .put(url, body)
          .then((res) => res)
          .catch((err) => {
              console.log(err)
              swal(err.response.data.message);
          });
      }
};

export default api;
