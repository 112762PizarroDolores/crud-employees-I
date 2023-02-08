import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import EmployeeEdit from "./EmployeeEdit"

function EmployeeConfig() {
  const {employees}=useSelector(state=>state.employees)
const employeeId=useParams().id

    return (
     
    <EmployeeEdit employee={employees[employeeId-1]}/>
  
  )
}

export default EmployeeConfig