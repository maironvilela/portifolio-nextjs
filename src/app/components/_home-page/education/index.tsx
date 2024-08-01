export const Education = () => { // precisa criar componente edutacationItem
    return (
        <section className="container bg-education-image bg-cover pb-40" >

            <div>
                <span className="section-sub-title">../formação</span>
                <h2 className="section-title text-center">Formação Acadêmica</h2>
            </div>
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
        </section>
    )
}