import React from 'react'
import {Button} from 'reactstrap'

const Stateless = () => {
  let mode ="dark";
  
  return (
    <div className={`p-5 d-flex justify-content-around ${mode === "dark" && "bg-dark text-light"}`}>
    Hello World
        <Button onClick={() => mode = "dark"}>Dark Mode</Button>
        <Button onClick={() => mode = "light"}>Light Mode</Button>
    </div>
  )
}

export default Stateless