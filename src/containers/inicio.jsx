import '../styles/inicio.css';
import { TypeAnimation } from 'react-type-animation';

import minhaImagem from '../assets/inicio/eu.jpg';
import gitHub from '../assets/tecnologias/github-logo.png'


const Inicio = () => {
    return (
        <div className="caixa-inicio" id='inicio'>
            <div className="inicio-enfeite"></div>
            <div className="caixa-inicio-items">
                <div className="inicio-caixa-texto">
                    <h1 data-aos="fade-right">
                        Olá, Me chamo gustavo. Sou
                        <br />
                        <span>
                            <TypeAnimation
                                sequence={[
                                    'Dev full stack',
                                    1000,
                                    'Téc de informática',
                                    1000,
                                    
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </span>
                    </h1>
                    <p data-aos="fade-right">
                        Aqui compartilho minha jornada e projetos, destacando minha paixão por criar soluções impactantes. Explore e descubra como estou moldando o mundo digital. Se compartilha ideias ou busca colaboração, 
                        Vamos criar algo extraordinário!
                    </p>
                    <div data-aos="fade-right" className="entre-em-contato">
                        <a href="https://www.linkedin.com/in/gustavovasconcelosp/" target='_blank' rel="noreferrer"> entre em contato. </a>
                        <a href="https://github.com/GustaVasconcelos" className='github-contato' target='_blank' rel="noreferrer"> <img src={gitHub} alt="GitHub"/></a>
                    </div>
                </div>
                <div className="inicio-caixa-imagem">
                    <div className="inicio-imagem">
                        <img src={minhaImagem} alt="Gustavo de Vasconcelos" className="minha-imagem" data-aos="fade-left"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inicio