const binarySearch = require('../index')

test('Функция должна возвращать индекс элемента', () => {
    let arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    let item = 'G';
    let left = 0;
    let right = arr.length;
    expect(binarySearch(arr, item, left, right)).toEqual(6)
});

test('Функция должна быть определена', () => {
    let arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    let item = 'G';
    let left = 0;
    let right = arr.length;
    expect(binarySearch(arr, item, left, right)).toBeDefined()
});

test('Функция должна возвращать -1, если элемента не существует в данном массиве', () => {
    let arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    let item = 'Z';
    let left = 0;
    let right = arr.length;
    expect(binarySearch(arr, item, left, right)).toBe(-1)
});

test('Функция возвращает -1, если массив пустой', () => {
    let arr = [];
    let item = 'A';
    let left = 0;
    let right = arr.length;
    expect(binarySearch(arr, item, left, right)).toBe(-1)
});

test('Функция работает правильно, если в массиве два элемента', () => {
    let arr = ['A', 'B'];
    let item = 'B';
    let left = 0;
    let right = arr.length;
    expect(binarySearch(arr, item, left, right)).toBe(1)
});