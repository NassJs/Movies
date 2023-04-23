import { AllFavoris } from "@/container/Favoris/AllFavoris";
import { ContainerHeader } from "@/container/Header/ContainerHeader";
import { MoviesStorageProvider } from "@/context/LocalStorageProvider";
const favoris = () => {
    return (
        <div>
            <MoviesStorageProvider>
                <ContainerHeader />
                <div className="p-20">
                    <AllFavoris />
                </div>
            </MoviesStorageProvider>
        </div>
    )
}
export default favoris;