import './App.css';
import EmployeeCreate from './components/EmployeeCreate';
import AssetCreate from './components/AssetCreate';
import EmployeeConfig from './components/EmployeeConfig';
import AssetConfig from './components/AssetConfig';
import EmployeeList from './Pages/Employees';
import AssetList from './Pages/mainAssets';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar' 

const PageError = () =>{
  return (
    <>
    <h1>Error page! Please review the url</h1>
    </>
  )
}

function App() {
   return (
    <div className="App">
      <BrowserRouter>
       <NavBar/> 
      <Routes>
        <Route path="/"element={<EmployeeList/>}/> 
        <Route path="/assets"element={<AssetList/>}/> 
        <Route path="/create-employee" element={<EmployeeCreate />}/> 
        <Route path="/create-asset" element={<AssetCreate />}/> 
        <Route path="/edit-employee/:id" element={<EmployeeConfig />}/> 
        <Route path="/edit-asset/:id" element={<AssetConfig />}/> 
        <Route path="*"element={<PageError/>} /> 
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
