import { NavLink } from "react-router-dom"

export  function Navbar() {
   
    const links=[{path:"/",title:"Home" },
                {path:"/todos",title:"Todos" },
                {path:"/login",title:"Login" },
                {path:"/todo",title:"EditTodo" },
                ] 


    return (
        <div>
            {
                links.map((el)=>{
                    return (<NavLink key={el.path} to={el.path}>{el.title}</NavLink>)
                })
            }
        </div>
    )                
};


