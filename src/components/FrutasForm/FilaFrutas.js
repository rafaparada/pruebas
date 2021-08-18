const FilaFrutas = ({fruit,deleteFruit}) =>{
    return(
        <tr><td>{fruit.nombre}</td><td>{fruit.color}</td><td>{fruit.precio}</td><td><button onClick={()=>deleteFruit(fruit.id)} className="btn btn-danger"><i className="fas fa-trash"></i></button></td></tr>
    );
}

export default FilaFrutas;