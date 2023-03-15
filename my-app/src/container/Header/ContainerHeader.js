import { Header } from "@/component/Header/Header"
import { GrFavorite } from "react-icons/gr";
import { CgDarkMode } from "react-icons/cg";

export const ContainerHeader = () => {
    return (

        <Header>
            <div className="pr-4 pl-4">
                <div className="flex  justify-between p-5">
                    <span className="pr-4">NASSMOVIES</span>
                    <div className="flex">
                        <div className="pr-2">
                            FILM
                        </div>
                        <div className="pr-2">
                            SERIE
                        </div>
                    </div>
                    <div>
                        <button className="pr-4"> <GrFavorite /> </button>
                        <button className="pr-4"> <CgDarkMode /> </button>
                    </div>
                </div>
            </div>
        </Header >
    )
}