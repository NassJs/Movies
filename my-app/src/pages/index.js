import AllMovies from "@/container/movie/AllMovies"
import Style from  '../../src/styles/home.module.css';

export default function Home() {

  return (
    <div className={Style.home}>
     <AllMovies />
    </div>
  )
}
