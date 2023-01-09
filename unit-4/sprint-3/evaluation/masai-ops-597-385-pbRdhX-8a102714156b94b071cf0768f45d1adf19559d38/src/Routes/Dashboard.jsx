import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import Loader from "../Components/Loader";
import { AuthContext } from "../Context/AuthContext";
import Pagination from "../Components/Pagination";
import ProductList from "../Components/ProductList"

function Dashboard() {
    const {authstate,loginfun,logOutfun}=useContext(AuthContext)
    const[totalpage,settotalpage]=useState(0);
    const [item,setitem]=useState([])
    const [loading,setloding]=useState(false);
    const [page,setpage]=useState(1)
    const[order,setorder]=useState('asc')

    useEffect(()=>{
      fetchdata()
    },[page,order])

    let baseurl=()=>{
      return `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=10&order=${order}&sort=price`
    }

    const fetchdata =async()=>{
      setloding(true)
        try{
          let res=await fetch(baseurl(page,order))
          if(res.ok){
            let data=await res.json()
            setitem(data.data)
            settotalpage(data.totalPages)
            console.log(data.data)
            setloding(false)
          }
          else{
            setloding(false)
          }
        }catch{
          console.log(err)
          setloding(false)
        }
    }
////////////////////////////////////////////////////////////
    const paginationfun=(val)=>{
        setpage((pre=>pre+val))
    };

  //////////////////////////////////////////////////////
  
  const togglefun=(order)=>{
      setorder(order)
  }

   



    
//////////////////////////////////////////////////////////////////////////
  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={logOutfun}>Logout </button>
        <p>
          Token:
          <b data-testid="user-token">{authstate.token}</b>
        </p>
      </div>
      <br />
      <div data-testid ="sort-container">
      <button data-testid="low-to-high" onchange={()=>{togglefun('asc')}} disabled={order=='asc'}>Sort low to high</button>
      <button data-testid="high-to-low" onchange={()=>{togglefun('desc')}} disabled={order=='desc'}>Sort high to low</button>
      </div>
      <br />
      <br />
      <Pagination totalpage={totalpage} current={page} onchange={paginationfun}/>
      {/* add Pagination component  */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        {loading? <Loader /> : <ProductList products={item}/>}
       
        {/* Product Listing, remember to show loading indicator when API is loading */}
      </div>
   
    </div>
  );
}

export default Dashboard;
