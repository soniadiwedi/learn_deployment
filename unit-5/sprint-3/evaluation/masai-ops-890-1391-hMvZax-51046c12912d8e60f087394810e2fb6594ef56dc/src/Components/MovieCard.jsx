import React from "react";
import { Link } from "react-router-dom";

export const MovieCard = ({Poster,Title,Year,rating,Type,id}) => {
  return <div className={"movie-card"}>
   <Link to={`/movie/${id}`}> <img className={"movie-image"} src={Poster} alt={Title} /></Link>
    <h4 className={"movie-year"}>{Title}</h4>
    <p className={"movie-year"}>{Year}</p>
    <p className={"movie-type"}>{Type}</p>
    <p className="movie-rating">{rating}</p>

  </div>;
};
