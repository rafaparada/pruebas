import { useEffect, useReducer,useState } from "react"
const reducer = (state,action) =>{
    switch(action.type){
        case 'increment':
            return state + action.payload;
        case 'decrement':
            return state - action.payload;
        case 'reset':
            return 0;
        default:
            return 0;
    }
}
const CounterReducer = () => {
    const [counter,dispatch] = useReducer(reducer,0);
    const [show,setShow] = useState(false);
    const handleIncrement = () =>{
        const action = {type:'increment',payload:1};
        dispatch(action);
    }
    const handleDecrement = () =>{
        const action = {type:'decrement',payload:1};
        dispatch(action);
    }
    const handleReset = () =>{
        const action = {type:'reset',payload:0};
        dispatch(action);
    }

    useEffect(()=>{
       setShow(counter === 5 ? true:false);
    },[counter]);

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6 text-center">
                    {show ? <div className="alert alert-success">Soy 5</div>:''}
                    <h1>{counter}</h1>
                    <br />
                    <hr/>
                    <button onClick={handleIncrement} className="btn btn-success">Incrementar</button>
                    <button onClick={handleDecrement} className="btn btn-warning ms-4">Decrementar</button>
                    <button onClick={handleReset} className="btn btn-info ms-4">Reset</button>
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    )
}

export default CounterReducer
