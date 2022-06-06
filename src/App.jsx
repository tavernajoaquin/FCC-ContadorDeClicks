import freeCodeCampLogo from "../src/imagenes/freecodecamp-logo.png"
import './App.css';
import {Boton} from "../src/components/Boton";
import {Contador} from "../src/components/Contador";
import { useState } from 'react'; //importar useState para usarlo

function App() {
  //cada estado va a manejar un valor (numClicks)
  // y una funcion que lo va a cambiar(setNumClicks)
  const [numClicks, setNumClicks] = useState(0) ; //useState(0) indica que el valor empieza en 0

  const manejarClick = () => {
    //setNumClicks(numClicks++) no funciona
    setNumClicks(numClicks + 1);
  };

  const reiniciarClick = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img className='freecodecamp-logo' src={freeCodeCampLogo} alt="Logo de FCC" />
      </div>
      <div className="contenedor-principal">
        <Contador 
          numClicks={numClicks}
        />
        <Boton 
          className='boton-click'
          texto='Click'
          esBotonDeClick={true}
          manejarClick={manejarClick}
        />
        <Boton 
          className='boton-reiniciar'
          texto='Reiniciar'
          esBotonDeClick={false}
          manejarClick={reiniciarClick}
        />
      </div>
    </div>
  );
}

export default App;
