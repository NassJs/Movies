import { ContainerHeader } from "@/container/Header/ContainerHeader";
import { TvPopular } from "@/container/Tv/TvPopular";
import { ContainerFooter } from "@/container/Footer/ContainerFooter";
const serie = () => {


    return (
        <div>
            <ContainerHeader />
            <div className="p-20">
                <TvPopular />
            </div>
            <ContainerFooter />
        </div>
    )
}
export default serie;