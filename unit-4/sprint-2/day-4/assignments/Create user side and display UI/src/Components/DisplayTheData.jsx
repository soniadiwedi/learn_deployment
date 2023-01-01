import { useState ,useEffect} from "react";
import CreateNewProduct from "./CreateNewProduct";
////////////////////////////////////////////////////
const getData=(url)=>{
    return fetch(url).then((res)=>res.json());
};
/////////////////////////////////////////////////////
function DisplayTheData({loading,formState,err}){
    const[Products,setProduct]=useState([])
    const [page,setpage]=useState(1);

  useEffect(()=>{
    fetchAndUpdateData(page)
  },[page])  
//////////////////////////////////////////////////
  const fetchAndUpdateData=async(page)=>{
    try{
      
        let data= await getData(`http://localhost:3030/products?_limit=3&_page=${page}`)
        setProduct(data)
    }catch(err){
       return err

    }
  }

  const handlePageChange=(val)=>{
    setpage((prev)=>prev+val)
   
  }
 //////////////////////////////////////////////////////// 
return (
    <div id="products-display">
        <h1>Products</h1>
        <div style={{display: "grid",
                gridTemplateColumns: "repeat(3,1fr)"}} >
            
        { Products.map((el)=>(
                    <div key={el.id}> 
                    <img width={"50%"} src={el.imageUrl} alt={el.title}/>
                    <h4>Title : {el.title}</h4>
                    <h4>Price : {el.price}</h4>
                    </div>
                ))
            }
        </div>
        <div id="pagination" >
        <button disabled={page==1} onClick={()=>handlePageChange(-1)}>Previous</button>
            <button disabled>{page}</button>
            <button onClick={()=>handlePageChange(+1)}>Next</button>           
            </div>   

    </div>
)
}

export default DisplayTheData;