import React, { useState } from 'react'
import { Button } from 'reactstrap'
import data from "./people.json"
import Person from './Person'

const Birthday = () => {
    const [dataPeople, setDataPeople] = useState(data)

    const deletePerson = (id) => { 
        const arr = dataPeople.filter(t=> t.id !== id)
        setDataPeople(arr)
     }
     const bringPeople = () => { 
        setDataPeople(data);
      }
  return (
    <div>
        <h1>Bugun doganlar</h1>

        <p>Bugun dogan {dataPeople.length} kisi var</p>
        {

        dataPeople.map(item => <Person{...item} deletePerson={deletePerson}/>)
        
        }
        
        <Button color='danger' onClick={()=> setDataPeople([])}>
        Clear</Button>
        <Button color='info' onClick={()=> bringPeople()}>
        Bring People</Button>
    </div>
  )
}

export default Birthday