const API_KEY= "1f7e70e590a562d314a8e131c7f4a44f"
                //1f7e70e590a562d314a8e131c7f4a44f

const requests ={
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&lanquage=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=123`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&lanquage=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrernMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
} 
export default requests;