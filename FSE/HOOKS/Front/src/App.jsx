import React, { useState } from 'react'

function App() {
  const[resourceType,setResourceType]=useState('posts')
  return (
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
  )
}

export default App
