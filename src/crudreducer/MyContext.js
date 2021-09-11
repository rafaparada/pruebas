import { createContext } from "react";

const MyContext = createContext();

const CrudProvider = ({children}) =>{
    return(
        <CrudContext.Provider>
            {children}
        </CrudContext.Provider>
    )
}

export {CrudProvider};

export default MyContext;
