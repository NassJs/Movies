import { ContainerHeader } from "@/container/Header/ContainerHeader";
import { useGetTvPopular } from "@/hook/useGetTvPopular";
const serie = () => {

    const test = useGetTvPopular();
    console.log("api", test)
    return (
        <div>
            <ContainerHeader />
        </div>
    )
}
export default serie;