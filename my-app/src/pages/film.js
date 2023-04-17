import { ContainerHeader } from "@/container/Header/ContainerHeader";
import { AllMovies } from "@/container/Movie/AllMovies";
const film = () => {


    return (

        <div>
            <ContainerHeader />

            <div className="pt-20 pl-10 pr-10">
                <AllMovies />
            </div>
        </div>
    )
}
export default film;