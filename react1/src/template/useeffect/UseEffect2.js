import React, { useState,useEffect } from 'react'
import { Button } from 'reactstrap'

const UseEffect2 = () => {
    const [counter, setCounter] = useState(0);
 
    useEffect(() => {
      document.title = `you clicked ${counter} times`;
    }, [counter])
    
  return (
    <div className='text-center'>
    <div>You clicked {counter} times</div>
        <Button className='btn-warning' onClick={()=>setCounter(prev=>prev+1)}>Click</Button>
    </div>
  )
}

export default UseEffect2