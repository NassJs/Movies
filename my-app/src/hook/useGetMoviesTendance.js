import { useEffect, useState } from "react";
import axios from 'axios';

export const useGetMoviesTendance = () => {

  const [allMovies, setAllMovies] = useState([])

  useEffect(() => {
    getMoviesTendance()
  }, [])

  const getMoviesTendance = async () => {
    await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=0670a5a788c4054210c0beadffe00f82`)
      .then((response) => {
        setAllMovies(response.data.results)
      })
  }

  return { allMovies }
}
