import axios from 'axios';

const api = {
    //get
    getAllEmployees: async (url) => {
      return await axios
        .get(url)
        .then((res) => res)
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
    updateEmployee: async(employeeId, body) => {
        const url = 'http://localhost:3001/api/employees/' + employeeId.toString();
        return await axios
        .put(url)
        .then((res) => res)
        .catch((err) => err);
    }
};

export default api;
