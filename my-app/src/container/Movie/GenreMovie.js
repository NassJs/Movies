import { useEffect, useState } from "react"
import { Tag } from "@/component/Tag/Tag"
import { useGetGenreMovie } from "@/hook/useGetGenreMovie"


export const GenreMovie = ({ id }) => {
    const { genreMovie } = useGetGenreMovie();
    const [genre, setGenre] = useState([])
    console.log("genre", genre.flat())

    useEffect(() => {

        const filterGenre = () => {
            for (let i = 0; i < id.length; i++) {
                console.log("id", id[i])
                let filter = genreMovie.filter(fil => fil.id === id[i])
                if (filter) {
                    setGenre([genre, filter])
                }
            }
        }
        filterGenre();
    }, [genreMovie])

    return (
        <>
            <Tag>  TEST </Tag>
        </>
    )
}