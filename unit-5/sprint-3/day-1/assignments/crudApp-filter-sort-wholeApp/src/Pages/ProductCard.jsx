import { useDispatch, useSelector } from "react-redux"
import { Link, Navigate } from "react-router-dom"

export default function ProductCard({brand,description,gender,id,thumbnail,price}) {
    const dispatch=useDispatch()
    const handleDelete=()=>{
        dispatch(id)
    }

    return(
        <div style={{border:"1px solid grey",width:"90%"}}>
            <img  src={thumbnail}/>
            <p>{brand.split(' ').splice(0,2).join(' ')}</p>
            <p>{description.substr(0,15)}</p>
            <h3>{price}</h3>
            <Link to={`/single/${id}`}>More Information</Link>
            <br />
            <Link to={`/edit/${id}`}><button>Edit Here</button></Link>
            <br />
            <button onClick={()=>handleDelete(id)}>Delete</button>
        </div>
    )
};
