import React from 'react'
import { useState } from 'react'
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

function Display({name}){
  return <div>
    My name is {name}
  </div>
}

export default Test
