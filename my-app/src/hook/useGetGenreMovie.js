import { useState, useEffect } from "react"
import axios from "axios"

export const useGetGenreMovie = () => {
    const [genreMovie, setGenreMovie] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`https://api.themoviedb.org/3//genre/movie/list?api_key=0670a5a788c4054210c0beadffe00f82`)
                .then((res) => {

                    setGenreMovie(res.data.genres)
                })
        }
        fetchData()
    }, [])

    return { genreMovie }

}