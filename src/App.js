import './App.css';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeConfig from './components/EmployeeConfig';
import EmployeeList from './Pages/Employees';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar' 

function App() {
   return (
    <div className="App">
      <BrowserRouter>
       <NavBar/> 
      <Routes>
        <Route path="/"element={<EmployeeList/>}/> 
        <Route path="/create-employee" element={<EmployeeCreate />}/> 
        <Route path="/edit-employee/:id" element={<EmployeeConfig />}/> 
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
