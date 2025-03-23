import './Resultado.modules.css'

const Resultado = ({nome, altura, idade, peso, click}) => {
    const alturaEmMetros = altura/100;
    const imc = peso/(alturaEmMetros**2)
    let display;
    click ? display = 'flex' : display = 'none';
    return (
        <div className='popup' style={{display: display}}>
            <div className="texto">
                <h1>Resultado: </h1>
                <h4>{nome}, você tem {altura}M, {idade} anos, {peso}KG.</h4>
                <h4>Seu IMC atualmente é de: {imc}</h4>
                <button type='reset'>Fechar</button>
            </div>
        </div>
    )
}

export default Resultado;