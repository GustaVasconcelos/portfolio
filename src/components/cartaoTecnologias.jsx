import React from "react";
import '../styles/cartaoTecnologias.css';

const CartaoTecnologia = ({img, nome}) => {
    return (
        <div className="caixa-cartao-tecnologias" data-aos="fade-down">
            <div className="cartao-tecnologias-img">
                <img src={img} alt={nome} />
            </div>
            <div className="cartao-tecnologias-nome">
                <h4>{nome}</h4>
            </div>
        </div>
    )
}

export default CartaoTecnologia;