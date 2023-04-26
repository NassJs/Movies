import { useState } from 'react';
import { useGetMoviesTendance } from '../../hook/useGetMoviesTendance';
import { useMovieFavoris } from '@/context/LocalStorageProvider';
import { Card, CardBody } from '../../component/Card/Card';
import { Picture } from '@/component/Picture/Picture';
import { Note } from '@/component/Note/Note';
import { CardHeader, CardFooter } from '../../component/Card/Card';
import { Button } from '../../component/Button/Button';
import { AiOutlineStar } from "react-icons/ai"
import { GrFavorite } from "react-icons/gr";
import { Toast } from '@/component/Toast/Toast';
import { FcCheckmark } from "react-icons/fc";

export const TrendingMovies = () => {

    const { allMovies } = useGetMoviesTendance();
    const [showToast, setShowToast] = useState(true);
    const { addLocalStorage } = useMovieFavoris();
    const movies = allMovies;

    const handleAddLocal = (favoris) => {
        setTimeout(() => {
            setShowToast(!showToast)
        }, 1000)
        addLocalStorage(favoris)
    }

    return (
        <>
            <div className=" flex justify-center relative bottom-7">
                {showToast ? true : <Toast variant=" flex justify-center items-center align bg-green-100 w-40">  Ajouter au favoris <FcCheckmark /> </Toast>}
            </div>

            <h1 className="text-xl"> Tendance : </h1>
            <div className="flex justify-center flex-wrap">
                {movies.map((movie) => (
                    <div key={movie.id} className="p-4">
                        <Card className="max-w-sm rounded  bg-slate-300 shadow-xl m-4">
                            <CardHeader>
                                <Picture size="h-48 w-80" src={`http://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="film" />
                            </CardHeader>
                            <CardBody>
                                <p className=" flex justify-center p-1 text-xs truncate"> {movie.title.substr(0, 15)}</p>
                            </CardBody>
                            <CardFooter className="flex justify-around items-center">
                                <Note variant="flex items-center">  {movie.vote_average} <AiOutlineStar /> </Note>
                                <Button onClick={() => handleAddLocal({ movie })} className='flex items-stretch'> <GrFavorite /> </Button>
                            </CardFooter>
                        </Card>
                    </div>
                ))}
            </div>
        </>

    )

}
