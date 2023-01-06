import { NavLink } from "react-router-dom"

export default function Navbar() {

    const links=[{path:'/',title:'Home'},{path:'/users',title:'Users'}]
    return(
        <div>
            {
                links.map((el)=>{
                    return <NavLink key ={el.path} to={el.path}>{el.title}</NavLink>
                })
            }
        </div>
    )
};
