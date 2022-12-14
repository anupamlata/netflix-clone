import React,{useState,useEffect} from 'react';
import axios from './axios';
import requests from './request';
import './Banner.css'

function Banner() {
   const [movie, setMovie] = useState([]);
   
   useEffect(() => {
    // async function fetchData() {
    //   const request = await axios.get(requests.fetchNetflixOriginals);
    //     console.log('hiii >> ',request.data.results);
    //   setMovie(request.data.results[0]);
    //   return request;
    // }


      async function fetchData(){
        const request= await axios.get(requests.fetchTrending); 
        console.log(request,'request:::');
        setMovie(
            request.data.results[
                Math.floor(Math.random() * request.data.results.length-1)
            ]
            );
            return request;
      }
       fetchData();
   },[]);

console.log(movie,"movie:::");

function truncate(str,n) {
    return str?.length > n ? str.substr(0,n-1) + "..." : str;
}
  return (
    <header className='banner'
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.poster_path || "198vrF8k7mfQ4FjDJsBmdQcaiyq.jpg"}"
        )`,
        backgroundPosition:"center center"
      }}
    
    >
        <div className='banner__contents'>

        <h1 className='banner__title'>
            {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className='banner__buttons'>
            <button className='banner__button'>Play</button>
            <button className='banner__button'>My List</button>
        </div>
        
        <h1 className='banner__description'>
            {truncate(movie?.overview,150)}
            </h1>
         </div>
         <div className='banner--fadeButtom' />
    </header>
  )
}

export default Banner