import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { CartContext } from "../context/CartpageProvider"

export default function Navbar() {
    const {addcart,Count}=useContext(CartContext)  
    
    
    const link=[{path:'/',title:'Home'},
                {path:'/products',title:'Products'}
                ]

    return (
        <div style={{display:'flex',backgroundColor:'skyblue',justifyContent:'space-around',padding:"20px"}}>{
            link.map((el)=>{
                return  <NavLink key={el.path} to={el.path}>{el.title}</NavLink>
            })
            }
           <button>Cart {Count()}</button>
        </div>
    )
};
