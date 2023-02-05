import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import EditTodo from "./EditTodo";
import Home from "./Home";
import Login from "./Login";
import Todos from "./Todos";


export default function AllRoutes() {
    
    return <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/todos" element={<Todos/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/todo" element={<PrivateRoute> <EditTodo/></PrivateRoute>}/>
    </Routes>
};
