import React, { useEffect, useState } from 'react'
import { Button } from 'reactstrap';

const UseEffect = () => {
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
 
    
     
    //useEffect asynchron calisir.
    useEffect(()=>{
        console.log("MOUNTING: Bu satir component ilk render oldugunda calisir.")
    },[]);

    useEffect(()=>{
        console.log("UPDATING: BU satir render ve rerender oldugunda calisir")
    });

    useEffect(()=>{
        console.log("ERROR UPDATING: BU satir render ve rerender oldugunda calisir")
    },[error]);

  return (
    <div>
        <Button onClick={()=>setMessage("Hello")}>{message}</Button>
        <Button onClick={()=>setError("An error occured")}>{error}</Button>
    </div>
  )
}

export default UseEffect