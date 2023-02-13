import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const MovieDetail = () => {
  const[data,setdata]=useState([])
  const params=useParams()

  const getdata=(id)=>{
    axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/movies/${id}`).then((res)=>{
      console.log(res)
      setdata(res.data)

    }).catch((e)=>{
      console.log(e);
    })
  }

  useEffect(()=>{
    getdata(params.id)
  },[params.id])

  console.log(data);
  return (
    <div>
      <h3 className="movie-id">
        {data.id}
        {/* Show Movie Id here, Do not add any extra text */}
      </h3>
      <img src={data.Poster} className="movie-image" />
      <h3 className="movie-name">{data.Title}</h3>
      <p className="movie-year`">{data.Year}</p>
      <p className="movie-type">{data.Type}</p>
      <p className="movie-rating">{data.rating}</p>
      {/* Show Movie details here */}
    </div>
  );
};
