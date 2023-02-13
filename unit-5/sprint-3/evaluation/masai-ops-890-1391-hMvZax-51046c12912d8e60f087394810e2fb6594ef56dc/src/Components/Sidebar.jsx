import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

// Complete the logic do not remove any data-testid

export const Sidebar = () => {
  const [searchparams, setsearchparams] = useSearchParams();
  const initialstate = searchparams.getAll("rating");
  const [rating, setrating] = useState(initialstate || []);
  const sortInitial = searchparams.get("order");
  const [order, setorder] = useState(sortInitial || "");

  useEffect(() => {
    let params = {
      rating,
    };
    order && (params.order = order);
    setsearchparams(params);
  }, [rating, order]);

  const handlechange = (e) => {
    let newrating = [...rating];
    let value = e.target.value;
    if (newrating.includes(value)) {
      newrating.splice(newrating.indexOf(value), 1);
    } else {
      newrating.push(value);
    }
    setrating(newrating);
    console.log(rating);
  };

  const handlesort = (e) => {
    setorder(e.target.value);
  };
  return (
    <DIV>
      <h3>Filter by Rating</h3>
      <div>
        <input
          data-testid="movie-filter-1"
          type="checkbox"
          value="1"
          checked={rating.includes("1")}
          onChange={handlechange}
        />
        <label>{"\u2605 \u2606 \u2606 \u2606 \u2606"}</label>
        <br />
        <input
          data-testid="movie-filter-2"
          type="checkbox"
          value="2"
          checked={rating.includes("2")}
        />
        <label>{"\u2605 \u2605 \u2606 \u2606 \u2606"}</label>
        <br />
        <input
          data-testid="movie-filter-3"
          type="checkbox"
          value="3"
          checked={rating.includes("3")}
        />
        <label>{"\u2605 \u2605 \u2605 \u2606 \u2606"}</label>
        <br />
        <input
          data-testid="movie-filter-4"
          type="checkbox"
          value="4"
          checked={rating.includes("4")}
        />
        <label>{"\u2605 \u2605 \u2605 \u2605 \u2606"}</label>
        <br />
        <input
          data-testid="movie-filter-5"
          type="checkbox"
          value="5"
          checked={rating.includes("5")}
        />
        <label>{"\u2605 \u2605 \u2605 \u2605 \u2605"}</label>
        <br />
      </div>
      <br />
      <br />
      <h3>Sort By Year</h3>
      <div>
        <input
          data-testid="movie-sort-asc"
          type="radio"
          value={"asc"}
          checked={order == "asc"}
          onChange={handlesort}
        />
        <label>Ascending</label>
        <br />
        <input
          data-testid="movie-sort-desc"
          type="radio"
          value={"desc"}
          checked={order == "desc"}
          onChange={handlesort}
        />
        <label>Descending</label>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  width: 15%;
  border-right: 1px solid gray;
`;
