import React from "react";
import { Route, Routes } from "react-router-dom";
import CoffeeData from "../Components/CoffeeData";
import RestaurantData from "../Components/RestaurantData";
import EmployeeData from "../Components/EmployeeData";

const AllRoutes = () => {



  return <div>
        <Routes>
            <Route path="/coffee-data" element={<CoffeeData/>}/>
            <Route path="/restaurant-data" element={<RestaurantData/>}/>
            <Route path="/employee-data" element={<EmployeeData/>}/>
        </Routes>



  </div>;

    




};

export { AllRoutes };
