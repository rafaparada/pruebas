import '../styles/estilos.css';
const SuccessAlert = () => {
    return (
        <div className="alert alert-success alert-dismissible fixed-top center-block text-center myAlert">
            <i className="fas fa-check-circle"></i> <span style={{fontSize:'18px'}}>Fruta Registrada</span>
        </div>
    )
}

export default SuccessAlert
