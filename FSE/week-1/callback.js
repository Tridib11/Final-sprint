function calculateArithmetic(a, b, func) {
  const ans = func(a, b);
  console.log(ans);
}

function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

const calculate = calculateArithmetic(34, 11, subtract);
