"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'


import { CMSIcon } from '@/components/shared/cms-icon'

type Contact = {
  name: string,
  iconSvg: string
  socialMediaUrl: string
}

type HeroProps = {
  name: string
  role: string
  description: string
  imageUrl: string
  contacts: Contact[]

}
export const Hero = ({ name, role, description, imageUrl, contacts }: HeroProps) => {



  return (
    <section className="container flex flex-col-reverse items-center bg-hero-image bg-cover rounded-lg" >

      <div className="flex flex-col  gap-6 px-8">


        <div className="text-center " >
          <motion.h1 className="text-2xl lg:text-5xl font-mono font-semibold  "
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 2 }}

          >
            {name}
          </motion.h1>

          <motion.strong className="text-base lg:text-lg text-emerald-500 font-mono "
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}>
            {role}
          </motion.strong>
        </div >



        <motion.div className="text-center space-y-6"
        >
          <motion.p className="text-justify font-mono lg:text-md"
            initial={{ opacity: 0, scale: 0.1 }}
            exit={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ ease: "easeOut", duration: 2 }}>
            {description}
          </motion.p>


          <div className=" flex justify-center ">
            <ul className="flex gap-4">
              {contacts.map((contact, index) => {
                return (
                  <motion.li
                    key={`contact-${index}`}
                    className="text-gray-500 hover:text-emerald-600 ease-in duration-300"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 1, delay: (index + 2) * 0.1 }}
                  >
                    <Link href={contact.socialMediaUrl} target='_blank' >
                      <CMSIcon icon={contact.iconSvg} />

                    </Link>
                  </motion.li>
                )
              })}
            </ul>
          </div>
        </motion.div>
      </div >
      <motion.div initial={{ opacity: 0, scale: 2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}>
        <Image
          className="rounded-full"
          src={imageUrl}
          alt="Mairon Vilela"
          width={250}
          height={300}
        />
      </motion.div>
    </section >
  )
}
