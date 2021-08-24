import CardResult from "./CardResult"
import { useReducer,useState } from "react";
import functionReducer from './functionReducer';
const init = () =>{
    return 0;
}
const MathReducer = () =>{
    const [state,dispatch] = useReducer(functionReducer,0,init);
    const [nums,setNums]=useState({num1:0,num2:0});
    
    const handleInput = (e) =>{
        const myNums = {...nums};
       myNums[e.target.name] = e.target.value;
        setNums(myNums);
    }

    const handleSelect = (e)=>{
        const action = {type:e.target.value,payload:nums};
        dispatch(action);
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <h4 className="mt-5">OPERACIONES MATEMATICAS</h4>
                    <hr />
                    PRIMER NUMERO
                    <input type="text" name="num1" className="form-control" onChange={handleInput}/>
                    SEGUNDO NUMERO
                    <input type="text" name="num2" className="form-control" onChange={handleInput}/>
                    SELECCIONE LA OPERACION
                    <select className="form-select" onChange={handleSelect}>
                        <option value="suma">SUMA</option>
                        <option value="resta">RESTA</option>
                        <option value="multiplicacion">MULTIPLICACION</option>
                        <option value="division">DIVISION</option>
                    </select>
                    <hr />
                    <pre>
                        {JSON.stringify(nums)}
                    </pre>
                    <CardResult result={state}/>
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    )
}

export default MathReducer;