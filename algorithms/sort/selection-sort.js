const selectionSortNumbers = (array) => {
  let min;
  for (let i = 0; i < array.length; i++) {
    min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }

    if(min !== i) {
      let smaller = array[min];
      array.splice(min, 1);
      array.splice(i, 0, smaller);
    }
  }
  return array;
};

console.log(selectionSortNumbers([5, -1, 0, 3, 2, 10]));