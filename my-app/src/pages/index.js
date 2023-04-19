import { ContainerHeader } from "@/container/Header/ContainerHeader";
import AllMoviesTendance from "@/container/Movie/AllMoviesTendance";
import { ContainerFooter } from "@/container/Footer/ContainerFooter";
export default function Home() {

  return (
    <div>
      <ContainerHeader />
      <div className="p-28">
        <AllMoviesTendance />
      </div>
      <ContainerFooter />
    </div>
  )
}
