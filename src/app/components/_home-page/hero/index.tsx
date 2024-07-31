import Image from 'next/image'
import Link from 'next/link'
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
    <section className="container flex flex-col-reverse items-center bg-hero-image bg-cover my-20">
      <div className="flex flex-col gap-3">
        <div className="text-center pt-3 ">
          <h1 className="text-4xl font-mono font-semibold ">Mairon Vilela</h1>
          <strong className="text-base  text-emerald-500 mt-1">
            Desenvolvedor Back-end Javascript
          </strong>
        </div>
        <div className="text-center space-y-4">
          <p className="text-justify font-mono">
            Com uma sólida base em desenvolvimento backend, construo sistemas
            resilientes e APIs eficientes que impulsionam a experiência do
            usuário, e é claro... Seguindo os melhores padrões para manter a
            qualidade do código
          </p>
          <div className=" flex justify-center ">
            <ul className="flex gap-4">
              {CONTACTS.map((contact, index) => {
                return (
                  <li
                    key={`contact-${index}`}
                    className="text-gray-500 hover:text-gray-100 ease-in duration-300"
                  >
                    <Link href={contact.href}>{contact.icon}</Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
      <div>
        <Image
          className="rounded-full"
          src="https://th.bing.com/th?q=Avatar+Patati+Patata&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=pt-BR&cc=BR&setlang=pt-br&adlt=moderate&t=1&mw=247"
          alt="Mairon Vilela"
          width={300}
          height={300}
        />
      </div>
    </section>
  )
}
