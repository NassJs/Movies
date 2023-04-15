import { useGetTvPopular } from "@/hook/useGetTvPopular";
import { Picture } from "@/component/Picture/Picture";
import { Note } from "@/component/Note/Note";
import { Card, CardHeader, CardBody, CardFooter } from "@/component/Card/Card";
import { Button } from "@/component/Button/Button";
import { GrFavorite } from "react-icons/gr";
export const TvPopular = () => {
    const { tvPopular } = useGetTvPopular();

    return (
        <div className="flex flex-wrap justify-center">
            {tvPopular.map((popular) => (
                <Card key={popular.id}>
                    <CardHeader>
                        <Picture src={`http://image.tmdb.org/t/p/w300${popular.backdrop_path}`} />
                    </CardHeader>
                    <CardBody>
                        <h1> {popular.name}</h1>
                    </CardBody>
                    <CardFooter>
                        <Note> {popular.vote_average}</Note>
                        <Button > <GrFavorite /> </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}