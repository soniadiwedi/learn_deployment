import {Button,Input,TableContainer,Table,Tbody,Th,Thead,Tr,Td} from "@chakra-ui/react"
import axios from "axios"
import {useState,useEffect} from "react"
export default function Dashboard() {

  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const Input = () => <div />;
  // const Table = () => <div />;
  // const TableContainer = () => <div />;
  // const Tbody = () => <div />;
  // const Th = () => <div />;
  // const Thead = () => <div />;
  // const Tr = () => <div />;

  const[item,setitem]=useState([])
  const[order,setorder]=useState(true)
  const[or,setor]=useState(true)
  

  function getData(){
    axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/houses`)
    .then((res)=>{
      setitem(res.data)
      console.log(res.data)
    })
  }

  useEffect(()=>{
    getData()
  },[order]
  )

  useEffect(()=>{

  },[or])

  function handlesort(){
      setitem(item.sort((a,b)=>a.rent-b.rent))
      setor(!or)
  }

  function handlesortdec(){
    
    setitem(item.sort((a,b)=>b.rent-a.rent))
    console.log(item)
    setor(!or)
  }

  


  function handledelete(id){
    axios({
      method:'delete',
      url:`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/houses/${id}`
    })
    setorder(!order)
  }

 function handleSearch(e){
  axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/houses?q=${e.target.value}`)
  .then((res)=>{
    setitem(res.data)
    console.log(res.data)
  })
 }
 console.log(item)
  return (
    <div>
        <div className="sortingButtons">
          <Button className = "sortByRentAsc" onClick={handlesort} >  Sort by Asc </Button>
          <Button className = "sortByRentDesc" onClick={handlesortdec}> Sort by Desc </Button>
        </div>

        <Input className = "searchAddress" onChange={handleSearch} placeholder = "Search Data" />


        <TableContainer>
          <Table className="table">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Owner's Name</Th>
                <Th>Address</Th>
                <Th>Area Code</Th>
                <Th>Rent</Th>
                <Th>Bachelor Tenants Allowed</Th>
                <Th>Married Tenants Allowed</Th>
              </Tr>
            </Thead>
            <Tbody> 
              {/* Map the below container against your data */}
              {
                item?.map((el)=>{
                  return  <Tr className = "houseDetails" key={el.id} >
                  <Td className = "name" >{el.name}</Td>
                  <Td className = "ownersName" >{el.ownerName}</Td>
                  <Td className = "address" >{el.address}</Td>
                  <Td className = "areaCode" >{el.areaCode}</Td>
                  <Td className = "rent" >{el.rent}</Td>
                  <Td className = "isBachelorAllowed" >{el.isBachelorAllowed ?"Yes":"No"}</Td>
                  <Td className = "isMarriedAllowed" >{el.isMarriedAllowed? "Yes":"No"}</Td>
                  <Td className = "delete" onClick={()=>handledelete(el.id)}> Delete </Td>
              </Tr>
                })
              }
             
            </Tbody>
          </Table>
        </TableContainer>
    </div>
  )
}
