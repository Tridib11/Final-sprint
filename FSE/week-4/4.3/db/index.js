const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://admin:admin@cluster0.ksun8sc.mongodb.net/CourseSellingApplication").then(()=>{
  console.log("DB connected")
})

const AdminSchema=mongoose.Schema({

})

const UserSchema=mongoose.Schema({

})

const CourseSchema=mongoose.Schema({

})

const Admin=mongoose.model("Admin",AdminSchema)
const User=mongoose.model("User",UserSchema)
const Course=mongoose.model("Course",CourseSchema)

module.exports={
  Admin,
  User,
  Course
}