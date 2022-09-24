
import './App.css';
import freeCodeCampLogo from "./imagenes/freeCodeCampLogo.png" ;
import ListaDeTareas from './componentes/ListaDeTareas';


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
        <ListaDeTareas/>
      </div>
    </div>
  );
}

export default App;
