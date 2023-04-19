import { useGetMoviePopular } from "@/hook/useGetMoviePopular";
import { Card, CardHeader, CardBody, CardFooter } from "@/component/Card/Card";
import { Note } from "@/component/Note/Note";
import { Picture } from "@/component/Picture/Picture";
import { AiOutlineStar } from "react-icons/ai";
import { SousTitle } from "@/component/Title/Title";
import Link from 'next/link';

export const AllMovies = () => {
    const { popularMovie } = useGetMoviePopular();
    console.log(popularMovie)
    return (
        <div className="flex flex-wrap justify-center">
            {popularMovie.map((popular) => (
                <Link href={`movies/${encodeURIComponent(popular.original_title)}`}>
                    <Card className="max-w-sm rounded  bg-slate-300 shadow-xl m-4" key={popular.id}>
                        <CardHeader>
                            <Picture size=" object-fill h-48 w-80" src={`https://image.tmdb.org/t/p/original//${popular.backdrop_path}`} />
                        </CardHeader>
                        <CardBody>
                            <SousTitle variant="flex justify-center"> {popular.original_title.substr(0, 15)}</SousTitle>
                        </CardBody>
                        <CardFooter className="flex justify-around items-center">
                            <Note variant="flex items-center"> {popular.vote_average}  <AiOutlineStar /></Note>
                            <div className="text-sm"> {popular.release_date}</div>
                        </CardFooter>
                    </Card>
                </Link>

            ))
            }
        </div >
    )
} 