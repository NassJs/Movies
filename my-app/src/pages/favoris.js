import { AllFavoris } from "@/container/Favoris/AllFavoris";
import { ContainerHeader } from "@/container/Header/ContainerHeader";
const favoris = () => {

    return (
        <div>
            <ContainerHeader />
            <div className="">
                <AllFavoris />
            </div>
        </div>
    )
}
export default favoris;