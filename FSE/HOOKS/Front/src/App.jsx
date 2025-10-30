import React, { useEffect, useState } from 'react'

import axios from "axios" 

function App() {
  const[resourceType,setResourceType]=useState('posts')
  const[items,setItems]=useState([])

  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const res=await axios.get(`https://jsonplaceholder.typicode.com/${resourceType}`)
        setItems(res.data)
      }
      catch(err){
        console.error(err)
      }
    }


    fetchData()
  },[resourceType])
  return (
    <div>
      <div>

      <button onClick={()=>{
        setResourceType('posts')
      }}>Posts</button>
      <button onClick={()=>{
        setResourceType('users')
      }}>Users</button>
      <button onClick={()=>{
        setResourceType('comments')
      }}>Comments</button>
      </div>

      <h1>{resourceType}</h1>
      {items.map((item)=>{
        return <pre>{JSON.stringify(item)}</pre>
      })}
    </div>

    
  )
}

export default App
