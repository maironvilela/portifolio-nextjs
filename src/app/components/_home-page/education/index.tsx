import { SectionHeader } from "@/components/shared/sections-header"

export const Education = () => { // precisa criar componente educationItem
    const TITLE = 'Formação Acadêmica'
    const SUBTITLE = '{ ...formação }'

    return (

        <section className="container bg-education-image bg-cover pb-40" >

            <SectionHeader title={TITLE} subTitle={SUBTITLE} />


            <div className="flex flex-col items-center py-6">
                <strong className="text-lg">
                    Bacharelado em Sistema de Informação
                </strong>
                <strong>
                    Faculdade Cotemig
                </strong>
                <span className="text-gray-400">Conclusão: 2018</span>
            </div>

            <div className="flex flex-col items-center py-6">
                <strong className="text-lg">
                    Técnico em Informática </strong>
                <strong> Senai / Contagem</strong>
                <span className="text-gray-400">Conclusão: 2011</span>
            </div>
        </section >
    )
}