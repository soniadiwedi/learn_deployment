import { Link } from "react-router-dom"

export default function Cards({id,title,image,price}) {
    

    return <div style={{border:"2px solid grey"}}>
            <img src={image} alt={title}  width="40%"/>
            <p>{title}</p>
            <h4>{price}</h4>
            <Link to={`/products/${id}`}>More About</Link>
    </div>
};
