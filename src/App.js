
import { useEffect } from 'react';
import './App.css';
import AOS from "aos";
import 'aos/dist/aos.css';
import Header from './components/header.jsx';
import Cursos from './containers/cursos.jsx';
import Inicio from './containers/inicio.jsx';
import Sobre from './containers/sobre.jsx';
import Tecnologias from './containers/tecnologias.jsx';
import Projetos from './containers/projetos.jsx';
import Experiencia from './containers/experiencia.jsx';
import Faixa from './components/faixa.jsx';


function App() {

    useEffect(() =>{
        AOS.init({duration:1300})
    },[])

    return (
        <div>
            <Header/>
            <main>
                <Inicio/>
                <Faixa 
                    msg="Na jornada do desenvolvimento, cada linha de código é uma expressão de possibilidades infinitas, onde a lógica encontra a arte e a inovação é tecida nos detalhes."
                />
                <Sobre/>
                <Faixa
                    msg="Desvende o extraordinário nas linhas de código. Neste reino digital, a complexidade se transforma em simplicidade, e cada algoritmo conta uma história única. Bem-vindo à tela em branco, onde a magia da programação se revela."
                />
                <Tecnologias/>
                <Faixa 
                    msg="Na tessitura do código, somos artífices da realidade digital. Como Platão esculpindo ideias nas cavernas da programação, moldamos o mundo com lógica e criatividade, revelando a verdade intrínseca do universo binário."
                />
                <Cursos/>
                <Faixa
                    msg="Explorando o código-fonte do possível, moldamos o futuro digital com criatividade e engenhosidade. Em cada algoritmo, descobrimos a arte da transformação"
                />
                <Projetos/>
                <Faixa
                    msg="Em cada linha de código, escrevemos não apenas instruções para a máquina, mas também a narrativa de nosso próprio esforço e perseverança, transformando desafios em soluções e sonhos em realidade."
                />
                <Experiencia/>
            </main>
        </div>
        
    );
}

export default App;
