import React,{memo,useEffect} from 'react'
import Item from './Item'
const List = memo(({users,handleDelete}) => {
    useEffect(()=>{
       // console.log("List Render");
    });
    return (
        <table className="table table-dark table-striped">
            <thead>
                <tr>
                    <th>NOMBRE</th>
                    <th>ACCIONES</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user=>(
                        <Item key={user.id} user={user} handleDelete={handleDelete} />
                    ))
                }
            </tbody>
        </table>
    )
})

export default List
