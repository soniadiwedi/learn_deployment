import React from 'react'
import { Link,NavLink } from 'react-router-dom'

function NavBar() {
  const link=[{path:'/' ,title:'Home'},
              {path:'/contact' ,title:'Contact'},
              {path:'/about-us' ,title:'About'},
              {path:'/services' ,title:'Services'},
              {path:'/login' ,title:'Login'}]
  return (
    <>
      {
        link.map((el)=>{
          return <NavLink key={el.path} to={el.path}>{el.title}</NavLink>
        })
      }
    </>
  )
}

export default NavBar
