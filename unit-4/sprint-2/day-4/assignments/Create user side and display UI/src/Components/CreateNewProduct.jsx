import {useState ,useEffct} from "react"
import DisplayTheData from "./DisplayTheData";
const initial={
    title:"",
    price:"",
    imageUrl:""
  }
  ///////////////////////////////////////
function CreateNewProduct(){

  const [formState,setformstate]=useState(initial);
  const [loading,setloading]=useState(false);
  const[err,seterr]=useState(false);

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setformstate({...formState,[name]:value})
  }

  
////////////////////////////////////////////////////////
  const handleSubmit=(e)=>{ 
    e.preventDefault()
    setloading(true)
   fetch(`http://localhost:3030/products`,{
    method:'POST',
    headers:{
        "Content-Type":"application/json",
    },
    body:JSON.stringify(formState)
   }).then((res)=>res.json())
   .then(()=>{
    setformstate(initial)
    setloading(false)
   })
   .catch((err)=>{
    console.log(err)
    seterr(true)
    setloading(false)
   })
  }
  /////////////////////////////////////////////
  if(loading){
    return <h1>Loading.......</h1>
  }if(err){
    return <h1>Something went wrong !</h1>
  }
  console.log(formState)
  const {title,price,imageUrl}=formState
    return (<div>
        <div>
        <form onSubmit={handleSubmit}>
        <label>Title :
        <input name="title" type="text" placeholder="write here product title" value={title} onChange={handleChange}/>
        </label>
        <br/>
        <br/>
      
      <label>Price :
      <input name="price" type="number" placeholder="write here product price" value={price} onChange={handleChange}/>
      </label>
      <br/>
      <br/>
      
     
      <label>Image URL: 
      <input name="imageUrl" type="text" placeholder="imageUrl" value={imageUrl} onChange={handleChange}/>
      </label>
      <br/>
      <br/>
      
     
      <label>Submit :</label>
      <input type="submit"  value="Create Product" />
    </form>
</div> 
        <div>
        <DisplayTheData loading={loading} formState={formState} err={err}/>
        </div>
        
        </div>)
    

}

export default CreateNewProduct