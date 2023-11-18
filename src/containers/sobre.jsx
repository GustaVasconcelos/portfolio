import React from "react";
import '../styles/sobre.css';

import dev from '../assets/sobre/dev.svg';

const Sobre = () => {

    return (
        <div id="sobre">
            <div className="sobre-enfeite"></div>
            <div className="sobre-caixa-imagem" data-aos="fade-right">
                <img src={dev} alt="Desenvolvedor" />
            </div>
            <div className="sobre-caixa-texto">
                <h1 data-aos="fade-left"><span>Sobre mim</span></h1>
                <p data-aos="fade-left">
                    Sou formado como Técnico de Informática pelo IFCE Maranguape e atualmente estou imerso no curso de Análise e Desenvolvimento na Estácio. Minha paixão pela programação começou em 2020, um verdadeiro amor à primeira vista. Iniciei minha jornada com Python, focando em lógica, e posteriormente mergulhei no fascinante mundo da web, explorando HTML, CSS e JavaScript.
                </p>
                <p data-aos="fade-left">
                    Atualmente, meu compromisso é aprimorar minhas habilidades continuamente, buscando incessantemente por conhecimento e abraçando desafios para aprender novas tecnologias.
                </p>
                <h1 data-aos="fade-left"><span>Educação</span></h1>
                <div className="educacao-caixa">
                    <p data-aos="fade-left">Técnico de Informática / IFCE / 2020 - 2023</p>
                    <p data-aos="fade-left">Análise e Desenvolvimento de Sistemas/ Estácio / 2023 - Cursando</p>
                </div>
            </div>
        </div>
    );
}

export default Sobre;