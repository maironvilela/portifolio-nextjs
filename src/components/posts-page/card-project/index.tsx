import Image from "next/image";
import Link from "next/link";

export function CardProject() {
    return (
        <div className="flex gap-4  rounded-2xl p-4 
                        even:bg-gradient-to-tl even:from-gray-700 even:to-gray-900
                        odd:bg-gradient-to-br odd:from-gray-900 odd:to-gray-700">
            <Image
                src="https://img.freepik.com/psd-gratuitas/renderizacao-3d-do-elemento-de-design-grafico_23-2149412223.jpg?size=626&ext=jpg"
                width={100}
                height={100}
                alt=""
                className="w-20 h-20 rounded-full" />

            <div className="space-y-4 flex-1 p-8 px-4 ">

                <div className=" flex  justify-between h-12">
                    <h2 className="text-lg font-bold font-mono">jwt-authentication-with-fastify </h2>
                    <Link href="https://github.com/maironvilela/jwt-authentication-with-fastify" target="_blank"  >
                        <Image src='./assets/images/github-icon.svg'
                            width={30}
                            height={30}
                            alt=""
                            className="max-w-12 hover:w-16 transition-all	 duration-500		" />
                    </Link>

                </div>
                <p className="pr-16 text-gray-400 text-justify text-sm font-gray-400 ">Controle todos os dispositivos de sua residencia através do smartphone, tablet,
                    computadores e assistente de vozem qualquer lugar do mundo . Controle todos os dispositivos de sua residencia através do smartphone, tablet,
                    computadores e assistente de vozem qualquer lugar do mundo</p>


                <div className="flex items-center justify-center flex-wrap gap-4 px-8 py-2 z-20">
                    <span className="bg-green-900 text-emerald-500 hover:text-white hover:font-semibold py-1 px-2 rounded-lg  text-xs text-center w-28 h-6">NodeJS</span>
                    <span className="bg-green-900 text-emerald-500 hover:text-white hover:font-semibold py-1 px-2 rounded-lg  text-xs text-center w-28 h-6">NodeJS</span>
                    <span className="bg-green-900 text-emerald-500 hover:text-white hover:font-semibold py-1 px-2 rounded-lg  text-xs text-center w-28 h-6">Fastify</span>
                    <span className="bg-green-900 text-emerald-500 hover:text-white hover:font-semibold py-1 px-2 rounded-lg  text-xs text-center w-28 h-6">Fastify JWT</span>
                    <span className="bg-green-900 text-emerald-500 hover:text-white hover:font-semibold py-1 px-2 rounded-lg  text-xs text-center w-28 h-6">Fastify</span>
                    <span className="bg-green-900 text-emerald-500 hover:text-white hover:font-semibold py-1 px-2 rounded-lg  text-xs text-center w-28 h-6">Fastify JWT</span>
                    <span className="bg-green-900 text-emerald-500 hover:text-white hover:font-semibold py-1 px-2 rounded-lg  text-xs text-center w-28 h-6">Prisma</span>
                </div>

            </div>

        </div>
    )
}