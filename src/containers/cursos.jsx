    import React from "react";
    import '../styles/cursos.css';
    import CartaoCurso from "../components/cartaoCurso";
    import arquiteturaLimpaCertificado from '../assets/cursos/certificado-arquitetura-limpa.jpg';
    import codigoLimpoCertificado from '../assets/cursos/certificado-clean-code.jpg';
    import reactCertificado from '../assets/cursos/certificado-react.jpg';
    import gitGithubCertificado from '../assets/cursos/certificado-git-github.jpg';
    import laravelDockerCertificado from '../assets/cursos/certificado-laravel-docker.jpg';
    import nodejsCertificado from '../assets/cursos/certificado-nodejs.png';
    import javaScriptCertificado from '../assets/cursos/certificado-js.png';

    const Cursos = () => {
        const cursos = [
            {
                img:arquiteturaLimpaCertificado,
                nome:"Domine a Arquitetura Limpa e Hexagonal",
                descricao:"Assimilei conceitos vitais para o desenvolvimento de software, destacando a importância de uma estrutura sólida. Isso aprimorou minha compreensão sobre a essencialidade da arquitetura em projetos de software bem-sucedidos.",
                link:"https://www.udemy.com/certificate/UC-d5da05c0-f062-4519-ae67-9f0a52024d65/"
            },
            {
                img:codigoLimpoCertificado,
                nome:"Clean Code na Prática(Código Limpo) ",
                descricao:"Absorvi princípios essenciais para uma codificação eficiente, com foco na clareza e organização. Isso fortaleceu minha compreensão sobre a importância vital de um código de qualidade para o sucesso de projetos.",
                link:"https://www.udemy.com/certificate/UC-08a2d31c-d8a3-4046-a7ca-d1d88bc48b03/"
            },
            {
                img:reactCertificado,
                nome:"React + Redux: Fundamentos",
                descricao:"Aprimorei habilidades em React para interfaces interativas e Redux para gerenciamento global de estado, fortalecendo minha capacidade de criar aplicações web dinâmicas e excepcionais.",
                link:"https://www.udemy.com/certificate/UC-cca90d6e-89d7-437e-bd30-b74fbf72da3d/"
            },
            {
                img:gitGithubCertificado,
                nome:"Git e GitHub do básico ao avançado",
                descricao:"Aprimorei habilidades essenciais para o versionamento de código e colaboração eficiente em projetos. Essa experiência fortaleceu minha capacidade de trabalhar de maneira colaborativa e eficaz, fundamental para projetos em equipe.",
                link:"https://www.udemy.com/certificate/UC-1a40fd38-412f-4289-aaea-c44f3ce62e02/"
            },
            {
                img:laravelDockerCertificado,
                nome:"Laravel do zero ao Deploy com Docker",
                descricao:"Aprendi a criar e implantar eficientemente aplicações Laravel. Essa experiência solidificou minha capacidade de trabalhar com o framework e orquestrar ambientes de desenvolvimento e produção usando Docker.",
                link:"https://www.udemy.com/certificate/UC-d2f6a79f-4cf8-486f-9d2a-1e39c26324fb/"
            },
            {
                img:nodejsCertificado,
                nome:"Node Js",
                descricao:"Aprimorei minhas habilidades na construção eficiente de aplicativos JavaScript do lado do servidor. Essa experiência fortaleceu minha capacidade de criar APIs robustas e aplicações escaláveis com a plataforma Node.js.",
                link:"https://cursos.dankicode.com/api/certificados/9e1fd9e5-9cad-4f98-8765-ea85d99d95bc"
            },
            {
                img:javaScriptCertificado,
                nome:"JavaScript",
                descricao:"Explorei desde os fundamentos até conceitos avançados para desenvolvimento web. Adquiri habilidades na criação de funcionalidades dinâmicas para websites, consolidando minha compreensão dessa linguagem versátil e essencial.",
                link:"https://cursos.dankicode.com/api/certificados/5db4c650-b22a-4b02-a5a3-ed0ab488dee8"
            },
            
        ]
        return (
            <div id="cursos">
                <div className="titulo">
                    <h1 data-aos="fade-down">Cursos & Certificados</h1>
                </div>
                <div className="caixa-cartoes">
                    {
                        cursos.map((curso,index) => (
                            <CartaoCurso 
                                key={index}
                                index={index}
                                img={curso.img} 
                                nome={curso.nome}
                                descricao={curso.descricao}
                                link={curso.link}
                            />
                        ))
                    }

                </div>
            </div>
        )
    }

    export default Cursos