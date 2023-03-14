import {useGetMovies} from '../../hook/useGetMovies'
import CardPicture from '../../component/Card/Card'


const AllMovies = () => {
    
   const {allMovies} = useGetMovies();
   console.log(allMovies)

   return(
        <div>
            {allMovies.map((movie) => (
            <div>
                {movie.vote_average}
             <CardPicture src={`http://image.tmdb.org/t/p/w300${movie.backdrop_path}`} alt="film" />
            </div> 
            ))}
        </div>
   )
            
}

export default AllMovies;
