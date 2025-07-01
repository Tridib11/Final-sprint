function calculateArithmetic(a,b,someFunction){
  const ans=someFunction(a,b)
  return ans;
}

function sum(a,b){
  return a+b
}

const value=calculateArithmetic(12,2,sum)
console.log(value)