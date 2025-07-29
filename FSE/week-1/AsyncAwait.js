function TridibsAsyncFunction() {
  let p = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("hi there !");
    }, 3000);
  });
  return p;
}

async function main() {
  let value = await TridibsAsyncFunction();
  console.log(value);
  console.log("lol");
}

main();

// console.log("After main")
