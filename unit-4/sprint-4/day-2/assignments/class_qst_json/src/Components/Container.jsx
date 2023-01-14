import { useState, useEffect } from "react";
import AddContery from "./AddContery";
import GetApi, { AddNewCountry, DeleteCountry } from "./Api";

export default function Container() {
  const [loding, setloading] = useState(false);
  const [country, setcountry] = useState([]);
  const [err, seterr] = useState(false);
  const [page, setpage] = useState(1);
  const [totalPages, settotalPages] = useState(1);
  const [order, setorder] = useState("asc");

  useEffect(() => {
    fetchData(page, order);
  }, [page, order]);


let limit=2

  const fetchData = () => {
    setloading(true);
    GetApi({ page, limit, order: "asc", sort: "population" })
      .then((res) => {
        setcountry(res.data);
        settotalPages(Math.ceil(+res.headers["x-total-count"]/limit));
        console.log(res);
        setloading(false);
      })
      .catch(() => {
        seterr(true);
        setloading(false);
      });
  }
  
  /////////////////////////////////
  function handleDelete(id){
    DeleteCountry(id)
      fetchData(id)
    }
  //console.log(country);
  function AddCountry(data){
        AddNewCountry(data)
        fetchData(data)
  }

  ///////////////////////////////////////////////////////////
  return loding ? (
    <h1>Loding....</h1>
  ) : err ? (
    <h1>Something wrong</h1>
  ) : (
    <>
        <div>
                <AddContery AddCountry={AddCountry} />
        </div>

{/* {///////////////////////////////////////////////////////} */}
    <div>
      <button onClick={() => setorder("asc")}>Acending by Population</button>
      <button>Reset</button>
      <button onClick={() => setorder("dsc")}>Dcending by Population</button>
      </div>
      <div>
        <h1>Todo Information</h1>
        {country.map((el) => {
          return (
            <div key={el.id}>
              <ul>
                <li>
                  {el.country} ----- {el.population}--------<button onClick={()=>handleDelete(el.id)}>Delete</button>
                  
                </li>
              </ul>
            </div>
          );
        })}

        <button disabled={page == 1} onClick={() => setpage(page - 1)}>
          Previous
        </button>
        <button>{page}</button>
        <button disabled={page == totalPages} onClick={() => setpage(page + 1)}>
          Next
        </button>
      </div>
    </>
  );
}
