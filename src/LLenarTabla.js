import {useState} from 'react'
const datosIniciales = {dato1:'',dato2:'',dato3:'',dato4:''};
const LLenarTabla = () => {
    const [tabla,setTabla] = useState([]);
    const [datos,setDatos] = useState(datosIniciales);
    const handleInputs = e =>{
        const nuevoDato = {...datos};
        nuevoDato[e.target.name] = e.target.value;
        setDatos(nuevoDato);
    }
    const guardarDatos = e =>{
        e.preventDefault();
        const nuevoRegistro = [...tabla,datos];
        setTabla(nuevoRegistro);
    }
    return (
        <div>
            <form onSubmit={guardarDatos}>
            Dato 1: <input type="text" name="dato1" value={datos.dato1}onChange={handleInputs} />
            Dato 2: <input type="text" name="dato2" value={datos.dato2}onChange={handleInputs} />
            Dato 3: <input type="text" name="dato3" value={datos.dato3}onChange={handleInputs} />
            Dato 4: <input type="text" name="dato4" value={datos.dato4}onChange={handleInputs} />
            <br />
            <button type="submit">Guardar</button>
            </form>
            <hr/>
            <table>
                <thead>
                    <tr>
                        <th>DATO1</th>
                        <th>DATO2</th>
                        <th>DATO3</th>
                        <th>DATO4</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tabla.map((dato,index)=>(
                            <tr key={index}><td>{dato.dato1}</td><td>{dato.dato2}</td><td>{dato.dato3}</td><td>{dato.dato4}</td></tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default LLenarTabla
