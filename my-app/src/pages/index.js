import { ContainerHeader } from "@/container/Header/ContainerHeader";
import { AllMoviesTendance } from "@/container/Movie/AllMoviesTendance";
import { ContainerFooter } from "@/container/Footer/ContainerFooter";
import { MoviesStorageProvider } from '../context/LocalStorageProvider';

export default function Home() {

  return (
    <div>
      <MoviesStorageProvider>
        <ContainerHeader />
        <div className="p-28">
          <AllMoviesTendance />
        </div>
        <ContainerFooter />
      </MoviesStorageProvider>

    </div>
  )
}
