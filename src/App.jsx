import Resultado from "./components/resultado/Resultado";
import './App.modules.css';
import { useDispatch, useSelector } from 'react-redux';
import { setNome, setPeso, setAltura, setIdade } from './store/reducers/form';


function App() {
    const dispatch = useDispatch()
    const { nome, peso, altura, idade } = useSelector((state) => state.form)

    const handleSubmit = (e) => {
      e.preventDefault()
    }

    return (
      <>
      <div className='container'> 
          <header>
            <h1 className='h1'>Calculadora de IMC</h1>
          </header>
          <div className='body'>

            <div className="wrapper">
              <form onSubmit={handleSubmit}>
                <h2>Informações</h2>
                <div className="input-box">
                  <input onChange={(e) => dispatch(setNome(e.target.value))} type="text" placeholder='Nome' required />
                </div>
                <div className="input-box">
                  <input onChange={(e) => dispatch(setPeso(e.target.value))} type="text" inputMode='numeric' placeholder='Peso' required />
                </div>
                <div className="input-box">
                  <input onChange={(e) => dispatch(setIdade(e.target.value))} type="text" inputMode='numeric' placeholder='Idade' required />
                </div>
                <div className="input-box">
                  <input onChange={(e) => dispatch(setAltura(e.target.value))} type="text" inputMode='numeric' placeholder='Altura' required />
                </div>
                <Resultado nome={nome} altura={altura} idade={idade} peso={peso}></Resultado>
              </form>
            </div>

          </div>
      </div>
      </>
    )
    

}

export default App
