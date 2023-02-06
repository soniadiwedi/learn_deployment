import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmpData } from "../Redux/AppReducer/action";

export default function EmployeeData() {

  const dispatch=useDispatch()
  
 const {isLoading,isError,data} = useSelector((store)=>{
  console.log(store)
 return {
  isLoading:store.isLoading,
  isError:store.isError,
  data:store.employeeData
 }
})
console.log(data)

//console.log(data)
useEffect(()=>{
  dispatch(getEmpData)
},[])

  return (
    <div>
      <h2>Employee Data</h2>
      <div className="employee_data">
        {/* Map the below div against yoru employee data */}
        {/* Show image name, gender, and department */}
        {isLoading?<h1>Loading...</h1>:isError?<h1>Error...</h1>:
        data?.data?.map((el)=>(
         <div key={el.id}> <img src={el.image}/>
          <p>{el.gender}</p>
          <p>{el.department}</p>
          </div>
        ))}
      </div>
    </div>
  );
}