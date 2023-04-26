import { ContainerHeader } from "@/container/Header/ContainerHeader";
import { TrendingMovies } from "@/container/Movie/TrendingMovies";
import { ContainerFooter } from "@/container/Footer/ContainerFooter";
import { MoviesStorageProvider } from '../context/LocalStorageProvider';

export default function Home() {

  return (
    <div>
      <MoviesStorageProvider>
        <ContainerHeader />
        <div className="p-28">
          <TrendingMovies />
        </div>
        <ContainerFooter />
      </MoviesStorageProvider>

    </div>
  )
}
