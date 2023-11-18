import '../styles/header.css';
import React, { useState } from "react";
import Tema from './tema';
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {

    const [alternar, setAlternar] = useState(false);
    const [navegacao, setNavegacao] = useState('navegacao');

    const mostrarNavegacaoMobile = () => {
        if (alternar === false) {
            setAlternar(true);
            setNavegacao('navegacao ativo');
        } else {
            setAlternar(false);
            setNavegacao('navegacao');
        }
    }
    return (
        <header className="caixa-barra-navegacao">
            <div className="logo">
                <h1><span>&lt; </span>GV<span> /&gt;</span></h1>
            </div>
            <div className="botao-mobile">
                {
                    alternar === false?(
                        <FaBars onClick={mostrarNavegacaoMobile}/>
                    ):
                    (
                        <FaTimes onClick={mostrarNavegacaoMobile}/>
                    )
                }
            </div>
            <div className={navegacao}>
                <div className='links'>
                    <a href="#inicio">Inicio</a>
                    <a href="#sobre">Sobre</a>
                    <a href="#tecnologias">Técnologias</a>
                    <a href="#cursos">Cursos</a>
                    <a href="#projetos">Projetos</a>
                    <a href="#experiencia">Experiências</a>
               </div>
                <div className="tema">
                    <Tema/>
                </div>
            </div>
        </header>
    )
}

export default Header