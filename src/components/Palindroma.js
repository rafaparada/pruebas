import React from 'react';
import usePalindroma from '../hooks/usePalindroma';
const Palindroma = () =>{
    const [esPalindroma,verificarSiEsPalindroma,miWord,emptyString] = usePalindroma();
    
    const comprobar = e =>{
        if(e.key === "Enter"){
            verificarSiEsPalindroma(e.target.value);
        }
    }

    return(
        <>
            <div className="container">
                <br /><br />
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6 text-center">
                        <h3>VERIFICAR PALINDROMAS</h3>
                        <input type="text" className="form-control" placeholder="ESCRIBA UNA PALABRA, LUEGO ENTER" onKeyUp = {comprobar} style={{textTransform:'uppercase'}} />
                        <hr />
                        <h4 className = {!emptyString ? esPalindroma ? "alert alert-success":"alert alert-danger":""}>{!emptyString ? esPalindroma ? miWord+ " ES PALINDROMA" : miWord+" NO ES PALINDROMA":""}</h4>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>
        </>
   );
}

export default Palindroma;