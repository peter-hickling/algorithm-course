const insertionSortNumbers = (array) => {
  let sortedArray = [array[0]];
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < sortedArray.length; j++) {
      if (array[i] < sortedArray[j]) {
        sortedArray.splice(j, 0, array[i]);
        break;
      } else if (j === sortedArray.length - 1) {
        sortedArray.push(array[i]);
        break;
      }
    }
  }
  return sortedArray;
};

console.log(insertionSortNumbers([0, 5, 3, 2, -1, 10]));