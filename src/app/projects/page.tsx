import { CardProject } from "@/components/posts-page/card-project"
import { dataFetchProjectPage, DataFetchProjectsPageResult } from "@/utils/data-fetch-projects-page"


export default async function ProjectsPage() {

  const { projects } = await dataFetchProjectPage();


  return (
    <div className="flex flex-col justify-center items-center gap-4  container ">

      {projects.map((project, index) => (
        <>
          <CardProject key={`project-${index}`} {...project} />
        </>

      ))}

    </div>
  )
}
