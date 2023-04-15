import { ContainerHeader } from "@/container/Header/ContainerHeader";
import { useGetMoviePopular } from "@/hook/useGetMoviePopular";
const film = () => {

    const { popularMovie } = useGetMoviePopular();
    console.log("popular", popularMovie)
    return (

        <div>
            <ContainerHeader />

        </div>
    )
}
export default film;