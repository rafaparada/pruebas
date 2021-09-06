import React,{ useState,useRef, createRef } from "react";
import './styles/estilos.css';
const MiTabla = () => {
    const [nCR,setNumColsRows]=useState({mcols:5,mrows:5});
    const myTds = useRef([]);
    const aleatorio = (min=1, max=4) => Math.floor(Math.random() * (max - min) + min);
    
    const colorear = () =>{
      myTds.current.map(c=>{
           c.current.className = "bc";
      });
    }
      
    const tabla = () => {
        let table = [];
        let rows  = [];
        for(let i=1;i<=nCR.mrows;i++) {
            let cells = [];
            for(let k = 1; k <= nCR.mcols; k++) {
                myTds.current[`${i}${k}`] = React.createRef();
                let keyTd = `${i}-${k}`;
                cells.push(<td key={keyTd} ref={myTds.current[`${i}${k}`]} id={`id${keyTd}`}>{aleatorio()}</td>)
            }
            rows.push(<tr key={i}>{cells}</tr>)
        }
        table.push(<table className="table table-bordered" key="yep"><thead></thead><tbody>{rows}</tbody></table>);
        return table;
    }
    
    return (
       <div>
           {tabla()}
           <button className="btn btn-primary btn-lg ms-5" onClick={()=>colorear()}>Probar</button>
       </div>
    );
}

export default MiTabla
