const TrTableTodos = ({todo,handleClickDone,handleDelete,i}) => {
    return (
        <tr key={todo.id}><td>{i+1}</td><td onClick={()=>handleClickDone(todo.id)} className={`hand ${todo.done && 'done'}`}>{todo.desc}</td><td><button onClick={()=>handleDelete(todo.id)} className="btn btn-danger">Borrar</button></td></tr>
    )
}

export default TrTableTodos
