import { useRouter } from 'next/router';
import { useGetMoviePopular } from '@/hook/useGetMoviePopular';
import { Picture } from '@/component/Picture/Picture';
import { Title, SubTitle } from '@/component/Title/Title';
import { Score } from '@/component/Score/Score';
import { Note } from '@/component/Note/Note';
import { Button } from '@/component/Button/Button';
import { BiLike, BiDislike } from "react-icons/bi";
import { GenreMovie } from './GenreMovie';
import { ActorById } from '../Actor/ActorById';
import { ContainerHeader } from '../Header/ContainerHeader';
export const MoviesById = () => {
    const router = useRouter();
    const { id } = router.query;
    const { popularMovie } = useGetMoviePopular();
    const moviesId = popularMovie.filter((e) => e.original_title === id)

    if (moviesId)
        return (
            <>
                <Button className="h-12 w-20 m-10 border-2 bg-slate-100 hover:bg-slate-400 rounded-full" onClick={() => router.back()}>  Retour </Button>
                <div className='p-10'>
                    {moviesId.map((movie) => (
                        <>
                            <div key={movie.id} className='flex p-4'>
                                <Picture src={`https://image.tmdb.org/t/p/original//${movie.poster_path}`}
                                    size="h-104 w-72 rounded-lg shadow-2xl" />
                                <div className="p-4">
                                    <Title variant="text-3xl"> {movie.title} </Title>
                                    <Score> {movie.vote_average} / 10 </Score>
                                    <Note> (Vote user : {movie.vote_count})</Note>
                                    <GenreMovie id={movie.genre_ids} />
                                    <SubTitle variant="text-xl pt-4 pb-4"> {movie.overview}</SubTitle>
                                    <Button> <BiLike /> </Button>
                                    <Button> <BiDislike /> </Button>
                                </div>
                            </div>
                            <ActorById id={movie.id} />
                        </>
                    ))}
                </div>
            </>
        )
    return (
        <div> Loading...</div>
    )
}
