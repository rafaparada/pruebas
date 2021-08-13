import React,{useState,useRef,useEffect,useMemo} from 'react'
import List from './List';

const initialUsers = [
    {id:1,name:"Rafa"},
    {id:2,name:"Sara"},
    {id:3,name:"Juan"},
];
const Users = () => {
    const [users,setUsers] = useState(initialUsers);
    const [userName,setUserName] = useState('');
    const [search,setSearch] = useState('');
    const userNameRef = useRef();
    const handleRegistrarUser = () =>{
        const newUser = {id:Date.now(),name:userName.toUpperCase()};
        if(userName.trim().length > 2){
            setUsers([...users,newUser]);
            setUserName('');
        }
        userNameRef.current.focus();
    }
    const handleSearch = () =>{
        setSearch(userName);
    }
    
    const handleDelete = id =>{
        setUsers(users.filter(user => user.id !== id));
    }

    const filteredUsers = useMemo(()=>
        users.filter(user =>{
        console.log('filter Proccess');
        return  user.name.toLowerCase().includes(search.toLowerCase());
    })
    ,[search,users])

    useEffect(()=>{
        userNameRef.current.focus();
    });
    
    useEffect(() => {
        console.log("Main App render");
    })
    return (
       <div className="container">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <h3>LISTA DE USUARIOS</h3>
                    <hr />
                    <input type="text" style={{textTransform:'uppercase'}} ref={userNameRef} onChange={(e)=>{setUserName(e.target.value)}} className="form-control" placeholder="Nombre de usuario" value={userName} />
                    <button className="btn btn-primary mt-4" onClick={handleRegistrarUser}>Registrar</button>
                    <button className="btn btn-primary mt-4 ms-4" onClick={handleSearch}>Search</button>
                    <hr />
                    <List users={filteredUsers} handleDelete={handleDelete} />
                </div>
                <div className="col-3"></div>

            </div>
       </div>
    )
}

export default Users
