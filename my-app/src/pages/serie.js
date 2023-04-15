import { ContainerHeader } from "@/container/Header/ContainerHeader";
import { TvPopular } from "@/container/Tv/TvPopular";
const serie = () => {


    return (
        <div>
            <ContainerHeader />
            <div className="p-20">

                <TvPopular />
            </div>
        </div>
    )
}
export default serie;