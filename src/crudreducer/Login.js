import './estilos.css';
import { useState,useRef,useEffect} from 'react';
const Login = () => {
    const [user,setUser] = useState('');
    const myInputRef = useRef();
    useEffect(()=>{
        myInputRef.current.focus();
    },[]);

    const handleSutmit = () =>{
        
    }

    return (
        <div className="container bggeneral">
            <div className="row">
                <div className="col-3 bggeneral"></div>    
                <div className="col-6 box">
                    <div className="miBox rounded align-middle">
                        <input ref={myInputRef} value={user} onChange={(e)=>setUser(e.target.value)} className="form-control miInput text-uppercase" type="text" placeholder = "Cual es tu nombre" />
                    </div>
                </div>    
                <div className="col-3 bggeneral"></div>    
            </div>    
        </div>
    )
}

export default Login
