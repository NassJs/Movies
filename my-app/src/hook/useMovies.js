import { useEffect, useState } from "react";
import axios from 'axios';

 export const useMovies = ({children}) => {
 
    const [allMovies, setAllMovies] = useState([])
    console.log(allMovies)
    useEffect(() => {
        getMovies();
    }, [])

    const getMovies = async () => {
      const get = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=0670a5a788c4054210c0beadffe00f82`)
      .then(( response ) => {
        console.log("ma response", response)
        setAllMovies(response)
      })
      
    }
    return(
        <div> 
          {children}
        </div>
    )
 }