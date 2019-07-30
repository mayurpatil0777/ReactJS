import React,{useState} from 'react';

function UseStatePrevState() {
    const initialCount=0;
    const [count,setCount]=useState(initialCount)
    const incrementFive=()=>{
        for(let i=0;i<5;i++){
            setCount(prevCount=>prevCount+1)
        }
        
    }
     
    return (
        <div>
           <h3 className="pl-5"> {count}</h3>
            <button onClick={()=>setCount(prevCount =>prevCount+1)} className="btn btn-success">Increment Count</button><br></br>
           
           
            <button onClick={()=>setCount(prevCount =>prevCount-1)} className="btn btn-warning mt-2">Decrement Count</button><br></br>
            
           
            <button onClick={()=>setCount(initialCount)} className="btn btn-danger mt-2">Reset Count</button><br></br>

            <button onClick={()=>incrementFive(initialCount)} className="btn btn-primary mt-2">Increment by 5</button><br></br>

        </div>
    );
    }

export default UseStatePrevState;