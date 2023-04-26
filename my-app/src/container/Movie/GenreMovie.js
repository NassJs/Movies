import { useEffect } from "react"
import { Tag } from "@/component/Tag/Tag"
import { useGetGenreMovie } from "@/hook/useGetGenreMovie"


export const GenreMovie = ({ id }) => {
    const { genreMovie } = useGetGenreMovie()
    const copyGenreMovie = genreMovie.genres;
    console.log("genreMovie", genreMovie);
    let genreName = [];

    useEffect(() => {
        if (genreMovie) {
            const filterGenre = () => {
                for (let i = 0; i < id.length; i++) {
                    console.log("id", id[i])
                    let filter = copyGenreMovie.filter(fil => fil.id === id[i])
                    console.log("filter", filter)


                }
                console.log("arrName", genreName)
            }
            filterGenre();
        }

    }, [genreMovie])


    return (
        <>
            <Tag>  TEST </Tag>
        </>
    )
}