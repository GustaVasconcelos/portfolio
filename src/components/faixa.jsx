import React from "react";
import '../styles/faixa.css';

const Faixa = ({msg}) => {
    return (
        <div className="faixa" data-aos="fade-left">
            <h2>{msg}</h2>
        </div>
    )
}

export default Faixa;