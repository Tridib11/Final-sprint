function Sum(num1,num2,CallbackFn){
  let result= num1+num2
  CallbackFn(result)
  // return result
}

function displayResult(data){
  console.log(`Result of the sum is ${data}`)
}

function displayResultPassive(data){
  console.log(`Sums result is : ${data}`)
}

const ans=Sum(1,2, displayResult)
// displayResult(ans)