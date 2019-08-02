import React,{useState,useEffect} from 'react';
import UseEffectMouseOver from './UseEffectMouseOver'

function UseEffectSimple() {
    const [count,setCount]= useState(0)
    const [display,setDisplay]= useState(true)
    

    useEffect(() => {

       
    })
    return (
        <div>
            <h2>{count}</h2>
            <button className="btn btn-primary" onClick={()=>setCount(count+1)}>Click me</button>
            <button className="btn btn-primary ml-2" onClick={()=>setDisplay(!display)}>Toggle</button>
            {display===true ? <UseEffectMouseOver></UseEffectMouseOver>:'Unmounted'}

        </div>
    );

    }
export default UseEffectSimple