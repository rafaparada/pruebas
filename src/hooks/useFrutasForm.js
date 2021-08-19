import getFrutas from "../components/FrutasForm/helpers/getFrutas";
import { useState,useEffect,useRef} from "react"
    const useFrutasForm = () => {

    const [frutas,setFrutas]=useState({nombre:'',color:'',precio:''});
    const [successRequest,setSuccessRequest]=useState(false);
    const [fetchFrutas,setFetchFrutas] = useState([]);
    const [mensajeReq,setMensajeReq] = useState('');
    const [editOn,setEditOn] = useState(false);
    const [idToUpdate,setIdToUpdate]=useState(0);
    const [isLoading,setIsLoading] = useState(false);
    const myInputRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            setSuccessRequest(false);
        }, 1000);
       
    },[successRequest])

    useEffect(()=>{
       setIsLoading(true);
       getFrutas().then(fruits=>{
            setFetchFrutas(fruits)
       });
       setIsLoading(false);
    },[successRequest]);

    useEffect(() => {
        if(!editOn){
            setFrutas({nombre:'',color:'',precio:''});
        }
    }, [editOn])
    
    useEffect(()=>{ myInputRef.current.focus();},[]);

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
        setIsLoading(true);
        const res     = await fetch('http://localhost:8000/crear',options);
        const data    = await res.json();
        setSuccessRequest(true);
        setMensajeReq(data.mensaje);
        setFrutas({nombre:'',color:'',precio:''});
        setIsLoading(false);
        myInputRef.current.focus();
    }

    const deleteFruit = async(id) =>{
        try{
            const options = {method:'DELETE'};
            setIsLoading(true);
            const request = await fetch('http://localhost:8000/delete/'+id,options);
            const res     = await request.json();
            setSuccessRequest(true);
            setMensajeReq(res.mensaje);
            setIsLoading(false);
        }catch(error){
            console.log(error);
        }
    }

    const editFruit = id =>{
        const {nombre,color,precio} = fetchFrutas.find(fruit=>(fruit.id === id));
        setEditOn(true);
        setIdToUpdate(id);
        setFrutas({nombre:nombre,color:color,precio:precio});
    }

    const submitUpdate = async(e)=>{
        e.preventDefault();
        const frutasToUp = {...frutas,id:idToUpdate};
        const options    = {method:'PUT',headers:{'Content-type':'application/json'},body:JSON.stringify(frutasToUp)};
        setIsLoading(true);
        const request    = await fetch('http://localhost:8000/update',options);
        const res        = await request.json();
        setMensajeReq(res.mensaje);
        setEditOn(false);
        setIdToUpdate(0);
        setSuccessRequest(true);
        setFrutas({nombre:'',color:'',precio:''});
        setIsLoading(false);
        myInputRef.current.focus();
    }









    return [frutas,handleInput,submitForm,successRequest,fetchFrutas,deleteFruit,mensajeReq,editFruit,editOn,submitUpdate,setEditOn,isLoading,myInputRef]
    //Estaba enviando setFrutas y no lo utilizo en el componente, eso causaba un error que no podia encontrar
    //No enviar cosas que no se van utilizar
}

export default useFrutasForm
