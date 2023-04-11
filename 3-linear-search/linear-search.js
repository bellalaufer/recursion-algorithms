//Реализуй функции линейного поиска. Проверь результат тестами.
//принимает два аргумента: объект и массив. Она должна последовательно перебирать каждый элемент и возвращать индекс,
// в котором объект был изначально найден. Если объект не найден, то функция возвращает значение -1.

function linearSearch(n, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      return i
    }
  }
  return -1

}


//напишем новый метод globalLinearSearch, который возвращает массив всех индексов, в которых найден элемент.
function globalLinearSearch(n, arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      newArr.push(i)
    }
  }
  return newArr.length === 0 ? -1 : newArr

}


module.exports = {
  linearSearch,
  globalLinearSearch
}
