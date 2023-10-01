import { useEffect, useState } from "react";
import axios from "axios";

export const useGetTvPopular = () => {
    const [tvPopular, setTvPopular] = useState([])

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3//tv/popular?api_key=8604e58bc23d1024de104bb5bbc43a27`)
            .then((response) => {
                setTvPopular(response.data.results)
            })
    }, [])
    return { tvPopular }
}