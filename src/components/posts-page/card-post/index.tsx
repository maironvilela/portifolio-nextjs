import Image from "next/image";
import Link from "next/link";

export type CardPostProps = {
    summary: string,
    title: string,
    imageUrl: string,
    technologies: string[]
    isPublish?: boolean

}

export function CardPost({ summary, title, imageUrl, technologies, isPublish = false }: CardPostProps) {
    return (
        <Link href="#" className=" flex-col flex  bg-opacity-50 hover:bg-opacity-0  bg-posts-page bg-cover mh-[500px] relative
                         hover:shadow-teste w-80 z-90" >
            <header className="gap-2 flex flex-col items-center ">
                <Image
                    className="rounded-b-lg h-36 w-full opacity-30"
                    src={imageUrl}
                    alt="Mairon Vilela"
                    width={350}
                    height={350}
                />

                {!isPublish && (<span className="text-2xl text-center absolute top-10">EM BREVE</span>)}
                <p className="text-gray-400 text-xs text-left px-2 w-full -mt-6">🕑há ? min <span className="text-gray-700">|</span> 🔍 leitura: 10 min</p>


            </header>

            <main className="w-full box-border py-4  px-4 space-y-7  " >
                <h2 className="text-center font-bold font-mono">{title}</h2>
                <p className=" text-justify text-sm text-gray-500 max-h-15" >{summary}</p>
            </main>

            <footer className="p-4 text-sm space-y-6 mt-auto">
                <div className="flex gap-2 box-border flex-wrap items-center justify-center ">

                    {technologies.map((technology) => (
                        <span key={technology} className="bg-green-900 text-emerald-500 py-1 px-2 rounded-lg  text-xs text-center">{technology}</span>
                    ))}
                </div>

            </footer>


        </Link >


    )
}