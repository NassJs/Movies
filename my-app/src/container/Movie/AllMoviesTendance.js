import { useState } from 'react';
import { useGetMoviesTendance } from '../../hook/useGetMoviesTendance';
import { Card, CardBody } from '../../component/Card/Card';
import { Picture } from '@/component/Picture/Picture';
import { Note } from '@/component/Note/Note';
import { CardHeader, CardFooter } from '../../component/Card/Card';
import { Button } from '../../component/Button/Button';
import { AiOutlineStar } from "react-icons/ai"
import { GrFavorite } from "react-icons/gr";

const AllMoviesTendance = () => {

    const { allMovies } = useGetMoviesTendance();
    const [arrLocalStorage, setArrLocalStorage] = useState([]);
    const movies = allMovies;

    const handleAddLocal = (favoris) => {
        setArrLocalStorage([...arrLocalStorage, favoris])
        let sendLocalStorage = localStorage.setItem("favoris", JSON.stringify(arrLocalStorage))
        console.log(sendLocalStorage);
    }


    return (
        <>
            <h1 className="text-xl"> Tendance : </h1>
            <div className="flex justify-center flex-wrap">
                {movies.map((movie) => (
                    <div key={movie.id} className="p-4">
                        <Card>
                            <CardHeader>
                                <Picture size="h-48 w-80" src={`http://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="film" />
                            </CardHeader>
                            <CardBody>
                                <p className=" flex justify-center p-4 text-xs truncate"> {movie.title.substr(0, 15)}</p>
                            </CardBody>
                            <CardFooter>
                                <Note>  {movie.vote_average} <AiOutlineStar /> </Note>
                                <Button onClick={() => handleAddLocal({ movie })} className='flex items-stretchr bg-gray-200'> <GrFavorite /> </Button>
                            </CardFooter>
                        </Card>
                    </div>
                ))}
            </div>
        </>

    )

}


export default AllMoviesTendance;