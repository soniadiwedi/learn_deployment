import {Routes,Route} from "react-router-dom"
import Home from "./Home"
import SingleUser from "./SingleUser"
import Users from "./Users"


export default function AllRouts() {
    
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/users' element={<Users/>} /> 
            <Route path='/users/:user_id' element={<SingleUser/>} /> 
            </Routes></>
    )
};
