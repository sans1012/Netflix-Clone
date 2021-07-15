import React,{ useState, useEffect} from 'react';
import axios from './axios';
import './Row.css';
import Youtube from 'react-youtube';

function Row({title,fetchURL,isLargeRow=false}){
      const[movies,setMovies]=useState([]);
      const [trailerUrl,setTrailerUrl]=useState("");
      
      const base_url="https://image.tmdb.org/t/p/original";
      useEffect(() => {
            async function fetchData() {
            const request= await axios.get(fetchURL);
            setMovies (request.data.results);
            return request;
      }
            fetchData();
      },[fetchURL])

      console.log(movies);
      const opts={
            height:"390",
            width:"100%",
            playerVars:{
                  //https://developers.google.com/youtube/player_parameters
                  autoPlay:1,
                  'controls': 0,
                  'autohide': 1,
                  'wmode': 'opaque',
                  'origin': 'http://localhost:3000'
            }}

     const handleClick = async (movie) => {
      if (trailerUrl) {
            setTrailerUrl("");
          } else {
        let trailerurl = await axios.get(
          `/movie/${movie.id}/videos?api_key=a8a016f290b3943508b1bfd21711aa21&language=en-US`
        );
        setTrailerUrl(trailerurl.data.results[0]?.key);
        }
    };
    /*
    const handleClick =(movie) => {
      if (trailerUrl) {
            setTrailerUrl('');
          } else {
                movierTrailer(movie?.name || "").then((url)=>{
                      const urlParams= new URLSearchParams(url).search;
                      setTrailerUrl(urlParams.get('v'));
                }).catch((error)=> console.log(error));
          }};
*/
      return (
            <div className="row">
                  <h2>{title}</h2>
                  
                       <div className="row__posters">
                        {movies ? movies.map(movie=>
                        ((isLargeRow && movie.poster_path)||(!isLargeRow && movie.backdrop_path))&&(
                        <img    
                        key={movie.id}  
                        onClick={() => handleClick(movie)}          
                  
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
                        
                        src={`${base_url}${movie.poster_path}`}

                        alt={movie.title|| movie.name} />
                  
                        )): "Not Yet Working" } 
                        </div>  
                        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
            </div>
      )
}

export default Row;

