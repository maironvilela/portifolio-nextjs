import Link from 'next/link'

export const Header = () => {
  return (
    <header>
      <ul className="flex justify-center container gap-4 fixed bg-gray-800 text-emerald-100 font-mono z-10">
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