import React, { useCallback, useState } from 'react'
import Child from './Child'

function Callback() {
  const[add,setAdd]=useState(0)
  const Learning=useCallback(()=>{
    //some operations
  },[])
  return (
    <div>
      <h1>Learning useCallback</h1>
      <Child Learning={Learning}/>
      <h1>{add}</h1>
      <button onClick={()=>{
        setAdd(add=>add+1)
      }}>Addition</button>
    </div>
  )
}

export default Callback
