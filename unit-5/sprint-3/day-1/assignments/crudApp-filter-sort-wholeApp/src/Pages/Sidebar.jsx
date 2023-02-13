import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

export default function Sidebar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialState = searchParams.getAll("brand");
  const sortInitial=searchParams.get("order")
  const [brand, setBrand] = useState(initialState || []);
  // console.log(initialState);
  const[order,setorder]=useState(sortInitial||"")

  useEffect(() => {
    let params = {
      brand,  
    }
    order && (params.order=order)
    setSearchParams(params);
  }, [brand,order]);

  const handlechange = (e) => {
    let newBrand = [...brand];
    let value = e.target.value;
   

    if (newBrand.includes(value)) {
      newBrand.splice(newBrand.indexOf(value), 1);
    } else {
      newBrand.push(value);
    }
    setBrand(newBrand);
    console.log(brand);
  };


// console.log(order)
  const handleSort=(e)=>{
    // console.log(e.target.value);
   setorder(e.target.value);
  }

  return (
    <div>
      <h3>Filter by</h3>
      <div>
        <input type="checkbox" value="Apple" checked={brand.includes("Apple")} onChange={handlechange} />
        <label>Apple</label>
        <div>
          <input type="checkbox" value="Samsung" checked={brand.includes("Samsung")} onChange={handlechange} />
          <label>Samsung</label>
        </div>
        <div>
          <input type="checkbox" value="HPPavilion" checked={brand.includes("HPPavilion")} onChange={handlechange} />
          <label>HP Pavilion</label>
        </div>
      </div>
      <h3>Sort by Price</h3>
      <div >
        <input type="radio" name="order" value={"asc"} checked={order==="asc"} onChange={(e)=>handleSort(e)} />
        <label>Ascending</label>
      </div>
      <div>
      <input type="radio" name="order" value={"desc"} checked={order==="desc"} onChange={(e)=>handleSort(e)}/>
        <label>Dscending</label>
      </div>
    </div>
  );

  //////-----dev style----------------------
  // const data = useSelector((store) => store.productReducer.products);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const initialState = searchParams.getAll("category") || [];
  // const [category, setCategory] = useState(initialState || []);
  // const [localCate, SetLocalCate] = useState([]);
  // // console.log('cat',category)
  // useEffect(() => {
  //   setSearchParams({ category: [...category] });
  // }, [category]);

  // useEffect(() => {
  //   mapCategory(data);
  // }, [data]);

  // const mapCategory = (data) => {
  //   let ct = data.map((el) => el.category);
  //   const catSet = new Set(ct);
  //   SetLocalCate([...catSet]);
  // };

  // const handlechange = (e) => {
  //   let newCategory = [...category];
  //   let value = e.target.value;

  //   if (newCategory.includes(value)) {
  //     newCategory.splice(newCategory.indexOf(value), 1); //indecOf() find the index
  //   } else {
  //     newCategory.push(value);
  //   }
  //   setCategory(newCategory);
  //   // console.log('new',newCategory)
  // };

  // return (
  //   <div>
  //     <h3>Filter By Brand</h3>
  //     {localCate?.map((el, id) => {
  //       return (
  //         <div key={id}>
  //           <input
  //             type="checkbox"
  //             value={el}
  //             checked={category.includes(el)} //it returns true or false for checked or not
  //             onChange={handlechange}
  //           />
  //           <label>{el}</label>
  //         </div>
  //       );
  //     })}
  //   </div>
  // );
}
