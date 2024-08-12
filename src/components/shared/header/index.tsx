"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Header = () => {

  const path = usePathname();

  const PAGES = [
    {
      path: '/',
      label: 'Curriculo',
      isActive: path === '/'

    },
    {
      path: '/projects',
      label: 'projects',
      isActive: path === '/projects'
    },

    {
      path: '/posts',
      label: 'Posts',
      isActive: path === '/posts'

    }

  ]


  return (
    <header className="w-full fixed bg-gray-800 text-emerald-100 font-mono z-50 p-6 ">
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
