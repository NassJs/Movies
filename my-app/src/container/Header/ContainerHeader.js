import { Header } from "@/component/Header/Header"
import Link from 'next/link'
import { GrFavorite } from "react-icons/gr";
import { CgDarkMode } from "react-icons/cg";

export const ContainerHeader = () => {
    return (

        <Header>
            <div className="pr-4 pl-4">
                <div className="flex  justify-between p-5">
                    <Link href="/">
                        <span className="pr-4">NASSMOVIES</span>
                    </Link>
                    <div className="flex">
                        <Link href="/film">
                            <div className="pr-2">
                                FILM
                            </div>
                        </Link>
                        <Link href="/serie">
                            <div className="pr-2">
                                SERIE
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link href="/favoris">
                            <button className="pr-4"> <GrFavorite /> </button>
                        </Link>
                        <button> <CgDarkMode /> </button>
                    </div>
                </div>
            </div>
        </Header >
    )
}