"use client"
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import {
  TbBrandGithub,
  TbBrandInstagram,
  TbBrandWhatsapp,
  TbBrandLinkedin,
} from 'react-icons/tb'

export const Hero = () => {
  const CONTACTS = [
    {
      title: 'Github',
      href: 'https://github.com/maironvilela',
      icon: <TbBrandGithub size={60} />,
    },
    {
      title: 'Instagran',
      href: 'https://github.com/maironvilela',
      icon: <TbBrandInstagram size={60} />,
    },
    {
      title: 'Whatsapp',
      href: 'https://github.com/maironvilela',
      icon: <TbBrandWhatsapp size={60} />,
    },
    {
      title: 'Linkedin',
      href: 'https://github.com/maironvilela',
      icon: <TbBrandLinkedin size={60} />,
    },
  ]

  return (
    <section className=" flex flex-col-reverse items-center bg-hero-image bg-cover  py-24">

      <div className="flex flex-col gap-3 container ">


        <div className="text-center pt-3 " >
          <motion.h1 className="text-2xl lg:text-5xl font-mono font-semibold  "
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 2 }}

          >
            Mairon Vilela
          </motion.h1>

          <motion.strong className="text-base lg:text-lg text-emerald-500 mt-1 font-mono "
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}>
            Desenvolvedor Back-end Javascript
          </motion.strong>
        </div>



        <motion.div className="text-center space-y-4"
        >
          <motion.p className="text-justify font-mono lg:text-lg"
            initial={{ opacity: 0, scale: 0.1 }}
            exit={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ ease: "easeOut", duration: 2 }}>
            Com uma sólida base em desenvolvimento backend, construo sistemas
            resilientes e APIs eficientes que impulsionam a experiência do
            usuário, e é claro... Seguindo os melhores padrões para manter a
            qualidade do código
          </motion.p>


          <div className=" flex justify-center ">
            <ul className="flex gap-4">
              {CONTACTS.map((contact, index) => {
                return (
                  <motion.li
                    key={`contact-${index}`}
                    className="text-gray-500 hover:text-gray-100 ease-in duration-300"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 1, delay: (index + 2) * 0.1 }}
                  >
                    <Link href={contact.href}>{contact.icon}</Link>
                  </motion.li>
                )
              })}
            </ul>
          </div>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0, scale: 2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}>
        <Image
          className="rounded-full"
          src="/assets/images/avatar.svg"
          alt="Mairon Vilela"
          width={250}
          height={250}
        />
      </motion.div>
    </section >
  )
}
