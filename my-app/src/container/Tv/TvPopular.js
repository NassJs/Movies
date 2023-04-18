import { useGetTvPopular } from "@/hook/useGetTvPopular";
import { Picture } from "@/component/Picture/Picture";
import { Note } from "@/component/Note/Note";
import { Card, CardHeader, CardBody, CardFooter } from "@/component/Card/Card";
import { AiOutlineStar } from "react-icons/ai";

export const TvPopular = () => {
    const { tvPopular } = useGetTvPopular();

    return (
        <div className="flex flex-wrap justify-center">
            {tvPopular.map((popular) => (
                <Card key={popular.id}>
                    <CardHeader>
                        <Picture size="h-48 w-80" src={`http://image.tmdb.org/t/p/w300${popular.backdrop_path}`} />
                    </CardHeader>
                    <CardBody>
                        <p className="flex justify-center p-4 text-xs truncate"> {popular.name.substr(0, 15)}</p>
                    </CardBody>
                    <CardFooter>
                        <Note variant="flex items-center"> {popular.vote_average} <AiOutlineStar /> </Note>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}