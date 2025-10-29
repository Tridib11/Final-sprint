import React from 'react'

function CreateTodo() {
  return (
    <div>
      <input type="text" name='title' placeholder='title' /> <br />
      <input type="text" name='description' placeholder='description' /><br />

      <button>Add todo</button>
    </div>
  )
}

export default CreateTodo
