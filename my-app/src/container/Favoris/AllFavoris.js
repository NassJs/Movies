import React from 'react'
import { useFavorisMov } from '@/context/FavorisMovieProvider'
const AllFavoris = () => {

    const { favorisMov } = useFavorisMov()
    console.log(favorisMov);
    return (
        <div>AllFavoris</div>
    )
}

export default AllFavoris