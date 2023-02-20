import { Routes } from "react-router";
import { Route } from "react-router-dom";
import Home from "./Home";
import Result from "./Result";
import Vote from "./Vote";

export default function MainRoutes() {
    
    return(
        <Routes>

            <Route path="/" element={<Home/>}/>
            <Route path="/result" element={<Result/>}/>
            <Route path="/vote" element={<Vote/>}/>
            


        </Routes>
    )
};
