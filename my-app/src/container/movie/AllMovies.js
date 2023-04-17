import { useGetMoviePopular } from "@/hook/useGetMoviePopular";
import { Card, CardHeader, CardBody, CardFooter } from "@/component/Card/Card";
import { Note } from "@/component/Note/Note";
import { Picture } from "@/component/Picture/Picture";
import { AiOutlineStar } from "react-icons/ai";
import Link from 'next/link';

export const AllMovies = () => {
    const { popularMovie } = useGetMoviePopular();

    return (
        <div className="flex flex-wrap justify-center">
            {popularMovie.map((popular) => (
                <Link href={`movies/${encodeURIComponent(popular.original_title)}`}>
                    <Card Card key={popular.id}>
                        <CardHeader>
                            <Picture size=" object-fill h-48 w-80" src={`http://image.tmdb.org/t/p/w300${popular.backdrop_path}`} />
                        </CardHeader>
                        <CardBody>
                            <p className="flex justify-center p-4 text-xs truncate"> {popular.original_title.substr(0, 15)}</p>
                        </CardBody>
                        <CardFooter>
                            <Note> {popular.vote_average}  <AiOutlineStar /></Note>
                            <div className="text-sm"> {popular.release_date}</div>
                        </CardFooter>
                    </Card>
                </Link>

            ))
            }
        </div >
    )
} 