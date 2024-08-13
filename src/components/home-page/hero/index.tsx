"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'


import { CMSIcon } from '@/components/shared/cms-icon'
import { AnimationEase, AnimationLefToCenter, AnimationItems } from '@/lib/framer-motion/animations'

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

          <AnimationLefToCenter>
            <h1 className="text-2xl lg:text-5xl font-mono font-semibold">MAIRON VILELA</h1>
          </AnimationLefToCenter>

          <AnimationEase>
            <strong className="text-base lg:text-lg text-emerald-500 font-mono ">
              {role}
            </strong>
          </AnimationEase>

        </div >

        <AnimationEase>
          <p className="text-justify font-mono lg:text-md">
            {description}
          </p>
        </AnimationEase>

        <div className="text-center space-y-6">

          <div className=" flex justify-center ">
            {contacts.map((contact, index) => {
              return (
                <AnimationItems key={index} index={index}>
                  <Link href={contact.socialMediaUrl} target='_blank' className="hover:text-emerald-600">
                    <CMSIcon icon={contact.iconSvg} />
                  </Link>
                </AnimationItems>
              )
            })}
          </div>
        </div>
      </div>


      <AnimationEase>
        <Image
          className="rounded-full"
          src={imageUrl}
          alt="Mairon Vilela"
          width={250}
          height={300}
        />
      </AnimationEase>
    </section >
  )
}
