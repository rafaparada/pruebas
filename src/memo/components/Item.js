import React,{memo,useEffect} from 'react'

const Item = memo(({user,handleDelete}) => {
    useEffect(()=>{
       // console.log("Item Render");
    });
    const {id,name} = user;
    return (
       <tr key={id}><td>{name}</td><td><button className="btn btn-danger btn-sm" onClick={()=>{handleDelete(id)}}>Eliminar</button></td></tr>
    )
})

export default Item
