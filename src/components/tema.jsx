import {  useState } from 'react';
import '../styles/tema.css'
import { FaSun, FaRegMoon } from 'react-icons/fa';


const Tema = () => {
    const [tema, setTema] = useState('claro');

    const ativarTemaClaro = () => {
        document.querySelector("body").setAttribute('data-theme','claro');
    }

    const ativarTemaEscuro = () => {
        document.querySelector("body").setAttribute('data-theme','escuro');
    }

    const ativarTema = () =>{
        if (tema === 'claro') {
            setTema('escuro');
            ativarTemaEscuro();
        } else {
            setTema('claro');
            ativarTemaClaro();
        }
    }

    return (
        <label className='botao-tema'>
            <input type="checkbox" onChange={ativarTema} />
            <span className='alternar'></span>
            <FaRegMoon className='lua'></FaRegMoon>
            <FaSun className='sol'></FaSun>
        </label>
    );
}

export default Tema;