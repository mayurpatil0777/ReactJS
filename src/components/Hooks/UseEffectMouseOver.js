import React,{useState,useEffect} from 'react';
import axios from 'axios'

function UseEffectMouseOver() {
    const [X,setX]=useState(0)
    const [Y,setY]=useState(0)
    const [users, setUsers]=useState([])
    const [id, setID]=useState(1)
    const [post, setPost]=useState({})
    const [idFromBtnClick, setIdFromBtnClick]=useState({})

    const handleClick=()=>{
        setIdFromBtnClick(id)
    }

    const logMousePosition=(e)=>{
        setX(e.clientX);
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log("inside mouse over");
        window.addEventListener('mousemove',logMousePosition)

        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            console.log("resssss",response.data);
            setUsers(response.data)
        })  
        .catch(error=>{
            console.log("errrorrr")
        })

        return()=>{
            console.log("Unmounting code");
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/'+'${idFromBtnClick}')
        .then(response=>{
            console.log("resssss",response.data);
            setPost(response.data)
        })  
        .catch(error=>{
            console.log("errrorrr")
        })
    },[idFromBtnClick])
    return (
        <div>
            <b>Component mounted</b><br>
            </br>
             X-coordinate:{X}<br>
            </br>
            Y-coordinate:{Y}
<br></br>
<ul>
    {users.map(user=><li key={user.id}>{user.name}</li>)}
</ul><br></br>

<input type="text" value={id} onChange={(e)=>setID(e.target.value)}></input>
<button type="btn" onClick={handleClick}>Fetch Post</button>
<div>{post.title}</div>
        </div>
    );

    }
export default UseEffectMouseOver