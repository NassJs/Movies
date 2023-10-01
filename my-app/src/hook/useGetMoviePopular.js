import { useState, useEffect } from "react"
import axios from "axios";

export const useGetMoviePopular = () => {
    const [popularMovie, setPopularMovie] = useState([]);

    useEffect(() => {
        const getPopularMovie = () => {
            axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=8604e58bc23d1024de104bb5bbc43a27`)
                .then((response) => {
                    setPopularMovie(response.data.results)
                })
        }
        getPopularMovie();
    }, [])

    return { popularMovie }
}