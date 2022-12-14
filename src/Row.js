import React, {useState,useEffect} from "react";
import YouTube from "react-youtube";
import axios from "./axios";
import './Row.css';
import movieTrailer from "movie-trailer";

const base_url="https://image.tmdb.org/t/p/original/";

function Row({ title,fetchUrl,isLargeRow }) {
        const [movies, setMovies] = useState([]);
         const [trailerUrl, setTrailerUrl] = useState("");

    //  a snepped of code which runs based on a specific condition/variable
     useEffect(() => {
      //  if [], runs once when the row loaded, and dont run again
         async function fetchData() {
           const request = await axios.get(fetchUrl);
            //  console.log(request.data.results);
           setMovies(request.data.results);
           return request;
         }
         fetchData();
      },[fetchUrl]);
      // console.table(movies);
      const opts ={
        height: '390',
        width:"100%",
        playerVars: {
           //https://developers.google.com/youtube/player_parameters
           autoplay:1,
        },
      };
      const handleClick = (movie) => {
          if (trailerUrl ) {
            setTrailerUrl("");
          }else{
            movieTrailer(movie?.name ||movie?.title|| "")
            .then(url => {
           //https://www.youtube.com/watch?v=XtMTHy8QKQU
            const urlParams =new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get('v'));
            })
            .catch(error => console.log(error))
          }
      }
      
    return (
        <div className="row">
          <h2>{title}</h2>

          <div className="row__posters">
            {
              movies.map(movie=>(
                <img 
                onClick={() => handleClick(movie)}
                 className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                 key={movie.id}
                 src={`${base_url}${isLargeRow ? movie.poster_path:movie.backdrop_path}`}
                 alt={movie.name}
                
                />
              ))
            }
          </div>
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
     )
  }
export default Row;