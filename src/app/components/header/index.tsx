import Link from 'next/link'

export const Header = () => {
  return (
    <ul className="flex justify-center container gap-4 absolute bg-transparent ">
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
  )
}
