import { useState, useEffect } from "react"
import axios from "axios";

export const useGetMoviePopular = () => {
    const [popularMovie, setPopularMovie] = useState([]);

    useEffect(() => {
        const getPopularMovie = async () => {
            await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=0670a5a788c4054210c0beadffe00f82`)
                .then((response) => {
                    console.log(response.data.results)
                    setPopularMovie(response.data.results)
                })
        }
        getPopularMovie();
    }, [])

    return { popularMovie }
}