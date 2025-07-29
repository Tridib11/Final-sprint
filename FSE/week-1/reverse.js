const ans=[1,2,3,4,5]

let start=0,end=ans.length-1;
while(start<end){
  let temp=ans[start];
  ans[start]=ans[end];
  ans[end]=temp;
  start++;
  end--;
}

console.log(ans)