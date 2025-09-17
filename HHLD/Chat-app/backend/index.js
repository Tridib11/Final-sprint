import express from "express"
import dotenv from "dotenv"
import { Server } from "socket.io"
import http from "http"

const app=express()

const server=http.createServer(app)
const io=new Server(server)

io.on('connection',()=>{
  console.log("Client connected")
})


dotenv.config()
const port=process.env.PORT||5000

app.get("/",(req,res)=>{
  res.send("Working")
})

app.listen(port,()=>{
  console.log(`Server listening on at port ${port}`)
})