import AllMovies from "@/container/movie/AllMovies"
import { ContainerHeader } from "@/container/Header/ContainerHeader";
import { FavorisMovieProvider } from "@/context/FavorisMovieProvider";
export default function Home() {

  return (
    <div>
      <FavorisMovieProvider>
        <ContainerHeader />
        <div className="p-28">
          <AllMovies />
        </div>
      </FavorisMovieProvider>
    </div>
  )
}
