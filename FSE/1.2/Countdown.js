let timer=30

function decrease(){
  console.log(timer)
  timer-=1;
}

setInterval(decrease,1000)