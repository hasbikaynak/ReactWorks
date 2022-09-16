import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
background: blue;
width: 100%;
height: 300px;
`;

const Heading = styled.h1`
color:green;
font-size:45px;
text-decoration:underline;
`;

const Contact = () => {
  return (

     <div className='container'>
             <h1 className='text-center display-3'>Contact Us</h1>
             <div className="alert alert-primary" role="alert">
                <p className='lead'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <p className='lead'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
            <Heading>Welcome To Styled Components</Heading>
            <hr/>
            <Container></Container>
          
     </div>
   
  )
}

export default Contact