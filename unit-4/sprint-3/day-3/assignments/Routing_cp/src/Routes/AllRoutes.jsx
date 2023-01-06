import React from 'react'
import {Routes,Route} from  "react-router-dom"
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Products from '../Pages/Products'
import PrivateRoute from "./PrivateRoute"
const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/product' element={<PrivateRoute><Products/></PrivateRoute>}/>
            </Routes>

        </div>
    )
}

export {AllRoutes}