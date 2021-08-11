import React,{useState} from 'react'

const TareasTabla = ({misTareas}) => {
    const [myTodos,setMyTodos]=useState(misTareas);
    
    const handleSetState = e =>{
        const status       = e.target.checked;
        const id           = e.target.getAttribute("data-id");
       // const newTarea     = [...misTareas];
        const objIndex     = misTareas.findIndex((obj => obj.id == id));
        misTareas[objIndex].completada = status;
        setMyTodos((prevTodo)=>{
            return [...misTareas];
        } );
    }
    const handleEliminar = id =>{
        const removeIndex = misTareas.findIndex( item => item.id === id );
        misTareas.splice( removeIndex, 1 );
        setMyTodos((prevTodo)=>{
            return [...prevTodo,misTareas];
        } );
    }

    return (
        <div>
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th>TAREA</th>
                        <th>RESPONSABLE</th>
                        <th>COMPLETADA</th>
                        <th>ACCIONES</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        misTareas.map((t)=>(
                            <tr key={t.id}>
                            <td>{t.tarea}</td>
                            <td>{t.responsable}</td>
                            <td className="text-center">< input type="checkbox" data-id={t.id} onChange={handleSetState}/></td>
                            <td className="text-center"><button className="btn btn-primary btn-sm" onClick={()=>handleEliminar(t.id)}>Eliminar</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TareasTabla
