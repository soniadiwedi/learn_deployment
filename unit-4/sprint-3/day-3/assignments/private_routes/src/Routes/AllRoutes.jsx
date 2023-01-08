import {Routes,Route} from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Settings from "../Pages/Settings";
import PrivateRoutes from "./PrivateRoutes"
function AllRoutes(){

    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/dashboard" element={<PrivateRoutes><Dashboard/></PrivateRoutes> }/>
            <Route path="/dashboard/settings" element={ <PrivateRoutes><Settings/></PrivateRoutes>}/>
        </Routes>
    )
}

export default AllRoutes