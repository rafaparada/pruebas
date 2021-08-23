import CardResult from "./CardResult"
import { useReducer,useState } from "react";
import functionReducer from './functionReducer';
const init = () =>{
    const nums = {result:0};
    return nums;
}
const MathReducer = () =>{
    const [state,dispatch] = useReducer(functionReducer,[],init);
    const [nums,setNums]=useState([{num1:0,num2:0}]);
    
    const handleInput = (e) =>{
        console.log(e.target.name+" -> "+e.target.value);
        //const myNums = nums[e.target.name] = e.target.value;
        //setNums(myNums);
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
                    <select className="form-select">
                        <option value="suma">SUMA</option>
                        <option value="resta">RESTA</option>
                        <option value="multiplicacion">MULTIPLICACION</option>
                        <option value="division">DIVISION</option>
                    </select>
                    <hr />
                    <CardResult result={state.result}/>
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    )
}

export default MathReducer;