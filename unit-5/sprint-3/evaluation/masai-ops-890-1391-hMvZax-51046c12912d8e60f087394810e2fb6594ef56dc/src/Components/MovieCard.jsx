import React from "react";

export const MovieCard = ({Poster,Title,Year,rating,Type}) => {
  return <div className={"movie-card"}>
    <img className={"movie-image"} src={Poster} alt={Title} />
    <h4 className={"movie-year"}>{Title}</h4>
    <p className={"movie-year"}>{Year}</p>
    <p className={"movie-type"}>{Type}</p>
    <p className="movie-rating">{rating}</p>

  </div>;
};
