import {useState,useReducer} from 'react';
import type from './types';
import reducer from './reducer';
const initialValues = [];
export const useCrudReducer = () => {
    const [personas,dispatch]=useReducer(reducer,initialValues);
    const [persona,setPersona] = useState({id:1,nombres:'',apellidos:'',telefono:''});
    const [editOn,setEditOn] = useState(false);
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
            dispatch(action);
        }else{
            const personEdit = {...persona};
            const action = {type:type.update,payload:personEdit};
            dispatch(action);
            setEditOn(false);
        }
        
    }

    const prepararEdit = (data)=>{
        const personToEdit = {...data};
        setPersona(personToEdit);
        setEditOn(true);
    }

    const handleCancel = () =>{
        setEditOn(false);
    }

    const handleDelete = (id) =>{
        const action = {type:type.delete,payload:id};
        dispatch(action);
    }



    return [persona,personas,handleInput,handleSubmit,prepararEdit,editOn,handleCancel,handleDelete];

}

