import { ContainerHeader } from "@/container/Header/ContainerHeader";
import AllMoviesTendance from "@/container/Movie/AllMoviesTendance";
import { ContainerFooter } from "@/container/Footer/ContainerFooter";
// import { ToastProvider } from "@/component/Toast/Toast";
export default function Home() {

  return (
    <div>
      {/* <ToastProvider> */}
      <ContainerHeader />
      <div className="p-28">
        <AllMoviesTendance />
      </div>
      <ContainerFooter />
      {/* </ToastProvider> */}
    </div>
  )
}
