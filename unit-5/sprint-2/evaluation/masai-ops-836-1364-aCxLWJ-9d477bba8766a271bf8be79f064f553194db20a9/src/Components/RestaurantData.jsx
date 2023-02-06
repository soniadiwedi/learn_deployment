import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmpData, getRestData } from "../Redux/AppReducer/action";

export default function RestaurantData() {

  const dispatch=useDispatch()
  
 const {isLoading,isError,data} = useSelector((store)=>{
  console.log(store)
 return {
  isLoading:store.isLoading,
  isError:store.isError,
  data:store.restaurantData

 }
})
console.log(data)

//console.log(data)
useEffect(()=>{
  dispatch(getRestData)
},[])


  return (
    <div>
      <h2> Restaurant Data </h2>
      <div className="restaurant_data">
        {/* Map the below div against your restaurant Data */}
        {/* show image, name, type, rating and number_of_votes */}
        {isLoading?<h1>Loading...</h1>:isError?<h1>Error...</h1>:
        data?.data?.map((el)=>(
         <div key={el.id}> <img src={el.image}/>          
         <p>{el.name}</p>
          <p>{el.type}</p>
          <p>{el.rating}</p>
          <p>{el.number_of_votes}</p>
          </div>
        ))}
      </div>
    </div>
  );
}