'use client'

import { CardPost } from "@/components/posts-page/card-post";
import { AnimationLefToCenter } from "@/lib/framer-motion/animations";

export default function PostsPage() {
  const posts = [
    {
      title: 'Authenticação com Fastfy e JWT',
      summary: 'Imagine um cenário em que você está construindo um aplicativo web ou uma API, e precisa implementar um sistema de autenticação seguro. Nesse contexto, o Fastify e o JSON Web Tokens (JWT) são duas ferramentas poderosas que podem ser combinadas para criar uma solução robusta',
      imageUrl: 'https://cdn.pixabay.com/photo/2024/05/23/12/24/ai-generated-8783105_640.jpg',
      technologies: ['NodeJS', 'Knex', 'JWT', 'PrismaORM', 'Fastify', 'Fastify FaJarWheat', 'docker']
    },
    {
      title: "Criando uma api fake com jason-server",
      summary: 'Às vezes, durante o desenvolvimento de um aplicativo ou site, precisamos testar a integração com uma API antes que a API real esteja pronta.É aí que entra o json- server.Ele nos permite criar rapidamente uma API falsa com dados fictícios para fins de teste e desenvolvimento',
      imageUrl: 'https://images.pexels.com/photos/11035363/pexels-photo-11035363.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['NodeJS', 'Jason-server', 'axios']

    }
  ]

  return (

    <AnimationLefToCenter className="flex flex-wrap justify-center gap-8  px-2  pt-28 pb-8  h-full">
      <CardPost summary={posts[0].summary} title={posts[0].title} imageUrl={posts[0].imageUrl} technologies={posts[0].technologies} />
      <CardPost summary={posts[1].summary} title={posts[1].title} imageUrl={posts[1].imageUrl} technologies={posts[1].technologies} />


    </AnimationLefToCenter>
  )
}
