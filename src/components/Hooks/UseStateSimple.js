import React,{useState} from 'react';

function UseStateSimple() {
    
    const [count,setCount]=useState(0)
    
    return (
        <div>
            
            <h3 className="pl-5">{count}</h3>
            <button onClick={()=>setCount(count+1)} className="btn btn-warning">Increment Count</button>

        </div>
    );
    }

export default UseStateSimple;
    