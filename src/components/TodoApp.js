import React,{useState,useRef} from 'react'
import TareasTabla from './TareasTabla';
const TodoApp = () => {
    const [misTareas,setMyTarea] = useState([]);
    const tareaRef       = useRef();
    const responsableRef = useRef();
    const handleBtnAddTarea = () =>{
       const newtarea = {id:Date.now(),tarea:tareaRef.current.value,responsable:responsableRef.current.value,completada:false};
       setMyTarea((prevTodos)=>{
           return [...prevTodos,newtarea];
       });
    }
    return (
        <div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-12"> 
                                <h4>LISTA DE TAREAS</h4>
                                <hr />
                            </div>
                            <div className="col-12">
                                <label htmlFor="tarea">Tarea:</label>
                                <input type="text" ref={tareaRef} name="tarea" id="tarea" className="form-control"/>
                            </div>
                            <div className="col-12 mt-2">
                                <label htmlFor="responsable">Responsable:</label>
                                <select className="form-select" ref={responsableRef}>
                                    <option value="Rafa">Rafa</option>
                                    <option value="Juan">Juan</option>
                                    <option value="Rosa">Rosa</option>
                                    <option value="Pedro">Pedro</option>
                                </select>
                            </div>
                            <div className="col-12 text-right">
                                <button className="btn btn-primary mt-4" onClick={handleBtnAddTarea}>Agregar</button>
                            </div>
                            <div className="col-12"><hr /></div>
                            <TareasTabla misTareas={misTareas}/>
                        </div>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>
        </div>
    )
}

export default TodoApp
