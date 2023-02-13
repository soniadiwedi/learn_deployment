import { Route, Routes } from "react-router-dom";
import Admin from "./Admin";
import EditPage from "./EditPage";
import Home from "./Home";
import Login from "./Login";
import PrivatrRoutes from "./PrivatrRoutes";
import SingleProduct from "./SingleProduct";

export default function MainRoutes() {
    
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/add-prod" element={<PrivatrRoutes><Admin/></PrivatrRoutes>}/>
            <Route path="/edit/:id" element={<PrivatrRoutes><EditPage/></PrivatrRoutes>}/>
            <Route path="/single/:id" element={<PrivatrRoutes><SingleProduct/></PrivatrRoutes>}/>
            <Route path="#" element={<h3>404 Page Not Found</h3>}/>
        </Routes>
    )
};
