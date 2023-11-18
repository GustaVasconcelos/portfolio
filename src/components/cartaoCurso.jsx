import React from "react";
import '../styles/cartaoCurso.css'

const CartaoCurso = ({index, img, nome, descricao, link}) => {
    return (
        <div className="caixa-cartao-curso" data-aos="fade-down" key={index}>
            <div className="cartao-imagem">
                <img src={img} alt={nome} />
            </div>
            <div className="cartao-nome-curso">
                <h4>{nome}</h4>
            </div>
            <div className="cartao-descricao-curso">
                <p>{descricao}</p>
            </div>
            <div className="cartao-link-certificado-curso">
                <a href={link} target='_blank' rel="noreferrer">Ver Certificado</a>
            </div>
        </div>
    )
}

export default CartaoCurso;