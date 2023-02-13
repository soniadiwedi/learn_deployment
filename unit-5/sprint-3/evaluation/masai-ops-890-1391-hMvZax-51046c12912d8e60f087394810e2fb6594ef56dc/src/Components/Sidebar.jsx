import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

// Complete the logic do not remove any data-testid

export const Sidebar = () => {
  const [searchparams, setsearchparams] = useSearchParams();
  const initialstate = searchparams.getAll("rating");
  const [rating, setrating] = useState(initialstate || []);
  const sortInitial = searchparams.get("year");
  const [year, setyear] = useState(sortInitial || "");

  useEffect(() => {
    let params = {
      rating,
    };
    rating && (params.year = year);
    setsearchparams(params);
  }, [rating, year]);

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
    setyear(e.target.value);
  };
  return (
    <DIV>
      <h3>Filter by Rating</h3>
      <div>
        <input
          data-testid="movie-filter-1"
          type="checkbox"
          checked={rating.includes("\u2605 \u2606 \u2606 \u2606 \u2606")}
          onChange={handlechange}
        />
        <label>{"\u2605 \u2606 \u2606 \u2606 \u2606"}</label>
        <br />
        <input
          data-testid="movie-filter-2"
          type="checkbox"
          checked={rating.includes("\u2605 \u2605 \u2606 \u2606 \u2606")}
          onChange={handlechange}
        />
        <label>{"\u2605 \u2605 \u2606 \u2606 \u2606"}</label>
        <br />
        <input
          data-testid="movie-filter-3"
          type="checkbox"
          checked={rating.includes("\u2605 \u2605 \u2605 \u2606 \u2606")}
          onChange={handlechange}
        />
        <label>{"\u2605 \u2605 \u2605 \u2606 \u2606"}</label>
        <br />
        <input
          data-testid="movie-filter-4"
          type="checkbox"
          checked={rating.includes("\u2605 \u2605 \u2605 \u2605 \u2606")}
          onChange={handlechange}
        />
        <label>{"\u2605 \u2605 \u2605 \u2605 \u2606"}</label>
        <br />
        <input
          data-testid="movie-filter-5"
          type="checkbox"
          checked={rating.includes("\u2605 \u2605 \u2605 \u2605 \u2605")}
          onChange={handlechange}
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
          checked={year == "asc"}
          onChange={(e) => handlesort(e)}
        />
        <label>Ascending</label>
        <br />
        <input
          data-testid="movie-sort-desc"
          type="radio"
          value={"desc"}
          checked={year == "desc"}
          onChange={(e) => handlesort(e)}
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
