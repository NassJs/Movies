import { useGetTvPopular } from "@/hook/useGetTvPopular";
import { Picture } from "@/component/Picture/Picture";
import { Note } from "@/component/Note/Note";
import { Card, CardHeader, CardBody, CardFooter } from "@/component/Card/Card";
import { AiOutlineStar } from "react-icons/ai";
import { SubTitle } from "@/component/Title/Title";

export const TvPopular = () => {
    const { tvPopular } = useGetTvPopular();

    return (
        <div className="flex flex-wrap justify-center">
            {tvPopular.map((popular) => (
                <Card className="max-w-sm rounded  bg-slate-300 shadow-xl m-4" key={popular.id}>
                    <CardHeader>
                        <Picture size="h-48 w-80" src={`http://image.tmdb.org/t/p/w300${popular.backdrop_path}`} />
                    </CardHeader>
                    <CardBody>
                        <SubTitle variant="flex justify-center"> {popular.name.substr(0, 15)}</SubTitle>
                    </CardBody>
                    <CardFooter className="flex justify-around items-center">
                        <Note variant="flex items-center"> {popular.vote_average} <AiOutlineStar /> </Note>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}