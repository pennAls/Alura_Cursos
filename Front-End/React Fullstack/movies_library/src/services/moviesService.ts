import axios from "axios";

const moviesLibraryAPI = axios.create({
  baseURL: "http://localhost:8000/movies/",
});

const getMovies = () => {
  moviesLibraryAPI
    .get("/")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {});
};

export { getMovies };
