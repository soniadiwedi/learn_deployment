import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  RadioGroup,
  HStack,
  Radio,
  Button,
  Stack,
  Box,
  Checkbox,
} from "@chakra-ui/react";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { postProduct } from "../Redux/ProductReducer/action";

export default function Admin() {
  const init = {
    image: "",
    brand: "",
    price: "",
    description: "",
    gender: "",
    hobbies:[]
  };
  const [data, setData] = useState(init);
  const dispatch=useDispatch()
  
  const inputData = (e) => {
    const{name,value}=e.target
    if(name=='hobbies'){
      setData({...data,hobbies:[...data.hobbies,value]})
    }else{

      setData({ ...data, [name]: name==="price" ? +value: value });
    }
  };
  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(postProduct(data))
    setData(init)
  }


  // console.log(data);
  return (
    <div>
      <Box w="40%" m="auto">
        <form onSubmit={(e)=>handleSubmit(e)}>
        <FormControl>
          <FormLabel>Image</FormLabel>
          <Input type="url" name="image" onChange={(e)=>inputData(e)} />
          <FormLabel>Brand</FormLabel>
          <Input type="text" onChange={(e)=>inputData(e)} name="brand" value={data.brand} />
          <FormLabel>Price</FormLabel>
          <Input type="text" onChange={(e)=>inputData(e)} name="price" value={data.price}/>
          <FormLabel>Description</FormLabel>
          <Input type="text" onChange={(e)=>inputData(e)} name="description" value={data.description}/>
          <FormLabel>Select Gender</FormLabel>
          <RadioGroup>
            <Radio value="Women" onChange={(e)=>inputData(e)} name="gender">
              Women
            </Radio>
            <Radio value="Men" onChange={(e)=>inputData(e)} name="gender">
              Men
            </Radio>
            <Radio value="Kids" onChange={(e)=>inputData(e)} name="gender">
              Kids
            </Radio>
          </RadioGroup>
          {/* <FormLabel>Hobbies</FormLabel> */}
          {/* <Checkbox colorScheme="red"value="cricket" onChange={inputData} name="hobbies">
         Cricket
          </Checkbox>
          <Checkbox colorScheme="green" value='music' onChange={inputData} name='hobbies'>
        Music
          </Checkbox> */}
          <Button type="submit">Add Product</Button>
        </FormControl>
        </form>
      </Box>
    </div>
  );
}
