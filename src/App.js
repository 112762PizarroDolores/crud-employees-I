import './App.css';
import EmployeeForm from './components/EmployeeForm';
import FullFeaturedCrudGrid from './components/EmployeesList'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import EmployeesList from './components/EmployeesList';
import EmployeeEdit from './components/EmployeeEdit';
import NavBar from './components/NavBar' 


function App() {
   return (
    <div className="App">
      <BrowserRouter>
       <NavBar/> 
      <Routes>
        <Route path="/"element={<FullFeaturedCrudGrid/>}/> 
        <Route path="/create-employee" element={<EmployeeForm />}/> 
        <Route path="/edit-employee/:id" element={<EmployeeEdit />}/> 
      </Routes>
      
    
{/* 
<EmployeeForm/>
<FullFeaturedCrudGrid/> */}
{/* <EmployeesList/> */}
      </BrowserRouter>
     
    </div>
  );
}

export default App;
