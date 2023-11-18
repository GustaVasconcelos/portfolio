import React from "react";
import '../styles/experiencia.css';
import trabalho from '../assets/experiencias/trabalho.svg';

import htmlIcone from '../assets/tecnologias/html-logo.png';
import cssIcone from '../assets/tecnologias/css-logo.png';
import phpIcone from '../assets/tecnologias/php-logo.png';
import jsIcone from '../assets/tecnologias/javascript-icone.svg';
import jqueryIcone from '../assets/tecnologias/jquery-logo.png'
import laravelIcone from '../assets/tecnologias/laravel-logo.png';
import mySqlIcone from '../assets/tecnologias/mysql-logo.png';
import gitIcone from '../assets/tecnologias/git-logo.png';
import gitHubIcone from '../assets/tecnologias/github-logo.png';

const Experiencia = () => {
    const tecnologias = [
        {
            nome:"Php",
            img:phpIcone
        },
        {
            nome:"Laravel",
            img:laravelIcone
        },
        {
            nome:"Html",
            img:htmlIcone
        },
        {
            nome:"Css",
            img:cssIcone
        },
        {
            nome:"JavaScript",
            img:jsIcone
        },
        {
            nome:"Jquery",
            img:jqueryIcone
        },
        {
            nome:"MySql",
            img:mySqlIcone
        },
        {
            nome:"Git",
            img:gitIcone
        },
        {
            nome:"GitHub",
            img:gitHubIcone
        }

        
    ]

    return (
        <div id="experiencia">
            <div className="titulo">
                <h1>Minhas Experiências</h1>
            </div>
            <div className="caixa-items">
                <div className="caixa-cartoes">
                    <div className="caixa-cartoes-items">
                        <h3><span>Tabula - Desenvolvedor Full Stack</span> <span> 10 / 2023 - Atual</span></h3>
                        <h4>Home office - São Paulo</h4>
                        <p>
                            Desenvolvedor full stack, responsável pela manutenção do site e
                            implementação de novas funcionalidades. Foco na otimização de
                            desempenho, adoção de melhores práticas e colaboração com equipes
                            de design e produto para garantir soluções inovadoras alinhadas com as
                            necessidades dos usuários.
                        </p>
                        <h4>Tecnologias: </h4>
                        <div className="experiencia-tecnologias">
                        {
                            tecnologias &&  
                            tecnologias.map((item,index) => (
                                <div className="experiencia-tecnologias-imagem-caixa" key={index}>
                                    <img src={item.img} alt="Tecnologias" />
                                    <div className="experiencia-tecnologia-nome">
                                        <p>
                                            {item.nome}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                </div>
                <div className="caixa-img">
                    <img src={trabalho} alt="Imagem trabalho" />
                </div>
            </div>
            <div className="experiencia-enfeite">
            </div>
        </div>
    )
}

export default Experiencia;