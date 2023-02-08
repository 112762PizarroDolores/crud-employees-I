import './App.css';
import EmployeeCreate from './components/EmployeeCreate';
import FullFeaturedCrudGrid from './components/EmployeesList'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import EmployeesList from './components/EmployeesList';
import EmployeeConfig from './components/EmployeeConfig';
import NavBar from './components/NavBar' 



function App() {
   return (
    <div className="App">
      <BrowserRouter>
       <NavBar/> 
      <Routes>
        <Route path="/"element={<FullFeaturedCrudGrid/>}/> 
        <Route path="/create-employee" element={<EmployeeCreate />}/> 
        <Route path="/edit-employee/:id" element={<EmployeeConfig />}/> 
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
