import React,{ useState} from "react";
import './styles/estilos.css';
const TablaDinamica = () => {
    const [nCR,setNumColsRows]=useState({cols:5,rows:5});
    const [isColored,setIsColored] = useState(false);
    const aleatorio = (min=1, max=4) => Math.floor(Math.random() * (max - min) + min);
    const handleInput = (e) =>{
        const newData = {...nCR};
        newData[e.target.name]=e.target.value;
        setNumColsRows(newData);
    }
    const colorear = () =>{
      
    }
      
    const tabla = () => {
        let table = [];
        let trows  = [];
        for(let i=1;i<=nCR.rows;i++) {
            let cells = [];
            for(let k = 1; k <= nCR.cols; k++) {
                let keyTd = `${i}-${k}`;
                let myNum = aleatorio();
                cells.push(<td className={isColored?"alert alert-info":'alert alert-success'} key={keyTd} id={`id${keyTd}`}>{keyTd}</td>)
            }
            trows.push(<tr key={i}>{cells}</tr>)
        }
        table.push(<table key="yep"><thead></thead><tbody>{trows}</tbody></table>);
        return table;
    }
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8 text-center">
                    <hr/>
                <div className="row">
                    <div className="3"><input type="text" className="form-control" name="cols" value={nCR.cols} onChange={handleInput} /></div>
                    <div className="3"><input type="text" className="form-control" name="rows" value={nCR.rows} onChange={handleInput} /></div>
                    <div className="6"></div>
                </div>
                    {tabla()}
                    <button className="btn btn-primary btn-lg ms-5" onClick={()=>colorear()}>Probar</button>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
    );
}

export default TablaDinamica
