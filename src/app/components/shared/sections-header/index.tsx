type SectionHeaderProps = {
    title: string;
    subTitle: string;
}

export const SectionHeader = ({ title, subTitle }: SectionHeaderProps) => {
    return (
        <div className="py-10">
            <div>
                <div className="w-full flex lg:justify-center p-2">
                    <span className="text-emerald-500 font-mono shadow-teste ">{subTitle}</span>
                </div>

                <h2 className="text-3xl font-bold font-mono text-center " > {title} </h2>
            </div >

        </div>
    )
}