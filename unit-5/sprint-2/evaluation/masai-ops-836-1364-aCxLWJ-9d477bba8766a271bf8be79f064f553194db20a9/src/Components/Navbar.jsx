import { NavLink } from "react-router-dom";

function Navbar() {
  const links=[{path:"/coffee-data", title:"Coffee Data" },
  {path:"/employee-data",title:"Employee Data"},
  {path:"/restaurant-data", title:"Restaurant Data"}]

  return <div className="navbar">
    {/*Provide the three links here */}
    {
      links.map((el)=>{
        return (<NavLink key={el.path} to={el.path}>{el.title}</NavLink>)
      })
    }
    </div>;
}

export { Navbar };
