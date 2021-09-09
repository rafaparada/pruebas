import { useCrudReducer } from "./useCrudReducer";
const CrudReducer = () =>{
    const [persona,personas,handleInput,handleSubmit,prepararEdit,editOn,handleCancel,handleDelete,myInputRef] = useCrudReducer();
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <h3>REGISTRO DE PERSONAS</h3>
                    <hr/>
                    <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Nombres:</label>
                    <input type="text" ref={myInputRef} className="form-control" value={persona.nombres} onChange={handleInput} name="nombres" id="name" />
                    <label htmlFor="name">Apellidos:</label>
                    <input type="text" className="form-control" value={persona.apellidos} onChange={handleInput} name="apellidos" id="apellidos" />
                    <label htmlFor="name">Télefono:</label>
                    <input type="text" className="form-control" value={persona.telefono} onChange={handleInput} name="telefono" id="telefono" />
                        <button  type="submit" className="btn btn-primary mt-2">{!editOn ? 'Registrar':'Guardar Cambios'}</button>
                        {editOn && <button type="button" className="btn btn-danger ms-4 mt-2" onClick={()=>handleCancel()}>Cancelar</button>}
                    </form>
                    <hr />
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>NOMBRES</th>
                                <th>APELLIDOS</th>
                                <th>TELEFONO</th>
                                <th>ACCIONES</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                personas.map(p=>(
                                    <tr key={p.id}>
                                        <td>{p.nombres}</td>
                                        <td>{p.apellidos}</td>
                                        <td>{p.telefono}</td>
                                        <td className="text-center"><button className="btn btn-primary btn-sm" onClick={()=>prepararEdit(p)}>Editar</button><button onClick={()=>handleDelete(p.id)} className="btn btn-danger ms-3 btn-sm">Borrar</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    );
}

export default CrudReducer;