import React, { memo, useCallback, useState } from 'react'

function Test() {
  const[counter,setCounter]=useState(0)
  // function a(){
  //   console.log("")
  // }

  const a=useCallback(()=>{
    console.log("Hi i renrended")
  },[])
  return (
    <div>
      <button onClick={()=>{
        setCounter(counter=>counter+1)
      }}>
        Counter {counter}
      </button>

      <Demo a={a}/>
    </div>
  )
}


const Demo=memo(({a})=>{
  console.log("Rerendered")
  return <div>
    hi there {a}
  </div>
})

export default Test
