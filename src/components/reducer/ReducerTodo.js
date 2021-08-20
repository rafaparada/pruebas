import { useReducer } from 'react'
import todoReducer from './todoReducer';
import useForm from '../../hooks/useForm';
const initialState = [{
    id:Date.now(),
    desc:'Comprar pan',
    done:false
}];

const ReducerTodo = () => {
    const [todos,dispatch] = useReducer(todoReducer,initialState);
    const [{description},handleInputChange] = useForm({description:''});
    const handleAddTodo = (e) =>{
        e.preventDefault();
        const newTodo = {id:Date.now(),desc:description,done:false};
        const action = {type:'add',payload:newTodo};
        dispatch(action);
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <h4>TODO LIST CON REDUCER ({todos.length})</h4>
                    <hr/>
                    <form onSubmit={handleAddTodo}>
                        <input value={description} name="description" type="text" onChange={handleInputChange} className="form-control" placeholder="Tarea por hacer" />
                        <button className="btn btn-outline-primary mt-3">Crear</button>
                    </form>
                    <hr/>
                    <table className="table table-dark table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>TAREA</th>
                                <th>ACCION</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            todos.map((todo,i)=>(
                                <tr key={todo.id}><td>{i+1}</td><td>{todo.desc}</td><td><button type="submit" className="btn btn-danger">Borrar</button></td></tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    )
}

export default ReducerTodo
