import React, {useState,useEffect} from "react";
import axios from "./axios";

const base_url="https://image.tmdb.org/t/p/original/";

function Row({ title,fetchUrl }) {
        const [movies, setMovies] = useState([]);
     //a snepped of code which runs based on a specific condition/variable
     useEffect(() => {
       //if [], runs once when the row loaded, and dont run again
         async function fetchData() {
           const request = await axios.get(fetchUrl);
            //  console.log(request.data.results);
           setMovies(request.data.results);
           return request;
         }
         fetchData();
      },[fetchUrl]);
      console.log(movies,'hihiih' );
      
    return (
        <div className="row">
          <h2>{title}</h2>

          <div className="row_posters">
            {movies.map(movie =>(
              <img src={`${base_url}${movie.poster_path}`} alt={movie.name} />
              ))}
          </div>
        </div>
     ) 
  }
export default Row;