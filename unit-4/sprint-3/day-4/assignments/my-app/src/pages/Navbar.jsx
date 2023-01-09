import { NavLink } from "react-router-dom"

export default function Navbar() {
    const link=[{path:'/', title:'Home'},
    {path:'/login', title:'Login'},
    {path:'/products', title:'Products'},
   ]

   const styles={
    
   }
    return (
        <div style={{backgroundColor:'skyblue', padding:'20px', display:'flex',justifyContent:'space-around'}}> 
            {
                link.map((el)=>{
                    return(<NavLink key={el.path} to={el.path}>{el.title}</NavLink>) 
                })
            }
        </div>
    )
};
