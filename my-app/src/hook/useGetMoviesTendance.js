import { useEffect, useState } from "react";
import axios from 'axios';

export const useGetMoviesTendance = () => {

  const [allMovies, setAllMovies] = useState([])

  const getMoviesTendance = () => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=8604e58bc23d1024de104bb5bbc43a27`)
      .then((response) => {
        console.log(response.data.results);
        setAllMovies(response.data.results)
      })
  }
  useEffect(() => {
    getMoviesTendance()
  }, [])


  return { allMovies }
}
