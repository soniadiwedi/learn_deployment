import { useDispatch, useSelector } from "react-redux"
import { addAction, reduceAction } from "../redux/action"


export default function Counter() {
   const data=useSelector((store)=>store.counter)  //catch the data from store
//    console.log(data)
    const dispatch=useDispatch()
   
   
   
    const handleAdd=()=>{
    dispatch(addAction(1))
   }

   const handleReduce=()=>{
    dispatch(reduceAction(1))
   }
   
   return <div>
    <h1> Counter : {data}</h1>
    <button onClick={handleAdd}>Add</button>
    <button onClick={handleReduce} disabled={data==0}>Reduce</button>
    </div>
};
