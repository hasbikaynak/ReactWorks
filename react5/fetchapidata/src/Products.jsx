import React, { useEffect, useState } from 'react'

const Products = () => {
    //useState will hold my whole api data 
    const [data,setData] = useState([])
    
    useEffect(()=>{
      //getting the api link
      //fetch is used for getting the api registration in reactjs
      fetch('https://fakestoreapi.com/products').then(response => response.json()).then(data => {
      //assigning the data to my useState hook, because this useState hook is responsible for rendering/showing the data into html table
      setData(data);
      }).catch(()=>{
        alert('There is error in fetching the data from API')
      })
      
    },[])
  return (
    <div className='container'>
        <h1 className='text-center display-3'>List of Products</h1>
        <table className='table table-bordered border-primary'>
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Image</th>
            <th>Rate</th>
            <th>Count</th>
        </tr>
        {/* running the map that takes the data from useState hook and display it */}
        {
            data.map(t=> 
            <tbody className='table table-bordered border-primary'>
            <tr>
                <td>{t.id}</td>
                <td>{t.title}</td>
                <td>{t.price}</td>
                <td>{t.description}</td>
                <td>{t.category}</td>
                <td><img src={t.image} style={{width: '80px'}}/></td>
                <td>{t.rating.rate}</td>
                <td>{t.rating.count}</td>
            </tr>
            </tbody>)
        }
        </table>
    </div>
  )
}

export default Products