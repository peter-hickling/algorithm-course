const karatsubaMultiplication = (x, y) => {
  let n = ("" + x).length;
  if (n <= 1) {
    return x * y;
  }

  let nHigh = Math.ceil(n/2);
  let nlow = Math.floor(n/2);

  let a = parseInt(x / Math.pow(10, nlow));
  let b = x % Math.pow(10, nHigh);
  let c = parseInt(y / Math.pow(10, nlow));
  let d = y % Math.pow(10, nHigh);

  let aC = karatsubaMultiplication(a, c);
  let bD = karatsubaMultiplication(b, d);


  return aC * 10 ** n + (karatsubaMultiplication(a + b, c + d) - aC - bD) * 10 ** (n / 2) + bD;
};

console.log(karatsubaMultiplication(3141592653589793238462643383279502884197169399375105820974944592, 2718281828459045235360287471352662497757247093699959574966967627));