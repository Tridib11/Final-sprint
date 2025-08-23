const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://admin:admin@cluster0.ksun8sc.mongodb.net/userappnew").then(()=>{
  console.log("DB connected")
}).catch((err)=>{
  console.log(err)
})

const User=mongoose.model('Users',{
  name:String,
  email:String
})

const user=new User({
  name:"Tridib",
  email:"rohan@mail.com"
})

user.save()