import React from 'react';
import "./homeScreen.css";
import Nav from "../Nav";
import Banner from "../Banner";
import requests from "../Requests";
import Row from "../Row";

function homeScreen() {
      return (
            <div className="homeScreen">
                  <Nav />
                  <Banner />
                  <Row 
                  title="NETFLIX ORIGINALS" 
                  fetchURL={requests.fetchNetfilxOriginals} 
                  isLargeRow={true} />
                  <Row 
                  title="Top Rated" 
                  fetchURL={requests.fetchTopRated} />
                  <Row 
                  title="Trending Now" 
                  fetchURL={requests.fetchTrending} />
                  ​<Row 
                  title="Comedy Movies" 
                  fetchURL={requests.fetchComedySeries} /> 
                  <Row 
                  title="Science Fiction" 
                  fetchURL={requests.fetchMystry} />
                  <Row 
                  title="Mystry & Thriller" 
                  fetchURL={requests.fetchSciFi} />
                  <Row 
                  title="Action & Adventure" 
                  fetchURL={requests.fetchActionMovies} />
                  <Row 
                  title="Horror Movies" 
                  fetchURL={requests.fetchHorrorMovies} />
                  <Row 
                  title="Documentaries" 
                  fetchURL={requests.fetchDocumentaries} />
                  <Row 
                  title="Musicals" 
                  fetchURL={requests.fetchMusic} />
                  <Row 
                  title="Romance Movies" 
                  fetchURL={requests.fetchRomanceMovies} /> 
            </div>
      )
}

export default homeScreen;