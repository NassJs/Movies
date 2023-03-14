import {useGetMovies} from '../../hook/useGetMovies'
import {Card} from '../../component/Card/Card'
import {Picture} from '@/component/Picture/Picture';
import { Note } from '@/component/Note/Note';
const AllMovies = () => {
    
   const {allMovies} = useGetMovies();
   console.log(allMovies)

   return(
        <div className="flex justify-center flex-wrap">
            {allMovies.map((movie) => (
            <Card>
             <Picture src={`http://image.tmdb.org/t/p/w300${movie.backdrop_path}`} alt="film" />
            <h1 className='text-xs'> {movie.original_title}</h1>
            <Note>  {movie.vote_average}</Note>
            </Card> 
            ))}
        </div>
   )
            
}

export default AllMovies;
