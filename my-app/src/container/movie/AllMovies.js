import { useState } from 'react';
import { useFavorisMov } from '@/context/FavorisMovieProvider';
import { useGetMovies } from '../../hook/useGetMovies';
import { Card, CardBody } from '../../component/Card/Card';
import { Picture } from '@/component/Picture/Picture';
import { Note } from '@/component/Note/Note';
import { CardHeader, CardFooter } from '../../component/Card/Card';
import { Button } from '../../component/Button/Button';
import { AiOutlineStar } from "react-icons/ai"
import { GrFavorite } from "react-icons/gr";

const AllMovies = () => {
    const { allMovies } = useGetMovies();
    const movies = allMovies;
    const { favorisMov, addLocalFavoris } = useFavorisMov()

    const handleAdd = (favoris) => {
        addLocalFavoris(favoris)
    }
    return (
        <>
            <h1 className="text-xl"> Tendance : </h1>
            <div className="flex justify-center flex-wrap">
                {movies.map((movie) => (
                    <div key={movie.id} className="p-4  ">
                        <Card>
                            <CardHeader>
                                <Picture src={`http://image.tmdb.org/t/p/w300${movie.backdrop_path}`} alt="film" />
                            </CardHeader>
                            <CardBody>
                                <p className=" flex justify-center p-4 text-xs truncate"> {movie.title}</p>
                            </CardBody>
                            <CardFooter>
                                <Note>  {movie.vote_average} <AiOutlineStar /> </Note>
                                <Button onClick={() => handleAdd({ movie })} className='flex items-stretchr bg-gray-200'> <GrFavorite /> </Button>
                            </CardFooter>
                        </Card>
                    </div>
                ))}
            </div>
        </>

    )

}

export default AllMovies;
