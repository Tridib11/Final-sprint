import React, { useEffect, useState } from "react";
import io from "socket.io-client";
const Chat = () => {
  const[socket,setSocket]=useState(null)
  const[msg,setMsg]=useState('')
  const sendMsg=(e)=>{
    e.preventDefault()
    if(socket){
      socket.emit('chat msg',hello)
      setMsg('')
    }
  }

  useEffect(()=>{
    const newSocket=io('http://localhost:8080')
    setSocket(newSocket)
    return ()=>newSocket.close()
  },[])
  return (
    <div>
      <form onSubmit={sendMsg} />
      <button
        type="button"
        class="text-white bg-gradient-to-r from-blue-500 via-blue-600     to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none     focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5    py-2.5 text-center me-2 mb-2"
      >
        Send
      </button>
    </div>
  );
};

export default Chat;
