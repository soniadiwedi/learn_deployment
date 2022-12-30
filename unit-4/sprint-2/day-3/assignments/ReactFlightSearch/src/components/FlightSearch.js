import {useState,useEffect} from "react";
import SearchResults from "./SearchResults"
export const fetchData = async () => {
  // make fetch request to the mentioned api and return the result here
  try{
    let res=await fetch("https://6098f0d799011f001713fbf3.mockapi.io/techcurators/products/flights/1")
    if(res.ok){
      return res.json();
     
    }
  }catch(err){
    console.log(err)
  }
};

function FlightSearch() {
  // on page load fetch the data (useEffect)
  const[post,setpost]=useState([]);
  const[ipsource,setsource]=useState("")
  const[ipdestination,setdestination]=useState("")
  const[filterdata,setfilterdata]=useState([]);

  useEffect(()=>{
    fetchData().then((data)=>setpost(data));
    
  },[])

  const handleSearch = () => {
    // filter the data based on source and destination
    let filterdata=post.filter((el)=>{
      return el.source.toLowerCase().includes(ipsource.toLowerCase()) && el.destination.toLowerCase().includes(ipdestination.toLowerCase())?el:null
    })
   setfilterdata(filterdata)
   console.log(filterdata)
  };
////////////////////////////////////////////////////////////////
  function InputSource(e){
    setsource(e.target.value)
    console.log(e.target.value)
  }
//////////////////////////////////////////////////////////////
  function InputDestination(e){
    console.log(e.target.value)
    setdestination(e.target.value)
  }
/////////////////////////////////////////////////////////////

  return (
    <div>
      <div></div>
      <div>
        <section>
          <h4>Flight Search</h4>
          <br />
          <input data-testid="source-input" placeholder="Source" onChange={InputSource}/>
          <br /> <br />
          <input data-testid="destination-input" placeholder="Destination" onChange={InputDestination}/>
          <br /> <br />
          <button data-testid="search-button" onClick={handleSearch} >Search</button>
        </section>
      </div>

      {/* if there are search results pass it to SearchResults component else print No Flights found  */}
      {filterdata<=0? <div data-testid="no-flights" className="">

            No Flights Found
          </div>: <SearchResults filter={filterdata}/> }
      
    </div>
  );
}

export default FlightSearch;
