import { useActor } from "@/hook/useActor"
import { Card, CardHeader, CardFooter } from "@/component/Card/Card"
import { Picture } from "@/component/Picture/Picture"
import { Title } from "@/component/Title/Title"

export const ActorById = (id) => {
    const actors = useActor(id)
    console.log(actors)
    if (actors)
        return (
            <div className="flex gap-5">
                {actors.slice(0, 8).map((actor) => (
                    <Card key={actor.cast_id} className="bg-slate-300">
                        <CardHeader>
                            <Picture src={`https://image.tmdb.org/t/p/w185/${actor.profile_path} `} />
                        </CardHeader>
                        <CardFooter>
                            <Title className="flex justify-items-center "> {actor.name}</Title>
                        </CardFooter>
                    </Card>
                ))}

            </div>
        )
}