// Итерационный подсчет факториала
function factIterat(num) {
    let product = 1;
    for (let i = num; i > 0; i--) {
        product *= i
    }
    return product
}

// Рекурсивный расчет факториала
function factRec(num) {

    //кратко:
    //return num <= 0 ? 1 : num * factRec(num - 1)     

    if (num === 0) {
        return 1
    } else {
        return num * factRec(num - 1)
    }
}