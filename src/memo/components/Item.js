import React from 'react'

const Item = ({user}) => {
    const {id,name} = user;
    return (
       <li key={id}>{name}</li>
    )
}

export default Item
