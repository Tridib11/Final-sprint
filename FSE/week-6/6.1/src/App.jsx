import React from 'react'
import "./App.css"
function App() {
  return (
    <div>
      <Header title="Tridib"/>
      <Header title="Tridib1"/>
    </div>
  )
}

function Header({title}){
  return <div>
    {title}
  </div>
}

export default App
