import axios from "axios";

//base url to make requests to the the movie database
const instance=axios.create({
    baseURL:"https://api.themoviedb.org/3",
});
  
 
export default instance;
//1f7e70e590a562d314a8e131c7f4a44f