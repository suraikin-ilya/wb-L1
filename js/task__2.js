// Функция для нахождения суммы делителей числа
function calculateDivisorsSum(number) {
    let sum = 0;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    return sum;
}

// Основная функция, проверяющая, является ли число странным
function isStrangeNumber(number) {
    // Находим сумму делителей числа (кроме самого числа)
    let divisorsSum = calculateDivisorsSum(number);

    // Сравниваем сумму делителей с исходным числом
    return divisorsSum === number;
}

console.log(isStrangeNumber(28))