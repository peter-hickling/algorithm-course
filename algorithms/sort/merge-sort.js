const mergeSortNumbers = (array) => {
  if (array.length < 3) {
    if (array[1] < array[0]) {
      array = array.concat(array.splice(0, 1));
    }
    return array;
  } else {
    let sortOne = mergeSortNumbers(array.slice(0, array.length / 2));
    let sortTwo = mergeSortNumbers(array.slice(array.length / 2, array.length));
    let sortedArray = [];
    while (sortOne.length + sortTwo.length > 1) {
      if (sortOne[0] < sortTwo[0]) {
        sortedArray.push(sortOne[0]);
        sortOne.splice(0, 1);
      } else {
        sortedArray.push(sortTwo[0]);
        sortTwo.splice(0, 1);
      }
    }
    return sortedArray.concat(sortOne).concat(sortTwo);
  }
};

console.log(mergeSortNumbers([0, 5, 3, 2, -1, 10]));