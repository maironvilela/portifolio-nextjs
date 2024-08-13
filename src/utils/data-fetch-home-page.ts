import { RichTextContent } from '@graphcms/rich-text-types'
import { fetchHygraphQuery } from './fetch-hygraph-query'

//TODO: refatorar - criar arquivos para tipagem

export type ProfessionalExperienceItems = {
  role: string
  period: string
  company: string
  description: {
    raw: RichTextContent
  }
  companyImage: {
    url: string
  }
}
export type ProfessionalExperienceSection = {
  title: string
  titleHeader: string
  message: string
  professionalExperienceItems: ProfessionalExperienceItems[]
}

export type QualificationItem = {
  course: string
  educationalInstitute: string
  courseStatus: string
  description: string
}
export type QualificationSection = {
  title: string
  titleHeader: string
  qualificationItems: QualificationItem[]
}

export type SoftSkillSection = {
  title: string
  titleHeader: string
  softSkillItems: SoftSkillItem[]
}

export type SoftSkillItem = {
  softSkill: string
  image: {
    url: string
  }
}

export type EducationItem = {
  course: string
  school: string
  yearOfCompletion: string
}

export type Education = {
  title: string
  titleHeader: string
  educationItems: EducationItem[]
}

type SocialMedia = {
  name: string
  socialMediaUrl: string
  iconSvg: string
}
type HeroSection = {
  name: string
  role: string
  description: string
  avatar: {
    url: string
  }
  socialMedias: SocialMedia[]
}

type HardSkillsItem = {
  technology: string
  masteryOfTechnology:
    | 'iniciante'
    | 'basico'
    | 'intermediario'
    | 'avancado'
    | 'mestre'
  iconSvg: string
}

export type HardSkill = {
  title: string
  titleHeader: string
  hardSkillsItems: HardSkillsItem[]
}
type Home = {
  heroSection: HeroSection
  educationSection: Education
  hardSkillSection: HardSkill
  softSkillSection: SoftSkillSection
  qualificationSection: QualificationSection
  professionalExperienceSection: ProfessionalExperienceSection
}

type DataFetchHomePageResult = {
  homes: Home[]
}

export const query = `
  query MyQuery {
  homes {
    heroSection {
      name
      role
      description
      avatar {
        url
      }
      socialMedias {
        name
        socialMediaUrl
        iconSvg
      }
    }

  educationSection {
      title
      titleHeader
      educationItems {
        course
        school
        yearOfCompletion
      }
    }
    
    hardSkillSection {
      title
      titleHeader
      hardSkillsItems (first: 19){
        technology
        iconSvg
        masteryOfTechnology
      }
    }

    softSkillSection{
      title
      titleHeader
      softSkillItems{
        softSkill
        image {
          url
        }
      }
    } 

    qualificationSection{
      title
      titleHeader
      qualificationItems (first: 20){
        course
        educationalInstitute
        courseStatus
        description
      }
    }

    professionalExperienceSection{
      title
      titleHeader
      message
      professionalExperienceItems (first: 20){
        role
        period 
        company
         description{
          raw
        }
        companyImage {
          url
        }              
      }
    }

  }
}      
 `

export async function dataFetchHomePage() {
  const { homes } = await fetchHygraphQuery<DataFetchHomePageResult>(query)

  return { ...homes[0] }
}
