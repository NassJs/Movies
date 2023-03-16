import { useGetMovies } from '../../hook/useGetMovies'
import { Card, CardBody } from '../../component/Card/Card'
import { Picture } from '@/component/Picture/Picture';
import { Note } from '@/component/Note/Note';
import { CardHeader, CardFooter } from '../../component/Card/Card';
const AllMovies = () => {
    const { allMovies } = useGetMovies();

    return (
        <div className="flex justify-center flex-wrap">
            {allMovies.map((movie) => (
                <div className="pr-4 pf-4">
                    <Card>
                        <CardHeader>
                            <Picture src={`http://image.tmdb.org/t/p/w300${movie.backdrop_path}`} alt="film" />
                        </CardHeader>
                        <CardBody>
                            <h1 className=' flex  truncate justify-center text-xs'> {movie.original_title}</h1>
                        </CardBody>
                        <CardFooter>
                            <Note>  {movie.vote_average}</Note>
                            <button className=' bg-gray-200'> Favoris </button>
                        </CardFooter>
                    </Card>
                </div>
            ))}
        </div>
    )

}

export default AllMovies;
