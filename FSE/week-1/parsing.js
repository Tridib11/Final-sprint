const users='{"name":"tridib","age":"24","gender":"male"}'
const user=JSON.parse(users)
console.log(user) //{ name: 'tridib', age: '24', gender: 'male' }

console.log(user.name)


const newUser={
  name:"Rohan",
  gender:"Male"
}

const finalString=JSON.stringify(newUser)
console.log(finalString) //{"name":"Rohan","gender":"Male"}
