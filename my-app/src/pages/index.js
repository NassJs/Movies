import AllMovies from "@/container/movie/AllMovies"
import { ContainerHeader } from "@/container/Header/ContainerHeader";

export default function Home() {

  return (
    <div>
      <ContainerHeader />
      <div className="p-28">
        <AllMovies />
      </div>
    </div>
  )
}
