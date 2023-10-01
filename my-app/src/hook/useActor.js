import axios from "axios";
import { useEffect, useState } from "react";

export const useActor = ({ id }) => {

    const [actors, setActors] = useState([]);

    const fetchData = () => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=8604e58bc23d1024de104bb5bbc43a27&language=en-US`)
            .then((res) => {
                setActors(...actors, res.data.cast)
            })
    }
    useEffect(() => {
        fetchData();
    }, [])
    return actors
}