import { useReducer,useEffect, memo } from 'react'
import todoReducer from './todoReducer';
import useForm from '../../hooks/useForm';
import './estilos/estilos.css';
import TableTodos from './TableTodos';

const init = () =>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}

const ReducerTodo = () => {
    const [todos,dispatch] = useReducer(todoReducer,[],init);
    const [{description},handleInputChange,reset] = useForm({description:''});

    const handleAddTodo = (e) =>{
        e.preventDefault();
        if(description.trim().length <2) return;
        const newTodo = {id:Date.now(),desc:description,done:false};
        const action = {type:'add',payload:newTodo};
        dispatch(action);
        reset();
    }

    const handleDelete = (todoId)=>{
        const action = {type:'delete',payload:todoId};
        dispatch(action);
    }

    const handleClickDone = (todoId) => {
        const action = {type:'toggle',payload:todoId};
        dispatch(action);
    }

    useEffect(() => {
       localStorage.setItem("todos",JSON.stringify(todos));
    }, [todos])

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
                    <TableTodos todos={todos} handleDelete={handleDelete} handleClickDone={handleClickDone} />
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    )
}



export default ReducerTodo
