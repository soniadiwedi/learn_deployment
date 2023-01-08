import { Route, Routes } from "react-router-dom";
import Cards from "../components/Cards";
import Home from "../components/Home";
import Notfound from "../components/Notfound";
import Products from "../components/Products"
import SingleProduct from "../components/SingleProduct";
export default function AllRoutes() {
    
    return <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='*' element={<Notfound/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/products/:products_id' element={<SingleProduct/>}/>
        </Routes>
    </div>
};
