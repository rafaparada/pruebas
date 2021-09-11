import { createContext,useState } from "react";
const CrudContext = createContext();
const data = {user:''};
const CrudProvider = ({children}) =>{
    const [user,setUser] = useState({name:'',login:false});
    
    const login = (user) =>{
        setUser({name:user,login:true});
    }

    const logout = () =>{
        setUser(null);
    }

    const data = {user,login,logout};

    return(
        <CrudContext.Provider value={data}>
            {children}
        </CrudContext.Provider>
    )
}

export {CrudProvider};

export default CrudContext;