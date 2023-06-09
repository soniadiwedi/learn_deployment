import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { useLocation, useSearchParams } from "react-router-dom";
import { getMovies } from "../Redux/MovieReducer/action";
import { MovieCard } from "./MovieCard";
export const MovieList = () => {
  const data =useSelector((store)=>{
    console.log(store.movieReducer.movies)
    return store.movieReducer.movies
  })
  const[searchparams]=useSearchParams()
  const dispatch=useDispatch()
  const location =useLocation()

  let obj={
    params:{
      rating:searchparams.getAll("rating"),
      _sort:searchparams.get("order") && "order",
      _order:searchparams.get("order")
    }
  }


useEffect(()=>{
 dispatch(getMovies(obj))
},[location.search])

  return <div data-testid="movie-list" style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,300px"}}>{/* Map through movie array  */}
      {
        data.map((el)=>{
          return <MovieCard key={el.id} {...el}/>
        })
      }

  </div>;
};
