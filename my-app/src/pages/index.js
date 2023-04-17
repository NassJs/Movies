import { ContainerHeader } from "@/container/Header/ContainerHeader";
import AllMoviesTendance from "@/container/Movie/AllMoviesTendance";

export default function Home() {

  return (
    <div>
      <ContainerHeader />
      <div className="p-28">
        <AllMoviesTendance />
      </div>
    </div>
  )
}
