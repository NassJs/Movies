import React from 'react'
import { useRouter } from 'next/router';
import { useGetMoviePopular } from '@/hook/useGetMoviePopular';
import { CardBorder } from '@/component/Card/Card';
import { Picture } from '@/component/Picture/Picture';

export const MoviesById = () => {
    const router = useRouter();
    const { id } = router.query;
    const { popularMovie } = useGetMoviePopular();
    const moviesId = popularMovie.filter((e) => e.original_title === id)
    console.log(moviesId)


    return (
        <div>
            <div>

                <CardBorder border="border border-indigo-600 m-20">
                    {moviesId.map((movie) => (
                        <div className="p-10">
                            <span> {movie.title}</span>
                            <Picture src={`https://image.tmdb.org/t/p/original//${movie.poster_path}`}
                                size="h-104 w-72 rounded-lg shadow-2xl" />

                            <span> {movie.overview}</span>
                        </div>
                    ))}
                </CardBorder>
            </div>
        </div>
    )
}
