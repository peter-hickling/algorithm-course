const bubbleSortNumbers = (array) => {
  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        let bigger = array[i];
        array.splice(i, 1);
        array.splice(i + 1, 0, bigger);
      }
    }
  }
  return array;
};

console.log(bubbleSortNumbers([0, 5, 3, -1, 2, 10]));