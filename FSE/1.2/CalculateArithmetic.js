function calculateArithmetic(a,b,type){
  if(type=="sum"){
    return a+b
  }
  if(type=="minus"){
    return a-b
  }
}

function Sum(){
  return a+b
}

function Sub(){
  return a-b
}

const value=calculateArithmetic(1,2,"minus")
console.log(value)