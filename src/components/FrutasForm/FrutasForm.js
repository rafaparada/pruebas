import SuccessAlert from "../SuccessAlert";
import useFrutasForm from "../../hooks/useFrutasForm"
import TablaFrutas from "./TablaFrutas";
const FrutasForm = () => {
    const [frutas,handleInput,submitForm,successRequest,fetchFrutas,deleteFruit] = useFrutasForm();
    return (
        <div className="container mt-5">
            {successRequest ? <SuccessAlert />:''}
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6 mt-3">
                    <h5>FRUTAS FORM</h5>
                    <hr />
                    <form onSubmit={submitForm}>
                    Nombre fruta:
                    <input type="text" id="nombre" value={frutas.nombre} onChange={handleInput} className="form-control" />
                    Color:
                    <input type="text" id="color" value={frutas.color} onChange={handleInput} className="form-control" />
                    Precio:
                    <input type="text" id="precio" value={frutas.precio} onChange={handleInput} className="form-control" />
                    <button className="btn btn-primary mt-3">Agregar</button>
                    </form>
                    <hr />
                    <TablaFrutas fetchFrutas={fetchFrutas} deleteFruit={deleteFruit} />
                   
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    )
}

export default FrutasForm
