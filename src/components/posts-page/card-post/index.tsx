import Image from "next/image";
import Link from "next/link";

export type CardPostProps = {
    summary: string,
    title: string,
    imageUrl: string,
    technologies: string[]

}

export function CardPost({ summary, title, imageUrl, technologies }: CardPostProps) {
    return (
        <Link href="#" className=" flex-col flex  bg-transparent hover:bg-gray-950 mh-[500px]
                         hover:shadow-teste w-80 z-90" >
            <header className="gap-2 flex flex-col items-center ">
                <Image
                    className="rounded-b-lg h-36 w-full opacity-30"
                    src={imageUrl}
                    alt="Mairon Vilela"
                    width={350}
                    height={350}
                />

                <span className="-mt-20 text-2xl text-center">EM BREVE</span>

            </header>

            <main className="w-full box-border py-4  px-4 space-y-7  " >
                <p className="text-gray-400 text-xs text-right">🕑há ? min <span className="text-gray-700">|</span> 🔍 leitura: 10 min</p>
                <h2 className="text-center font-bold ">{title}</h2>

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