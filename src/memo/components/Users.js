import React,{useState} from 'react'
import List from './List';

const initialUsers = [
    {id:1,name:"Rafa"},
    {id:2,name:"Sara"},
    {id:3,name:"Juan"},
];
const Users = () => {
    const [users,setUsers] = useState(initialUsers);
    const [userName,setUserName] = useState('Nuevo');
    const handleRegistrarUser = () =>{
        const newUser = {id:Date.now(),name:userName};
        setUsers([...users,newUser]);
    }
    return (
       <div className="container">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <h3>LISTA DE USUARIOS</h3>
                    <hr />
                    <input type="text" onChange={(e)=>{setUserName(e.target.value)}} className="form-control" placeholder="Nombre de usuario" value={userName} />
                    <button className="btn btn-primary mt-4" onClick={handleRegistrarUser}>Registrar</button>
                    <hr />
                    <List users={users} />
                </div>
                <div className="col-3"></div>

            </div>
       </div>
    )
}

export default Users
