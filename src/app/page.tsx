import { Hero, HardSkills, SoftSkill, ProfessionalExperience, Education, Qualifications } from '@/components/home-page'
import { dataFetchHomePage } from '@/utils/data-fetch-home-page'

export default async function Home() {
  const { heroSection, educationSection, hardSkillSection, softSkillSection, qualificationSection, professionalExperienceSection } = await dataFetchHomePage();


  return (


    < div className="flex flex-col gap-4" >


      <Hero name={heroSection.name}
        role={heroSection.role}
        description={heroSection.description}
        imageUrl={heroSection.avatar.url}
        contacts={heroSection.socialMedias} />

      <Education title={educationSection.title} titleHeader={educationSection.titleHeader} educationItems={educationSection.educationItems} />
      <HardSkills title={hardSkillSection.title} titleHeader={hardSkillSection.titleHeader} hardSkillsItems={hardSkillSection.hardSkillsItems} />
      <SoftSkill title={softSkillSection.title} titleHeader={softSkillSection.titleHeader} softSkillItems={softSkillSection.softSkillItems} />
      <Qualifications title={qualificationSection.title} titleHeader={qualificationSection.titleHeader} qualificationItems={qualificationSection.qualificationItems} />
      <ProfessionalExperience title={professionalExperienceSection.title}
        titleHeader={professionalExperienceSection.titleHeader}
        message={professionalExperienceSection.message}
        professionalExperienceItems={professionalExperienceSection.professionalExperienceItems} />
    </ div >
  )
}
