import React, { useEffect, useState } from 'react'
import './Clock1.scss'
import moment from 'moment/moment';

const Clock1 = (props) => {

  const [dateTime, setDateTime] = useState(moment())
  
     const {textColor,bgColor} = props;
 
    useEffect(()=>{ const timer = setInterval(()=>{
       setDateTime(moment())

       return()=>{
        clearInterval(timer);
       }
    },1000)},[]) 
   

    const dateStr = dateTime.format("LL");
    const timeStr = dateTime.format("HH.mm");
    const dayStr = dateTime.format("dddd");
    const hour = dateTime.format("HH");
    let message = "";
    if(hour>=6 && hour<11){
        message= "Morning";
    } 
    else if(hour>=11 && hour<17){
        message="Afternoon";
    }
    else if(hour>=17 && hour<22){
        message="Evening";
    }
    else{
        message="Night";
    }
  
    const clockStyle = {
    color: textColor,
    backgroundColor: bgColor 
    }

  return (
    <div className='clock-container' style={clockStyle}>
    <div className='time'>{timeStr}</div>
     <div>
        <div className='date'>{dateStr}</div>
        <div className='day'>{dayStr} {message}</div>
     </div>
    </div>
  )
}

export default Clock1