import {useState,useReducer,useRef,useEffect} from 'react';
import type from './types';
import reducer from './reducer';
const initialValues = [];
const initialValuesPerson =  {id:'',nombres:'',apellidos:'',telefono:''};
const init = () =>{
    return JSON.parse(localStorage.getItem('personas')) || [];
}
export const useCrudReducer = () => {
    const [personas,dispatch]  = useReducer(reducer,initialValues,init);
    const [persona,setPersona] = useState(initialValuesPerson);
    const [editOn,setEditOn]   = useState(false);
    const myInputRef = useRef();
    
    useEffect(()=>{
        myInputRef.current.focus();
    },[]);

    const handleInput = e =>{
        const nuevaPersona = {...persona};
        nuevaPersona[e.target.name] = e.target.value;
        setPersona(nuevaPersona);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!editOn){
            const person = {...persona,id:Date.now()};
            const action = {type:type.create,payload:person};
            localStorage.setItem('personas',JSON.stringify([...personas,person]));
            dispatch(action);
        }else{
            const personEdit = {...persona};
            const action = {type:type.update,payload:personEdit};
            localStorage.setItem('personas',JSON.stringify(personas.map(p=>p.id===personEdit.id ? {...personEdit}:p)));
            dispatch(action);
            setEditOn(false);
        }
        setPersona(initialValuesPerson);
        myInputRef.current.focus();
    }

    const prepararEdit = (data)=>{
        const personToEdit = {...data};
        setPersona(personToEdit);
        setEditOn(true);
    }

    const handleCancel = () =>{
        setEditOn(false);
        setPersona(initialValuesPerson);
        myInputRef.current.focus();
    }

    const handleDelete = (id) =>{
        const action = {type:type.delete,payload:id};
        localStorage.setItem('personas',JSON.stringify(personas.filter(p=>p.id !==id)));
        dispatch(action);
    }



    return [persona,personas,handleInput,handleSubmit,prepararEdit,editOn,handleCancel,handleDelete,myInputRef];

}

