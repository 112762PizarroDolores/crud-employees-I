import axios from 'axios';

const api = {
    //get
    getAllEmployees: async (url) => {
      return await axios
        .get(url)
        .then((res) => res)
        .catch((err) => err);
    }, 
    //get employee by id
    getEmployeeById: async (employeeId) => {
        const url = 'http://localhost:3001/api/employees/' + employeeId.toString();
        return await axios
          .get(url)
          .then((res) => res.data)
          .catch((err) => err);
      }, 
    //delete
    deleteEmployee: async(employeeId) => {
        const url = 'http://localhost:3001/api/employees/' + employeeId.toString();
        return await axios
        .delete(url)
        .then((res) => res)
        .catch((err) => err);
    },
    //create
    createEmployee: async(url, body) => {
        return await axios
        .post(url, body)
        .then((res) => res)
        .catch((err) => err);
    },
    //update
    updateEmployee: async(id, body) => {
        const url = "http://localhost:3001/api/employees/" + id;
        return await axios
        .put(url, body)
        .then((res) => res)
        .catch((err) => err);
    }
};

export default api;
