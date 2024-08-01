import Image from "next/image"

export default function ProjectsPage() {
  return (<div className="flex flex-col justify-center items-center space-y-3">

    <Image src="/assets/images/em-construcao.png" height={600} width={600} alt="" />
    <h1 className=" text-5xl font-mono font-bold text-emerald-500">PAGINA PROJETOS</h1>
    <h1 className=" text-5xl font-mono font-bold text-emerald-500">EM CONSTRUÇÃO</h1>

  </div>
  )
}
