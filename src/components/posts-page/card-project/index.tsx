import { ReckText } from "@/components/shared/rich-text";
import { DataFetchProjectsPageResult, Projects } from "@/utils/data-fetch-projects-page";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";

type CardProject = Projects;

export function CardProject({ title, descriptions, projectUrl, technologies, image }: CardProject) {
    return (
        <div className="flex gap-4 flex-col relative  rounded-3xl md:static  
                            even:bg-gradient-to-br even:from-gray-900 even:to-gray-500
                            odd:bg-gradient-to-bl odd:from-gray-900 odd:to-gray-500 md:flex-row md:p-4 md:mx-14">
            <Image
                src={image.url}
                alt=""
                width={500}
                height={500}
                className="h-40 w-full absolute z-10
                           md:static md:w-28 md:h-28 md:rounded-full"            />



            <div className="flex-1 z-20 bg-gray-900 opacity-85 md:bg-transparent md;opacity-100">

                <div className=" 
                    flex flex-col-reverse justify-center items-center 
                    md:justify-between md:flex-row h-40 md:h-auto " >
                    <h2 className="text-lg font-bold font-mono text-center px-4 pt-12 ">{title} </h2>

                    <Link href={projectUrl} target="_blank"  >
                        <BsGithub size={40} className="hover:text-emerald-400 absolute  top-3 right-3 md:static" />
                    </Link>

                </div>
                <div className="text-gray-400 text-justify pr-14 pl-4 py-6 ">
                    <ReckText content={descriptions.raw} />
                </div>

                <div className="flex items-center justify-center flex-wrap gap-2 pb-4 z-20 "  >

                    {technologies.map((technology, index) => (
                        <span key={technology.name} className="bg-green-900 text-emerald-500 hover:text-white hover:font-semibold py-1 px-2 rounded-lg  text-xs text-center w-28 h-6">{technology.name}</span>

                    ))}
                </div>
            </div>



        </div >
    )
}