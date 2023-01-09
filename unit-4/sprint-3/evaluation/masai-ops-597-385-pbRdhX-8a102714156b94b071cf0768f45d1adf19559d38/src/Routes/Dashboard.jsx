import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import Loader from "../Components/Loader";
import { AuthContext } from "../Context/AuthContext";

function Dashboard() {
    const {token}=useContext(AuthContext)
    const [item,setitem]=useState([])
    const [loading,setloding]=useState(false);
    const [page,setpage]=useState(1)


    const fetchdata =async()=>{
        try{
          let res=await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`)
          if(res.ok){
            let data=await res.json()
            setitem(data.data)
            console.log(data.data)
          }
        }catch{
          console.log(err)
        }
    }


    useEffect(()=>{
      fetchdata()
    },[])



    
//////////////////////////////////////////////////////////////////////////
  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn">Logout</button>
        <p>
          Token:
          <b data-testid="user-token"> {token}</b>
        </p>
      </div>
      <br />
      <div data-testid ="sort-container">
      <button data-testid="low-to-high">Sort low to high</button>
      <button data-testid="high-to-low">Sort high to low</button>
      </div>
      <br />
      <br />
      {/* add Pagination component  */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Loader />
        {/* Product Listing, remember to show loading indicator when API is loading */}
      </div>
   
    </div>
  );
}

export default Dashboard;
