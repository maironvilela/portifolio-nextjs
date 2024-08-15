import { RichTextContent } from '@graphcms/rich-text-types'
import { fetchHygraphQuery } from './fetch-hygraph-query'

type Technology = {
  name: string
}
export type Projects = {
  title: string
  subTitle: string
  projectUrl: string
  technologies: Technology[]
  descriptions: {
    raw: RichTextContent
  }
  image: {
    url: string
  }
}

type projectPages = {
  projects: Projects[]
}
export type DataFetchProjectsPageResult = {
  projectPages: projectPages[]
}

export const query = `
query MyQuery {
  projectPages {
    projects{
      title
      subTitle
      projectUrl
      image {
        url
      }
      descriptions{
        raw
      }
      technologies {
        name
      }
    }
  }
}
  `

export async function dataFetchProjectPage() {
  const { projectPages } = await fetchHygraphQuery<DataFetchProjectsPageResult>(
    query
  )

  //console.log(projectPages[0].projects[0])

  return { ...projectPages[0] }
}
