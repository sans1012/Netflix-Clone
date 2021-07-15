import React,{ useState, useEffect} from 'react';
import axios from './axios';
import './Row.css';
function Row({title,fetchURL,isLargeRow=false}){
      const[movies,setMovies]=useState([]);
      const base_url="https://image.tmdb.org/t/p/original";
      useEffect(() => {
            async function fetchData() {
            const request= await axios.get(fetchURL);
            setMovies (request.data.results);
            console.log(fetchURL);
            return request;
      }
            fetchData();
      },[fetchURL])

     console.log(movies);
    
      return (
            <div className="row">
                  <h2>{title}</h2>
                  
                       <div className="row__posters">
                        {                  movies ? movies.map(movie=>
                        ((isLargeRow && movie.poster_path)||(!isLargeRow && movie.backdrop_path))&&(
                        <img                    className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
                        
                        src={`${base_url}${movie.poster_path}`}

                        alt={movie.title|| movie.name} />
                  
                        )): "Not Yet Working"
                        } 
                        </div>    
            </div>
      )
}

export default Row;

