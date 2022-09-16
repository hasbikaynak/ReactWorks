import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Todos = () =>{
   const [data, setData] = useState([])


useEffect(()=>{
   fetch('https://jsonplaceholder.typicode.com/todos').then(response=>response.json()).then(data=>{
    setData(data);
   }).catch(()=>{
    alert('Found an error while fetching the data from API')
   })
},[])

  return (
    <div className='container'>
    <h1 className='text-center display-3'>List of Todos</h1>
    <table className='table table-bordered border-white'>
    <tr>
        <th class="bg-primary">UserId</th>
        <th class="bg-success">ID</th>
        <th class="bg-warning">Title</th>
        <th class="bg-danger">Completed</th>
    </tr>
    {/* running the map that takes the data from useState hook and display it */}
    {
        data.map(t=> 
        <tbody className='table table-bordered border-whie'>
        <tr>
            <td class="bg-primary">{t.userId}</td>
            <td class="bg-success">{t.id}</td>
            <td class="bg-warning">{t.title}</td>
            <td class="bg-danger">{t.completed.toString()}</td>
        </tr>
        </tbody>)
    }
    </table>
</div>
  )
}

export default Todos