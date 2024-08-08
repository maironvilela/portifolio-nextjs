"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Header = () => {

  const path = usePathname();

  const PAGES = [
    {
      path: '/',
      label: 'Home',
      isActive: path === '/'
    },
    {
      path: '/posts',
      label: 'Posts',
      isActive: path === '/posts'

    },
    {
      path: '/projects',
      label: 'projects',
      isActive: path === '/projects'
    }
  ]



  return (
    <header className="w-full fixed bg-gray-800 text-emerald-100 font-mono z-10 p-6 ">
      <ul className="flex justify-center  gap-4 ">

        {PAGES.map((page, index) => (
          <li key={index} className="p-2 border-b-2 border-transparent hover:border-b-emerald-500" >
            <Link href={page.path} className={page.isActive ? "text-emerald-500" : ""} >
              <strong className="mr-1">#</strong>
              <span>{page.label}</span>
            </Link>
          </li>
        ))
        }


      </ul >
    </header >
  )
}
