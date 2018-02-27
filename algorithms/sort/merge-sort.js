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
    let i = 0;
    let j = 0;
    while (i < sortOne.length || j < sortTwo.length) {
      if (sortOne[i] < sortTwo[j]) {
        sortedArray.push(sortOne[i]);
        i++;
      } else {
        sortedArray.push(sortTwo[j]);
        j++;
      }
    }
    return sortedArray;
  }
};

console.log(mergeSortNumbers([0, 5, 3, 2, -1, 10]));