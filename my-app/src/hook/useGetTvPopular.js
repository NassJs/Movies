import { useEffect, useState } from "react";
import axios from "axios";

export const useGetTvPopular = () => {
    const [tvPopular, setTvPopular] = useState([])

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3//tv/popular?api_key=0670a5a788c4054210c0beadffe00f82`)
            .then((response) => {
                setTvPopular(response.data.results)
            })
    }, [])
    return { tvPopular }
}