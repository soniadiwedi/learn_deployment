import React from 'react'
import {Routes,Route} from  "react-router-dom"
import Products from "../pages/Products"


const AllRoutes = () => {
    return (
        <div>
            <Routes>
              
                <Route path='/product/?' element={<Products/>}/>
                <Route path='/product/:product_id' element={<Products/>}/>
            </Routes>

        </div>
    )
}

export {AllRoutes}