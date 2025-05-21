import { useState } from 'react';
import { useSelector } from 'react-redux';

import './Resultado.modules.css'


const Resultado = () => {
    const { nome, peso, idade, altura } = useSelector((state) => state.form)



    const alturaEmMetros = (altura/100);
    const [clique, setClique] = useState(false);
    const imc = peso/(alturaEmMetros**2);
    let display;
    clique ? display = 'flex' : display = 'none';
        return (         
        <div>
            <button onClick={(e) => e.preventDefault(setClique(true))} className='wrapper, button' type='submit'>Enviar</button>       
            <div className='popup' style={{display: display}}>
                <div className="texto">
                    <h1>Resultado: </h1>
                    <h4>{nome}, você tem {alturaEmMetros}M, {idade} anos, {peso}KG.</h4>
                    <h4>Seu IMC atualmente é de: {imc.toFixed(2)}</h4>
                    <button onClick={(e) => e.preventDefault(setClique(false))} type='reset'>Fechar</button>
                </div>
            </div>
        </div>
    )
}

export default Resultado;