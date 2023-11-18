import React from "react";
import CartaoProjeto from "../components/cartaoProjeto";
import '../styles/projetos.css'

import reactLogo from '../assets/tecnologias/react-logo.png';
import nodeJsLogo from '../assets/tecnologias/node-logo.png';
import mongoDbLogo from '../assets/tecnologias/mongo-logo.png';
import expressLogo from '../assets/tecnologias/expressjs_logo.png';
import socketLogo from '../assets/tecnologias/socketio-logo.png';
import figmaLogo from '../assets/tecnologias/figma-logo.png';

import MobileCadastro from '../assets/projetos/chat-tempo-real-fotos/mobile-cadastro.jpeg';
import MobileLogin from '../assets/projetos/chat-tempo-real-fotos/mobile-login.jpeg';
import MobileChatInicio from '../assets/projetos/chat-tempo-real-fotos/mobile-chat-inicio.png';
import MobileChatPessoa from '../assets/projetos/chat-tempo-real-fotos/mobile-chat-pessoa.png';
import PcCadastro from '../assets/projetos/chat-tempo-real-fotos/pc-cadastro.jpeg';
import PcLogin from '../assets/projetos/chat-tempo-real-fotos/pc-login.jpeg';
import PcChat from '../assets/projetos/chat-tempo-real-fotos/pc-chat-inicio.png';
import PcChatPessoa from '../assets/projetos/chat-tempo-real-fotos/pc-chat-pessoa.png';

import ToDoLogin from '../assets/projetos/to-do/login.png';
import ToDoCadastro from '../assets/projetos/to-do/cadastro.png';
import ToDoTarefas from '../assets/projetos/to-do/home.png';

import VavaLogin from '../assets/projetos/valorant/login.png';
import VavaCadastro from '../assets/projetos/valorant/cadastro.png';
import VavaSobre from '../assets/projetos/valorant/sobre.png';
import VavaHome from '../assets/projetos/valorant/inicio.png';
import VavaAgentes from '../assets/projetos/valorant/agentes.png';
import VavaNoticias from '../assets/projetos/valorant/noticias.png';

const Projetos = () => {

    const projetos = [
        {
            fotos:[
                MobileCadastro,
                PcCadastro,
                MobileChatInicio,
                PcChat,
                MobileLogin,
                PcLogin,
                MobileChatPessoa,
                PcChatPessoa,
            ],
            descricao:"O website oferece um sistema completo para criação de contas de usuário, login seguro e comunicação por mensagens entre eles. Ele é totalmente responsivo e utiliza tecnologias de ponta.",
            repositorioBack:"https://github.com/GustaVasconcelos/CHAT-TEMPO-REAL",
            tecnologias: [
                {
                    nome:"React Js",
                    img:reactLogo
                },
                {
                    nome:"Node Js", 
                    img:nodeJsLogo
                },
                {
                    nome:"Express Js", 
                    img:expressLogo
                },
                {
                    nome:"MongoDb", 
                    img:mongoDbLogo
                },
                {
                    nome:"Websocket.io",
                    img:socketLogo
                }
            ]
        },
        {
            fotos: [
                ToDoLogin,
                ToDoCadastro,
                ToDoTarefas
            ],
            descricao:"Meu primeiro projeto envolvendo o desenvolvimento de uma lista de tarefas foi um sistema que me introduziu ao mundo do back-end. O que representou um grande avanço no meu conhecimento na época. Hoje, tenho potencial de criar algo ainda melhor.",
            repositorioBack:"https://github.com/GustaVasconcelos/savetask-api",
            repositorioFront:"https://github.com/GustaVasconcelos/SAVETASK-FRONT-REACTJS",
            site:"https://savetask-front-reactjs.vercel.app/",
            tecnologias: [
                {
                    nome:"React Js",
                    img:reactLogo
                },
                {
                    nome:"Node Js", 
                    img:nodeJsLogo
                },
                {
                    nome:"Express Js", 
                    img:expressLogo
                },
                {
                    nome:"MongoDb", 
                    img:mongoDbLogo
                },
            ]
        },
        {
            fotos: [
                VavaLogin,
                VavaCadastro,
                VavaHome,
                VavaSobre,
                VavaAgentes,
                VavaNoticias
            ],
            descricao:"Website (Apenas front-end) dedicado ao jogo Valorant, oferecendo informações sobre seu funcionamento, agentes disponíveis e as últimas notícias.",
            repositorioFront:"https://github.com/GustaVasconcelos/valorant-reactjs",
            site:"https://valorant-reactjs-blond.vercel.app/home",
            tecnologias:[
                {
                    nome:"React Js",
                    img:reactLogo
                },
                {
                    nome:"Figma",
                    img: figmaLogo
                }
            ]
        }
    ]
    return (
        <div id="projetos">
            <div className="titulo">
                <h1 data-aos="fade-down">Meus Projetos</h1>
            </div>
            <div className="caixa-cartoes">
                {
                    projetos.map((item,index) => (
                        <CartaoProjeto key={index} index={index} fotos={item.fotos} descricao={item.descricao} tecnologias={item.tecnologias} repositorioBack={item.repositorioBack} repositorioFront={item.repositorioFront} site={item.site}/>
                    ))
                }
            </div>
        </div>
    );
}

export default Projetos;