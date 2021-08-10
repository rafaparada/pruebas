import React,{useState,useRef} from 'react'
const UseRefExample = () => {
    const [isCopy,setIsCopy]=useState(false);
    const inputRef = useRef();
    const handleCopy = () =>{
        inputRef.current.select();
        document.execCommand('copy');
        setIsCopy(true);
        setTimeout(()=>{ setIsCopy(false);},1000);
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <h1>UseRefExample</h1>
                        <hr />
                        <input type="text" className="form-control" ref={inputRef} />
                        <button className="btn btn-primary mt-4" onClick={handleCopy}>Copiar</button>
                        <h4>{isCopy ? "Copiado":""}</h4>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>
        </div>
    )
}

export default UseRefExample
