import { useContext } from "react"
import CrudContext from "./MyContext";
const NavBar = () => {
    const {usuario} = useContext(CrudContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-primary bg-primary fixed-top">
            <div className="container-fluid">
                <span className="navbar-brand">REGISTRO DE PERSONAS</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <span className="navbar-text">
                        {usuario.name}
                    </span>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
