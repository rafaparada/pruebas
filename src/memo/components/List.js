import React from 'react'
import Item from './Item'

const List = ({users}) => {
    return (
        <ul>
            {
                users.map(user=>(
                    <Item key={user.id} user={user} />
                ))
            }
        </ul>
    )
}

export default List
