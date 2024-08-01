import Link from 'next/link'

export const Header = () => {
  return (
    <header className="w-full fixed bg-gray-800 text-emerald-100 font-mono z-10 p-8 ">
      <ul className="flex justify-center  gap-4 ">
        <li>
          <Link href="/">
            <strong className="mr-1">#</strong>
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href="/posts">
            <strong className="mr-1">#</strong>
            <span>Posts</span>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <strong className="mr-1">#</strong>
            <span>Projetos</span>
          </Link>
        </li>
      </ul>
    </header>
  )
}
