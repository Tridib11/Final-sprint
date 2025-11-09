import React, { useState } from 'react'

function test() {
  return (
    <div>
      <Header title="Tridib"/>
      <HeaderRandom/>
    </div>
  )
}

function HeaderRandom(){
  const[name,setName]=useState("Tridib")
  return <div>
    <Header title={name}/>
      <button onClick={()=>{
        setName(Math.random)
      }}>Click me to update</button>
  </div>
}

function Header({title}){
  return <div>
    Hi i am {title}
  </div>
}

export default test
