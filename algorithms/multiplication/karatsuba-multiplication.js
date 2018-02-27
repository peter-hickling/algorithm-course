const karatsubaMultiplication = (x, y) => {
  let xStr = "" + x;
  let yStr = "" + y;
  let n = xStr.length;

  if (n <= 1) {
    return xStr * yStr;
  }

  let a = Number(xStr.substr(0, Math.floor(n / 2)));
  let b = Number(xStr.substr(Math.ceil(n / 2), n));
  let c = Number(yStr.substr(0, Math.floor(n / 2)));
  let d = Number(yStr.substr(Math.ceil(n / 2), n));
  let aC = karatsubaMultiplication(a, c);
  let bD = karatsubaMultiplication(b, d);


  return aC * 10 ** n + (karatsubaMultiplication(a + b, c + d) - aC - bD) * 10 ** (n / 2) + bD;
};

console.log(karatsubaMultiplication(15, 13));