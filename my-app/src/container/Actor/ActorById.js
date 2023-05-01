import { useActor } from "@/hook/useActor"

export const ActorById = (id) => {
    const { actors } = useActor(id)
    console.log("id props", id)
    console.log("actors props", actors)
    return (
        <div>
            Acteur
        </div>
    )
}