import React, { useEffect, useState } from "react";
import {useSearchParams} from "react-router-dom"
import styled from "styled-components";

// Complete the logic do not remove any data-testid

export const Sidebar = () => {
  const[searchparams,setsearchparams]=useSearchParams();
  const initialstate=searchparams.getAll("rating")
  const[rating,setrating]=useState(initialstate||[])
  const sortInitial=searchparams.get("year")
  const[year,setyear]=useState(sortInitial||"")

  useEffect(()=>{

  },[])
  

  const handlechange=()=>{
    
  }
  return (
    <DIV>
      <h3>Filter by Rating</h3>
      <div>
        <input data-testid="movie-filter-1" type="checkbox" checked={rating.includes("")} onChange={handlechange}/>
        <label>{"\u2605 \u2606 \u2606 \u2606 \u2606"}</label>
        <br />
        <input data-testid="movie-filter-2" type="checkbox" />
        <label>{"\u2605 \u2605 \u2606 \u2606 \u2606"}</label>
        <br />
        <input data-testid="movie-filter-3" type="checkbox" />
        <label>{"\u2605 \u2605 \u2605 \u2606 \u2606"}</label>
        <br />
        <input data-testid="movie-filter-4" type="checkbox" />
        <label>{"\u2605 \u2605 \u2605 \u2605 \u2606"}</label>
        <br />
        <input data-testid="movie-filter-5" type="checkbox" />
        <label>{"\u2605 \u2605 \u2605 \u2605 \u2605"}</label>
        <br />
      </div>
      <br />
      <br />
      <h3>Sort By Year</h3>
      <div>
        <input data-testid="movie-sort-asc" type="radio" />
        <label>Ascending</label>
        <br />
        <input data-testid="movie-sort-desc" type="radio" />
        <label>Descending</label>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  width: 15%;
  border-right: 1px solid gray;
`;
