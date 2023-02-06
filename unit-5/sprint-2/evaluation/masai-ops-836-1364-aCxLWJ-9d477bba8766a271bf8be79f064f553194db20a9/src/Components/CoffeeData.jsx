import React,{useEffect,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoffeeData } from "../Redux/AppReducer/action";
import { store } from "../Redux/store";

export default function CoffeeData() {
 //const [data,setData]=useState()
const dispatch=useDispatch();
 const {isLoading,isError,data} = useSelector((store)=>{
  console.log(store)
 return {
  isLoading:store.isLoading,
  isError:store.isError,
  data:store.coffeeData
 }
})
console.log("data",data)

//console.log(data)
useEffect(()=>{
  dispatch(getCoffeeData)
},[])

  return (
    <div>
      <h2>Coffee Data</h2>
      <div className="coffee_data">
        {/* map the below div against your coffee data */}
        {/* Show image, title and price  */}
        {isLoading?<h1>Loading...</h1>:isError?<h1>Error...</h1>:
        data?.data?.map((el)=>(
         <div key={el.id}> <img src={el.image}/>
          <p>{el.title}</p>
          <p>{el.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}