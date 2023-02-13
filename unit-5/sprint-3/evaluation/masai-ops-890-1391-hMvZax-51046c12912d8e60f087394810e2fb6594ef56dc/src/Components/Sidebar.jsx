import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import styled from "styled-components";

// Complete the logic do not remove any data-testid

export const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialState = searchParams.getAll("rating");
  const initialOrder = searchParams.get("order");

  const [rating, setRating] = useState(initialState || []);
  const [order, setOrder] = useState(initialOrder || "");

  const handleChange = (e) => {
    let newCategory = [...rating];
    let value = e.target.value;

    if (newCategory.includes(value)) {
      newCategory.splice(newCategory.indexOf(value), 1);
    } else {
      newCategory.push(value);
    }
    setRating(newCategory);
  };

  const handleSort = (e) => {
    setOrder(e.target.value);
  };

  useEffect(() => {
    let params = {
      rating,
    };

    order && (params.order = order);

    setSearchParams(params);
  }, [rating, order]);

  return (
    <DIV>
      <h3>Filter by Rating</h3>
      <div>
        <input
          data-testid="movie-filter-1"
          value="1"
          onChange={handleChange}
          type="checkbox"
          checked={rating.includes("1")}
        />
        <label>{"\u2605 \u2606 \u2606 \u2606 \u2606"}</label>
        <br />
        <input
          data-testid="movie-filter-2"
          value="2"
          onChange={handleChange}
          type="checkbox"
          checked={rating.includes("2")}
        />
        <label>{"\u2605 \u2605 \u2606 \u2606 \u2606"}</label>
        <br />
        <input
          data-testid="movie-filter-3"
          value="3"
          onChange={handleChange}
          type="checkbox"
          checked={rating.includes("3")}
        />
        <label>{"\u2605 \u2605 \u2605 \u2606 \u2606"}</label>
        <br />
        <input
          data-testid="movie-filter-4"
          value="4"
          onChange={handleChange}
          type="checkbox"
          checked={rating.includes("4")}
        />
        <label>{"\u2605 \u2605 \u2605 \u2605 \u2606"}</label>
        <br />
        <input
          data-testid="movie-filter-5"
          value="5"
          onChange={handleChange}
          type="checkbox"
          checked={rating.includes("5")}
        />
        <label>{"\u2605 \u2605 \u2605 \u2605 \u2605"}</label>
        <br />
      </div>
      <br />
      <br />
      <h3>Sort By Year</h3>
      <div onChange={handleSort}>
        <input
          data-testid="movie-sort-asc"
          type="radio"
          name="order"
          value={"asc"}
          defaultChecked={order === "asc"}
        />
        <label>Ascending</label>
        <br />
        <input
          data-testid="movie-sort-desc"
          type="radio"
          name="order"
          value={"desc"}
          defaultChecked={order === "desc"}
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