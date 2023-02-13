import { NavLink } from "react-router-dom"

export default function Navbar() {
    const links=[{path:"/",title:"Home"},
    {path:"/login",title:"Login"},
    {path:"/add-prod",title:"Admin"},]

    return (
        <div style={{display:"flex", justifyContent:"space-between",backgroundColor:"skyblue"}}>
            {
                links.map((el,i)=>{
                    return <NavLink key={el.path} to={el.path}>{el.title} </NavLink>
                })
            }
        </div>
    )
};
