import { useState,useEffect } from "react";
const usePalindroma = () => {

    const [esPalindroma,setEsPalindroma]=useState();
    const [miWord,setMiWord]=useState('');
    const [emptyString,setEmptyString]=useState(true);
    
    const verificarSiEsPalindroma = palabra =>{
        setMiWord(palabra.toUpperCase());
        if(palabra.replaceAll(' ','')  === palabra.split('').reverse().join('').replaceAll(' ','')){
            setEsPalindroma(true);
        }else{
            setEsPalindroma(false);
        }
    }

    useEffect(()=>{
        if(miWord.trim().length <= 0 ){
            setEmptyString(true);
        }else{
            setEmptyString(false);
        }
    },[miWord]);

    useEffect(()=>{
        verificarSiEsPalindroma(miWord);
    },[miWord]);

    return [
        esPalindroma,
        verificarSiEsPalindroma,
        miWord,
        emptyString
    ]
}

export default usePalindroma;
