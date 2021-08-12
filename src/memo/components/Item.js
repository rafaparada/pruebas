import React,{useEffect} from 'react'

const Item = ({user}) => {
    useEffect(()=>{
        console.log("Item Render");
    });
    const {id,name} = user;
    return (
       <li key={id}>{name}</li>
    )
}

export default Item
