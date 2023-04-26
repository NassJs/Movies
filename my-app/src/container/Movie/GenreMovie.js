import { useEffect, useState } from "react"
import { Tag } from "@/component/Tag/Tag"
import { useGetGenreMovie } from "@/hook/useGetGenreMovie"

export const GenreMovie = ({ id }) => {
    const { genreMovie } = useGetGenreMovie();
    const genre = [];
    const [genreMovies, setGenreMovies] = useState(genre)

    useEffect(() => {
        if (genreMovie) {
            const filterGenre = () => {
                for (let i = 0; i < id.length; i++) {
                    let filter = genreMovie.filter(fil => fil.id === id[i])
                    genre.push(filter)
                }
                setGenreMovies(genre.flat())
            }
            filterGenre();
        }
    }, [genreMovie])

    return (
        <div className="flex flex-column pt-2 gap-3">
            {genreMovies.map((data) => (
                <Tag className="flex align-center justify-center h-6  rounded-xl bg-teal-300">  {data.name} </Tag>
            ))}
        </div>
    )
}