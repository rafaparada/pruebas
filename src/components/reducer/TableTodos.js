import TrTableTodos from "./TrTableTodos";
const TableTodos = ({todos,handleClickDone,handleDelete}) => {
    return (
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
                    <TrTableTodos key={todo.id} todo={todo} handleClickDone={handleClickDone} handleDelete={handleDelete} i={i} />
                ))
            }
        </tbody>
        </table>
    )
}

export default TableTodos
