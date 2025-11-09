import React, { useState } from 'react'

function test() {
  const[name,setName]=useState("Tridib")
  return (
    <div>

      <button onClick={()=>{
        setName(Math.random)
      }}>Click here to update</button>
      <Header title={name}/>
      <Header title="Tridib"/>
      <Header title="Tridib"/>
      <Header title="Tridib"/>
      <Header title="Tridib"/>
      <Header title="Tridib"/>

    </div>
  )
}

const Header=React.memo(({title})=>{
  return <div>
    Hi my name is {title}
  </div>
})

export default test
