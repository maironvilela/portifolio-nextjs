
type CMSIconProps = {
    icon: string;
    section?: string
}

export const CMSIcon = ({ icon, section = "icon-svg-hero" }: CMSIconProps) => {

    const styles = {
        hero: "icon-svg-hero",
        hardSkills: "icon-svg-hard-skills"
    }
    return (
        <div className={section} dangerouslySetInnerHTML={{ __html: icon }} />
    )

}