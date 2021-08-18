import getFrutas from "../components/FrutasForm/helpers/getFrutas";
import { useState,useEffect } from "react"
    const useFrutasForm = () => {

    const [frutas,setFrutas]=useState({nombre:'',color:'',precio:''});
    const [successRequest,setSuccessRequest]=useState(false);
    const [fetchFrutas,setFetchFrutas] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSuccessRequest(false);
        }, 1000);
       
    },[successRequest])

    useEffect(()=>{
      // if(successRequest){
       getFrutas().then(fruits=>{
            setFetchFrutas(fruits)
       });
   // }
    },[successRequest]);

    

    const handleInput = (e) =>{
        const newData = {...frutas};
        newData[e.target.id] = e.target.value;
        setFrutas(newData);
    } 

    const submitForm =  async(e) =>{
        e.preventDefault();
        const options = {
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(frutas)
        };
        const res     = await fetch('http://localhost:8000/crear',options);
        const data    = await res.json();
        setSuccessRequest(true);
        setFrutas({nombre:'',color:'',precio:''});
    }

    const deleteFruit = async(id) =>{
        try{
            const options = {method:'DELETE'};
            const request = await fetch('http://localhost:8000/delete/'+id,options);
            const res     = await request.json();
            setSuccessRequest(true);
        }catch(error){
            console.log(error);
        }
    }



    return [frutas,handleInput,submitForm,successRequest,fetchFrutas,deleteFruit]
    //Estaba enviando setFrutas y no lo utilizo en el componente, eso causaba un error que no podia encontrar
    //No enviar cosas que no se van utilizar
}

export default useFrutasForm
