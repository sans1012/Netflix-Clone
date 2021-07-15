const API_KEY = "a8a016f290b3943508b1bfd21711aa21";

const requests={
      fetchTrending:`/trending/all/week?api_key=${API_KEY}&language-en-US`,
      
      fetchNetfilxOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
      
      fetchTopRated:`/discover/movie?api_key=${API_KEY}&language-en-US`,
      
      fetchSciFi:`/discover/movie?api_key=${API_KEY}&with_genres=878`,
      
      fetchMystry:`/discover/movie?api_key=${API_KEY}&with_genres=9648`|| `/discover/movie?api_key=${API_KEY}&with_genres=53`,
      
      fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=53`||
      `/discover/movie?api_key=${API_KEY}&with_genres=12`|| 
      `/discover/movie?api_key=${API_KEY}&with_genres=10759` ||
      `/discover/movie?api_key=${API_KEY}&with_genres=28`,
      
      fetchComedySeries:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
      
      fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
            
      fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
      
      fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,

      fetchMusic:`/discover/movie?api_key=${API_KEY}&with_genres=10402`,
     
}

export default requests;

