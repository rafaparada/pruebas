import { useState,useEffect } from "react";
import React from 'react'

const usePalindroma = () => {

    const [esPalindroma,setEsPalindroma]=useState();
    const [miWord,setMiWord]=useState('');
    const [emptyString,setEmptyString]=useState(true);
    
    const verificarSiEsPalindroma = palabra =>{
        setMiWord(palabra.toUpperCase());
        if(palabra === palabra.split('').reverse().join('')){
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
    });

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
