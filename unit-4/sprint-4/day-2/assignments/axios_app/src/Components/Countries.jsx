import { useState, useEffect } from "react";
import GetApi from "./Api";

export default function Countries() {
  const [loding, setloading] = useState(false);
  const [country, setcountry] = useState([]);
  const [err, seterr] = useState(false);
  const [page, setpage] = useState(1);
  const [totalPages, settotalPages] = useState(1);
  const [order, setorder] = useState("asc");
////////////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    fetchData(page, order);
  }, [page, order]);

  const fetchData = () => {
    setloading(true);
    GetApi({ page, limit: 10, order: "asc", sort: "population" })
      .then((res) => {
        setcountry(res.data.data);
        settotalPages(res.totalPages);
        console.log(res.data.data);
        setloading(false);
      })
      .catch(() => {
        seterr(true);
        setloading(false);
      });
  };

  ///////////////////////////////////////////////////////////////////////////////////////////
  console.log(country);
  return loding ? (
    <h1>Loding....</h1>
  ) : err ? (
    <h1>Something wrong</h1>
  ) : (
    <>
      <button onClick={() => setorder("asc")}>Acending by Population</button>
      <button>Reset</button>
      <button onClick={() => setorder("dsc")}>Dcending by Population</button>
      <div>
        <h1>Todo Information</h1>
        {country.map((el) => {
          return (
            <div key={el.id}>
              <ul>
                <li>
                  {el.country} ----- {el.population}
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
