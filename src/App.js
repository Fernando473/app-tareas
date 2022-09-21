
import './App.css';
import freeCodeCampLogo from "./imagenes/freeCodeCampLogo.png" ;
import Tarea from './componentes/Tarea';

function App() {
  return (
    <div className="App">
      {/* Logo de freeCodeCamp */}
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={freeCodeCampLogo}
          className="freecodecamp-logo"
          alt="Logo de freeCodeCamp" 
          />          
      </div>

      <div className='tareas-lista-principal'>
        <h1> Mis tareas</h1>
        <Tarea texto="Aprender react"></Tarea>
      </div>
    </div>
  );
}

export default App;
