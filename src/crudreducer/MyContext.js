import { createContext,useState } from "react";
const CrudContext = createContext();
const CrudProvider = ({children}) =>{
    const [usuario,setUser] = useState({name:'',login:false});
    
    const login = (usuario) =>{
        setUser({name:usuario,logged:true});
    }

    const logout = () =>{
        setUser(null);
    }

    const data = {setUser,usuario,login,logout};

    return(
        <CrudContext.Provider value={data}>
            {children}
        </CrudContext.Provider>
    )
}

export {CrudProvider};

export default CrudContext;