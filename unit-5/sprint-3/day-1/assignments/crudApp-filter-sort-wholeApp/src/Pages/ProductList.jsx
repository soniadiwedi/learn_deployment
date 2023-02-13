import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useSearchParams } from "react-router-dom"
import { getProduct } from "../Redux/ProductReducer/action"
import ProductCard from "./ProductCard"

export default function ProductList() {
    const data=useSelector((store)=>store.productReducer.products)
    // console.log(data)
    const [searchParams,setSearchParams]= useSearchParams();
    const location=useLocation()
    console.log(location)
    const dispatch=useDispatch()

    let obj={
        params:{
            brand:searchParams.getAll("brand"),//filtering
            _sort:searchParams.get("order") && "price",
            _order:searchParams.get("order")
        }
    }

    useEffect(()=>{
        dispatch(getProduct(obj))
    },[location.search]) //location.search depency gives us filtered data from UI 
    return(
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",alignItems:"center",margin:"auto",gap:"20px"}}>
               {
                data.length>0 && data.map((el)=>{
                    return <ProductCard key={el.id} {...el}/>
                })
               } 
        </div>
    )




    

    // -------It is dev style-----------------------------
    // const data=useSelector((store)=>store.productReducer.products)
    // console.log(data)
    // const [searchParams,setSearchParams]= useSearchParams();
    // const Cat=(searchParams.getAll('category'))
    // const dispatch=useDispatch()

    // useEffect(()=>{
    //     dispatch(getProduct)
    // },[])
    // return(
    //     <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",alignItems:"center",margin:"auto",gap:"20px"}}>
    //     {data.length>0 && data.filter((el)=>{
    //         if(Cat.length>0){
    //             return Cat.includes(el.category);
    //         }else{
    //             return el;
    //         }
    //     }).map((el)=>{
    //         return <ProductCard key={el.id} {...el}/>
    //     })}
    //     </div>
    // )
};



