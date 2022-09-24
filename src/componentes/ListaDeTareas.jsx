import React,{useState} from "react";
import Formulario from "./Formulario";
import Tarea from "./Tarea";
import "../estilos/ListaDeTareas.css"

const ListaDeTareas = () => {
    
    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea => {
        if (tarea.texto.trim()) {
          tarea.texto = tarea.texto.trim();
          const tareasActualizadas = [tarea, ...tareas];
          setTareas(tareasActualizadas);
        }
    }

    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
    }
    
    const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea => {
          if (tarea.id === id) {
            tarea.completada = !tarea.completada;
          }
          return tarea;
        });
        setTareas(tareasActualizadas);
    }
    

    return(
        <>{/* Se utiliza para enviar fragmentos  */}
            <Formulario onSubmit = {agregarTarea} />
            <div className="tareas-lista-contenedor">
                {/*  Renderizar una lista de componentes*/}
                { 
                    tareas.map((tarea) =>
                    <Tarea
                        key={tarea.id}
                        id={tarea.id}
                        texto = {tarea.texto}
                        completada={tarea.completada}
                        completarTarea={completarTarea}
                        eliminarTarea={eliminarTarea}
                    />
                    )
                }
            </div>
        </>
    );
}

export default ListaDeTareas