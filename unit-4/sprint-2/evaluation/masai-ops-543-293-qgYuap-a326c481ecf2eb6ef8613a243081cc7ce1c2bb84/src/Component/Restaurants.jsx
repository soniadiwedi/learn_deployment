import {useState,useEffect} from "react"
import LoadingIndicator from "./LoadingIndicator";
import RestaurantCard from "./RestaurantCard";
import Pagination from "./Pagination";



function Restaurants() {
 const[page,setpage]=useState(1)
 const[loding,setloding]=useState(false)
 const[total,settotal]=useState(0)
 const[posts,setpost]=useState([])
  let url="https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants"
  
  useEffect(()=>{
    getdata(page)
  },[page])

  
  const getdata=async(page)=>{
    setloding(true)
      try{
        let response=await fetch (`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?limit=10&page=${page}`)
        if(response.ok){
          let data=await response.json();
          setpost(data.data);
          settotal(data.totalpages)
          setloding(false)
        }

      }catch(err){

      }
  }
 //-----------------------------------
 const togglefun=(val)=>{
  console.log(val)
  setpage((pre)=>{
    if(pre<val){
      return val;
    }else{
      return val-1
    }
  })
 }


 //---------------------------------------
 if(loding){
  return <LoadingIndicator/>
 }

  
  return (
    <div>
      
      <h1 data-testid="restaurants-header">Restaurants List</h1>
      <div data-testid="restaurants-container">
       {
        posts.map((el)=>{
          return <RestaurantCard  {...el} />
        })
       }
      
      </div>
      <div>
        <Pagination current={page} onChange={togglefun} total={total}/>
      </div>
    </div>
  );
}

export default Restaurants;
