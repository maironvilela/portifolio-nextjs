import { ExperienceItem } from "./experience-item"
import { MdCurrencyExchange } from "react-icons/md";


export const ProfessionalExperience = () => {
    const PROFESSION_EXPERIENCE_ITEMS = [
        {
            icon: <MdCurrencyExchange size={50} />,
            company: "Phoenix tecnologia em Seguranca Eletronica",
            position: "Supervisor Monitoramento",
            description: "Responsável pela gestão do setor de Monitoramento, realizar treinamentos, manter manuais de procedimentos, manter escala, suporte nos procedimento realizados",
            startDate: new Date(),
        },
        {
            icon: <MdCurrencyExchange size={50} />,
            company: "Phoenix tecnologia em Seguranca Eletronica",
            position: "Operador de Sistemas Eletrônicos",
            description: "Como Analista de Monitoramento e Suporte Técnico, minha função envolvia monitorar os sinais de alarme e o sistema de CFTV dos clientes, instruir os usuários sobre a utilização desses sistemas, manter o cadastro atualizado e solicitar manutenção técnica quando necessário. Minha abordagem proativa garantia a segurança e satisfação dos clientes.",
            startDate: new Date(),
            endDate: new Date(),
        },
        {
            icon: <MdCurrencyExchange size={50} />,
            company: "Phoenix tecnologia em Seguranca Eletronica",
            position: "Analista de suporte técnico",
            description: "Realização de manutenção preventiva e corretiva em hardware e infraestrutura, instação e configuro impressoras, scanners, servidores, webcams, roteadores e outros periféricos, instalação de sistemas operacionais e software, suporte técnico a clientes e equipes externas, monitoramento da infraestrutura de rede",
            startDate: new Date(),
            endDate: new Date(),
        },
        {
            icon: <MdCurrencyExchange size={50} />,
            company: "Phoenix tecnologia em Seguranca Eletronica",
            position: "Operador de Sistemas Eletrônicos",
            description: "Como Analista de Monitoramento e Suporte Técnico, minha função envolvia monitorar os sinais de alarme e o sistema de CFTV dos clientes, instruir os usuários sobre a utilização desses sistemas, manter o cadastro atualizado e solicitar manutenção técnica quando necessário. Minha abordagem proativa garantia a segurança e satisfação dos clientes.",
            startDate: new Date(),
            endDate: new Date(),
        },
        {
            icon: <MdCurrencyExchange size={50} />,
            company: "Comercial MDM",
            position: "Encarregado Fiscal de Caixa",
            description: "O profissional é responsável por controlar e distribuir o fundo de reserva usado para abastecer os caixas e fornecer troco durante as operações de compra dos clientes. Além disso, ele realiza a retirada de valores dos caixas (conhecida como “sangria”), gerencia a equipe e também lida com estornos de valores e cancelamentos de compras. Em resumo, é um papel multifacetado que exige habilidades tanto operacionais quanto de gestão.",
            startDate: new Date(),
            endDate: new Date(),
        },

        {
            icon: <MdCurrencyExchange size={50} />,
            company: "Comercial MDM",
            position: "Assistente de Fiscal de Caixa",
            description: "O papel de auxiliar do Encarregado Fiscal de Caixa envolve diversas responsabilidades. O auxiliar atende aos clientes, ajuda no fornecimento de troco e na retirada de valores dos caixas (a famosa “sangria”), colabora no gerenciamento da equipe e também participa do fechamento dos caixas. É um trabalho que requer versatilidade e habilidades tanto operacionais quanto de apoio à gestão",
            startDate: new Date(),
            endDate: new Date(),
        },
        {
            icon: <MdCurrencyExchange size={50} />,
            company: "Comercial MDM",
            position: "Operador de Caixa",
            description: "O papel de auxiliar do Encarregado Fiscal de Caixa envolve diversas responsabilidades. O auxiliar atende aos clientes, ajuda no fornecimento de troco e na retirada de valores dos caixas (a famosa “sangria”), colabora no gerenciamento da equipe e também participa do fechamento dos caixas. É um trabalho que requer versatilidade e habilidades tanto operacionais quanto de apoio à gestão",
            startDate: new Date(),
            endDate: new Date(),
        },
        {
            icon: <MdCurrencyExchange size={50} />,
            company: "Comercial MDM",
            position: "Embalador de Mercadorias",
            description: "responsável por garantir que os produtos adquiridos pelos clientes sejam embalados de forma adequada e eficiente",
            startDate: new Date(),
            endDate: new Date(),
        },



    ]
    return (
        <section className="container flex flex-col items-center mt-10">
            <div>
                <span className="section-sub-title">../Experiences</span>
                <h2 className="section-title text-center">Experiências Profissionais</h2>
                <p className="container text-gray-400 text-center mt-4 text-sm">
                    Busco constantemente a melhoria contínua e o desenvolvimento pessoal e
                    profissional. Estou sempre em busca de oportunidades de aprendizado e
                    crescimento
                </p>
            </div>
            <div className="flex flex-col gap-10">

                {PROFESSION_EXPERIENCE_ITEMS.map(({ icon, company, position, description, startDate, endDate }, index) => (
                    <ExperienceItem icon={icon}
                        company={company}
                        position={position}
                        description={description}
                        startDate={startDate}
                        endDate={startDate}
                        key={index} />
                ))}


            </div>
        </section>
    )
}
