import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Private from "./Private";
import Products from "./Products";
import SinglePage from "./SinglePage";

export default function AllRoutes() {
    return <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/products" element={<Private><Products/></Private>} />
            <Route path="/products/:product_id" element={<SinglePage/>} />
            
        </Routes>
    </div>
};
