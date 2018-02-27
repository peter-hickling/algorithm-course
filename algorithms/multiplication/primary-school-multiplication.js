const primarySchoolMultiplication = (a, b) => {
  let aStr = "" + a;
  let bStr = "" + b;

  if (aStr.length === 1 && bStr.length === 1) {
    return a * b;
  }

  const findAddTerm = (intToRemove, otherInt) => (
    Array.from(otherInt)
      .map((aVal, index) => intToRemove.substr(0, 1) * aVal * 10 ** (intToRemove.length - 1 + otherInt.length - 1 - index))
      .reduce((x, y) => x + y, 0)
  );


  return aStr.length > bStr.length ?
    primarySchoolMultiplication(aStr.substr(1, aStr.length), bStr.substr(0, bStr.length)) + findAddTerm(aStr, bStr) :
    primarySchoolMultiplication(aStr.substr(0, aStr.length), bStr.substr(1, bStr.length)) + findAddTerm(bStr, aStr);
};

console.log(primarySchoolMultiplication(51, 65));
console.log(primarySchoolMultiplication(5, 65));