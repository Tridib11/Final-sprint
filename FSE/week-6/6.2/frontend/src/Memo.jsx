import React, { useMemo, useState } from 'react'

function Memo() {
  const [inputValue,setInputValue]=useState(0)
  const [counter,setCounter]=useState(0)

  let count=useMemo(()=>{
    let count=0;
    console.log("sum")
    for(let i=1;i<=inputValue;i++){
      count+=i
    }
    return count
  },[inputValue])
  
  return <div>
    <div>

    <input type="number" onChange={(e)=>{
      setInputValue(e.target.value)
    }}/>
    <br />
    Sum from 1 to {inputValue} is {count}
    </div>
    <div>
      <button onClick={()=>{
        setCounter(counter=>counter+1)
      }}>Click {counter}</button>
    </div>


  </div>
}

export default Memo
