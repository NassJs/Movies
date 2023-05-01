import axios from "axios";
import { useEffect, useState } from "react";

export const useActor = ({ id }) => {

    const [actors, setActors] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=0670a5a788c4054210c0beadffe00f82&language=en-US`)
                .then((res) => {
                    // for (let i = 0; i < res.data.cast.length; i++) {
                    setActors(...actors, res.data.cast)
                    // }
                    // setActors(res.data.cast)
                })
        }
        fetchData();
    }, [])
    return actors
}