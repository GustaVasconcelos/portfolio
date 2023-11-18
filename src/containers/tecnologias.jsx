import React from "react";
import '../styles/tecnologias.css'
import CartaoTecnologia from "../components/cartaoTecnologias";
import htmlIcone from '../assets/tecnologias/html-logo.png';
import cssIcone from '../assets/tecnologias/css-logo.png';
import phpIcone from '../assets/tecnologias/php-logo.png';
import jsIcone from '../assets/tecnologias/javascript-icone.svg';
import pythonIcone from '../assets/tecnologias/python-logo.png';
import laravelIcone from '../assets/tecnologias/laravel-logo.png';
import nodeIcone from '../assets/tecnologias/node-logo.png';
import expressIcone from '../assets/tecnologias/expressjs_logo.png';
import nestJsIcone from '../assets/tecnologias/nestjs-logo.png';
import reactJsIcone from '../assets/tecnologias/react-logo.png';
import mongoDbIcone from '../assets/tecnologias/mongo-logo.png';
import mySqlIcone from '../assets/tecnologias/mysql-logo.png';
import psqlIcone from '../assets/tecnologias/psql-logo.png';
import gitIcone from '../assets/tecnologias/git-logo.png';
import gitHubIcone from '../assets/tecnologias/github-logo.png';

const Tecnologias = () => {
    const cartoes = [
        {
            img: htmlIcone,
            nome: 'Html'
        },
        {
            img: cssIcone,
            nome: 'Css'
        },
        {
            img: jsIcone,
            nome: 'JavaScript'
        },
        {
            img: pythonIcone,
            nome: 'Python'
        },
        {
            img: phpIcone,
            nome: 'Php'
        },
        {
            img: laravelIcone,
            nome: 'Laravel'
        },
        {
            img: nodeIcone,
            nome: 'NodeJs'
        },
        {
            img: expressIcone,
            nome: 'ExpressJs'
        },
        {
            img: nestJsIcone,
            nome: 'NestJs'
        },
        {
            img: reactJsIcone,
            nome: 'ReactJs'
        },
        {
            img: mongoDbIcone,
            nome: 'MongoDb'
        },
        {
            img: mySqlIcone,
            nome: 'MySql'
        },
        {
            img: psqlIcone,
            nome: 'Psql'
        },
        {
            img: gitIcone,
            nome: 'Git'
        },
        {
            img: gitHubIcone,
            nome: 'GitHub'
        }
    ]
    return (
        <div id="tecnologias">
            <div className="titulo">
                <h1 data-aos="fade-down">Minhas Técnologias</h1>
            </div>
            <div className="caixa-cartoes-tecnologias">
                {
                    cartoes.map((cartao, index) => (
                        <CartaoTecnologia key={index} img={cartao.img} nome={cartao.nome}/>
                    ))
                }

            </div>
        </div>
    )
}

export default Tecnologias;