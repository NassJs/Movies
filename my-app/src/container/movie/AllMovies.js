import { useGetMoviePopular } from "@/hook/useGetMoviePopular";
import { Card, CardHeader, CardBody, CardFooter } from "@/component/Card/Card";
import { Note } from "@/component/Note/Note";
import { GrFavorite } from "react-icons/gr";
import { Picture } from "@/component/Picture/Picture";
import { AiOutlineStar } from "react-icons/ai";
import { SubTitle } from "@/component/Title/Title";
import Link from 'next/link';

export const AllMovies = () => {
    const { popularMovie } = useGetMoviePopular();


    return (
        <div className="flex flex-wrap justify-center">
            {popularMovie.map((popular) => (
                <Link href={`movies/${encodeURIComponent(popular.original_title)}`}>
                    <Card className="max-w-sm rounded  bg-slate-200 shadow-xl m-4" key={popular.id}>
                        <CardHeader>
                            <Picture size=" object-fill h-48 w-80" src={`https://image.tmdb.org/t/p/original//${popular.backdrop_path}`} />
                        </CardHeader>
                        <CardBody>
                            <SubTitle variant="flex justify-center"> {popular.original_title.substr(0, 15)}</SubTitle>
                        </CardBody>
                        <CardFooter className="flex justify-around items-center">
                            <Note variant="flex items-center"> {popular.vote_average}  <AiOutlineStar /></Note>
                        </CardFooter>
                    </Card>
                </Link>

            ))
            }
        </div >
    )
} 