// Итерационный подсчет n-го числа Фибоначчи
function fibonacciIt(n) {
    let prevPrevNumber = 0;
    let prevNumber = 1;
    let currentNumber = 0;

    for (let i = 0; i <= n; i++) {
        if (i <= 1) {
            currentNumber = 1;
        } else {
            currentNumber = prevPrevNumber + prevNumber;
            prevPrevNumber = prevNumber;
            prevNumber = currentNumber;
        }
    }
    return currentNumber;
}



// Рекурсивное вычисление n-го числа Фибоначчи
if (n <= 1) {
    return n;
} else {
    return fibonacci(n - 1) + fibonacci(n - 2)
}


