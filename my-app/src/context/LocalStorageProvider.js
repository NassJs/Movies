import { useContext, useMemo, useState, createContext } from "react";

export const MoviesStorageContext = createContext();

export const MoviesStorageProvider = ({ children }) => {
    const [favoris, setFavoris] = useState([])

    const value = useMemo(() => ({
        favoris, setFavoris
    }), [favoris])

    return (
        <MoviesStorageContext.Provider value={value}>
            {children}
        </MoviesStorageContext.Provider>
    )
}

export const useMovieFavoris = () => {
    const { favoris, setFavoris } = useContext(MoviesStorageContext);

    const addLocalStorage = ({ movie }) => {
        setFavoris([...favoris, movie])
        let sendLocalStorage = localStorage.setItem("favoris", JSON.stringify(favoris))
        return sendLocalStorage;
    }


    return { addLocalStorage, favoris }
}