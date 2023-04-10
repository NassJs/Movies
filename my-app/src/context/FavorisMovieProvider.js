import { createContext, useContext, useMemo, useState } from "react";


export const FavorisMovContext = createContext()

export const FavorisMovieProvider = ({ children }) => {
    const [favorisMov, setFavorisMov] = useState([]);
    console.log("fav provider", favorisMov)
    const memo = useMemo(() => ({
        favorisMov, setFavorisMov
    }), [favorisMov])

    return (
        <FavorisMovContext.Provider value={memo}>
            {children}
        </FavorisMovContext.Provider>
    )

}

export const useFavorisMov = () => {
    const { favorisMov, setFavorisMov } = useContext(FavorisMovContext);

    const addLocalFavoris = (movie) => {
        setFavorisMov([...favorisMov, movie]);
    }

    return { favorisMov, addLocalFavoris }
}