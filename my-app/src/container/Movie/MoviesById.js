import React from 'react'
import { useRouter } from 'next/router';
import { useGetMoviePopular } from '@/hook/useGetMoviePopular';

export const MoviesById = () => {
    const router = useRouter();
    const { id } = router.query;
    const { popularMovie } = useGetMoviePopular();
    const moviesId = popularMovie.filter((e) => e.original_title === id)
    console.log(moviesId)


    return (
        <div>
            {moviesId.map((id) => (
                <div> {id.id}</div>
            ))}
        </div>
    )
}
