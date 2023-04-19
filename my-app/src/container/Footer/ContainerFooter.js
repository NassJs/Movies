import { Footer } from "@/component/Footer/Footer";
import Link from 'next/link';
import { BsGithub } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi"
export const ContainerFooter = () => {

    const date = new Date('July 1, 23 00:20:18');
    return (
        <Footer className="bg-gray-200 border-b-4 h-[12%] border-neutral-300">
            <div className="flex justify-center">
                <Link href='https://github.com/NassJs'>
                    <div className=" flex items-center cursor-pointer text-3xl p-5"> <BsGithub />  </div >
                </Link>
                <Link href="https://fr.linkedin.com/in/nassim-deflandre-aaa48a204">
                    <div className=" flex items-center cursor-pointer text-3xl p-5">   <FiLinkedin /> </div>
                </Link>
            </div>
            <span className="flex justify-center"> @Copyright {date.getFullYear()} </span>

        </Footer >
    )
}