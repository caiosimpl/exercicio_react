import { useState } from 'react';
import Resultado from "./components/resultado/Resultado";
import './App.modules.css';


function App() {
    const [nome, setNome] = useState(0);
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [idade, setIdade] = useState(0);
    const [clique, setClique] = useState(false);
    return (
      <>
      <div className='container'> 
          <header>
            <h1 className='h1'>Calculadora de IMC</h1>
          </header>
          <div className='body'>

            <div className="wrapper">
              <form onSubmit={(e) => e.preventDefault(setClique(true))}>
                <h2>Informações</h2>
                <div className="input-box">
                  <input onBlur={(e) => setNome(e.target.value)} type="text" placeholder='Nome' required />
                </div>
                <div className="input-box">
                  <input onBlur={(e) => setPeso(e.target.value)} type="number" placeholder='Peso' required />
                </div>
                <div className="input-box">
                  <input onBlur={(e) => setIdade(e.target.value)} type="number" placeholder='Idade' required />
                </div>
                <div className="input-box">
                  <input onBlur={(e) => setAltura(e.target.value)} type="number" placeholder='Altura' required />
                </div>
                <button className='button' type='submit'>Enviar</button>
              </form>
            </div>

          </div>
        <Resultado nome={nome} altura={altura} idade={idade} peso={peso} click={clique}></Resultado>
      </div>
      </>
    )
    

}

export default App
