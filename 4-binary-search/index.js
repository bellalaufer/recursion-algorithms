// Этот метод должен искать элемент в массиве и возвращать его индекс или -1, если элемент не находится в массиве.
// Например, если ты ищешь G в массиве [A, B, C, D, E, F, G, H], твой метод должен возвращать 6. Если ты ищешь X, он должен возвращать -1.

function binarySearch(arr, item, left, right) {
  
  const middle = Math.floor((left + right) / 2);

  if (item === arr[middle]) {
    return middle
  } else if (item < arr[middle]) {      
      return binarySearch(arr, item, left, middle - 1)
    } else if (item > arr[middle]) {
      return binarySearch(arr, item, middle + 1, right)
    } else {
      return -1
    }
  
}
  console.log(binarySearch(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'], 'G', 0, ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].length))
  

module.exports = binarySearch