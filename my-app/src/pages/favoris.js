import { AllFavoris } from "@/container/Favoris/AllFavoris";
import { ContainerHeader } from "@/container/Header/ContainerHeader";
const favoris = () => {
    return (
        <div>
            <ContainerHeader />
            <div className="p-20">
                <AllFavoris />
            </div>
        </div>
    )
}
export default favoris;