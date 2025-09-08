import React from 'react'
import { useState,memo } from 'react'
function Test() {
  const[title,setTitle]=useState("Tridib")
  return (
    <div>
      <button onClick={()=>{
        let randomNumber=Math.random()
        setTitle(randomNumber)
      }}>Click to update the tile</button>
      <Display name={title}/>
      <Display name="Tridib"/>
      <Display name="Tridib"/>
      <Display name="Tridib"/>
      <Display name="Tridib"/>
      <Display name="Tridib"/>
      <Display name="Tridib"/>
    </div>
  )
}

const Display=React.memo(({name})=>{
  return <div>
    My name is {name}
  </div>
})

export default Test
