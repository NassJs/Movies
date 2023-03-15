import AllMovies from "@/container/movie/AllMovies"
import { ContainerHeader } from "@/container/Header/ContainerHeader";


export default function Home() {

  return (
    <div>
      <ContainerHeader />
      <AllMovies />
    </div>
  )
}
