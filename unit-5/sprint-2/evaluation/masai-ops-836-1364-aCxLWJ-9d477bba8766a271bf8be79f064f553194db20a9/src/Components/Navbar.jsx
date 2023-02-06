import { NavLink } from "react-router-dom";

function Navbar() {
  const links=[{path:"/coffee-data", title:"CoffeeData" },
              {path:"/restaurant-data", title:"RestaurantData"},
               {path:"/employee-data",title:"EmployeeData"}]

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
