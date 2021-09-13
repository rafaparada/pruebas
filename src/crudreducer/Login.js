import './estilos.css';
import { useState,useRef,useEffect,useContext} from 'react';
import {useHistory} from 'react-router-dom';
import CrudContext from './MyContext';
const Login = () => {
    const [user,setUser] = useState('');
    const myInputRef = useRef();
    const history = useHistory();
    const {usuario,logged,login} =  useContext(CrudContext);
    useEffect(()=>{
        myInputRef.current.focus();
    },[]);

    const handleSutmit = e =>{
        if(e.key==="Enter"){
            if(validate(user)){
               login(user);
               history.push('/home');
            }else{
              alert("No Válido");
            }
        }
    }

    const validate=(text)=>{
        return (text.trim().length >= 1) ? true : false; 
    }

    return (
        <div className="container bggeneral">
            <div className="row">
                <div className="col-3 bggeneral"></div>    
                <div className="col-6 box">
                    <div className="miBox rounded align-middle">
                        <input ref={myInputRef} value={user} onKeyUp={(e)=>handleSutmit(e)} onChange={(e)=>setUser(e.target.value)} className="form-control miInput text-uppercase" type="text" placeholder = "Enter your name" />
                    </div>
                </div>    
                <div className="col-3 bggeneral"></div>    
            </div>    
        </div>
    )
}

export default Login
