import React, { useState } from "react";

import '../styles/cartaoProjeto.css'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const CartaoProjeto = ({index, fotos, descricao, repositorioFront, repositorioBack, site, tecnologias}) => {
    const [indiceFoto, setIndiceFoto] = useState(0);

    const proxFoto = () => {
        if (indiceFoto === fotos.length - 1) {
            setIndiceFoto(0);
        } else {
            setIndiceFoto(indiceFoto + 1);
        }
    }

    const voltarFoto = () => {
        if(indiceFoto === 0) {
            setIndiceFoto(fotos.length - 1);
        } else {
            setIndiceFoto(indiceFoto - 1);
        }
    }

    return (
        <div className="caixa-cartao-projeto" key={index} data-aos="fade-down">
            <div className="cartao-projeto-img">
            {
                    fotos &&
                        <>
                            <div className='caixa-imagem'>
                                <img src={fotos[indiceFoto]} alt='Projeto imagem'/>
                                <button className="botao anterior" onClick={voltarFoto}><FaAngleLeft/></button>
                                <button className="botao proximo" onClick={proxFoto}><FaAngleRight/></button>
                            </div>
                        </>
                }
            </div>
            <div className="cartao-projeto-descricao">
                <div className="cartao-projeto-descricao-texto">
                    <p>{descricao}</p>
                </div>
                <div className="cartao-projeto-descricao-tecnologias">
                    {
                        tecnologias &&  
                        tecnologias.map((item,index) => (
                            <div className="tecnologias-imagem-caixa" key={index}>
                                <img src={item.img} alt="Tecnologias" />
                                <div className="tecnologia-nome">
                                    <p>
                                        {item.nome}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="cartao-projeto-descricao-links">
                    {
                        repositorioFront &&
                        <a href={repositorioFront} target='_blank' rel="noopener noreferrer">Repositorio Front-end</a>
                    }
                    {
                        repositorioBack &&
                        <a href={repositorioBack} target='_blank' rel="noopener noreferrer">Repositorio Back-end</a>
                    }
                    {
                        site &&
                        <a href={site} target='_blank' rel="noopener noreferrer">Site</a>
                    }
                </div>
            </div>
        </div>
    )
}

export default CartaoProjeto;