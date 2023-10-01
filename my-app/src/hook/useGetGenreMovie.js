import { useState, useEffect } from "react"
import axios from "axios"

export const useGetGenreMovie = () => {
    const [genreMovie, setGenreMovie] = useState([])

    useEffect(() => {
        const fetchData = () => {
            axios.get(`https://api.themoviedb.org/3//genre/movie/list?api_key=8604e58bc23d1024de104bb5bbc43a27`)
                .then((res) => {

                    setGenreMovie(res.data.genres)
                })
        }
        fetchData()
    }, [])

    return { genreMovie }

}