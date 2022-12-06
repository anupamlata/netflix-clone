import React, {useState,useEffect} from "react";
import axios from "./axios";

function Row({ title,fetchUrl }) {
        const [movies, setmovies] = useState([]);
     //a snepped of code which runs based on a specific condition/variable
     useEffect(() => {
       //if [], runs once when the row loaded, and dont run again
         async function fetchData() {
           const request =await axios.get(fetchUrl);
            // console.log(request.data.results);
          setmovies(request.data.results);
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
              <img src={movie.poster_path} alt={movies.name} />
              ))}
          </div>
        </div>
     ) 
  }
export default Row;