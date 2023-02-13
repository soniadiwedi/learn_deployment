import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { getMovies } from "../Redux/MovieReducer/action";
import { MovieCard } from "./MovieCard";
export const MovieList = () => {
  const data =useSelector((store)=>{
    console.log(store.movieReducer.movies)
    return store.movieReducer.movies
  })
  const dispatch=useDispatch()



useEffect(()=>{
 dispatch(getMovies)
},[])

  return <div data-testid="movie-list" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>{/* Map through movie array  */}
      {
        data.map((el)=>{
          return <MovieCard key={el.id} {...el}/>
        })
      }

  </div>;
};
