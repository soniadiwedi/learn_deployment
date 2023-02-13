import { Box, Flex } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import ProductList from "./ProductList";
import Sidebar from "./Sidebar";

export default function Home() {
    

    return (
        <div style={{display:"flex" }}>
          <div style={{width:"30%"}}>
          <Sidebar/>
            </div> 
            <div style={{width:"70%"}}>
            <ProductList/>
            </div>
        </div>
    )
    // <Box border={'1px solid red'} h='50vh'>
    //    <Flex>
    //    <Box border={'1px solid green'} w='33%' h='50vh' >
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ad saepe at sed laudantium animi nostrum, reiciendis minima eaque minus velit est aut facere. Aut, dicta. Expedita totam temporibus nesciunt esse odit consequuntur repellendus beatae.
    //     </Box>
    //     <Box border={'1px solid black'} >
    //         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste est voluptate dolore in voluptatibus, odio nobis laborum excepturi natus impedit qui nihil eaque. Quos velit et labore eum! Eligendi repellat ad veritatis laborum. Dignissimos, quisquam!
    //     </Box>
    //    </Flex>
    // </Box>
}