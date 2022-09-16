import React from 'react'
import { useState,useEffect } from 'react';
import { Card, Container,Button,CardTitle,CardBody } from 'reactstrap'

const RandomImage = () => {
   const [number,setNumber] = useState(1);
    let image = "";
   
        if(number >= 8){
            image= "images-01.jpg"
          }else if(number>=4){
            image = "images-02.jpg"
          }else{
           image = "images-03.jpg"
          }
    
  

   const randomNumber = () => { 
    const randomNumber = Math.floor(Math.random()*10+1)
    setNumber(randomNumber)
    }

  return (
    <Container>
        <Card
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Sample"
    src= {require(`/${image}`)}
  />
  <CardBody>
    <CardTitle tag="h5">
      Random Number: {number}
    </CardTitle>
    <Button onClick={()=>randomNumber()}>
      Change
    </Button>
  </CardBody>
</Card>
    </Container>
  )
}

export default RandomImage