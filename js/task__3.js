const MathX = (function() {
    // Функция для вычисления N-го числа в ряду Фибоначчи (рекурсия)
    function calculateFibonacciNumberRecursive(n) {
        if (n <= 1) {
            return n;
        } else {
            // Рекурсивно вызываем функцию для (n - 1) и (n - 2) и возвращаем их сумму
            return calculateFibonacciNumberRecursive(n - 1) + calculateFibonacciNumberRecursive(n - 2);
        }
    }

    // Функция для вычисления всех чисел в ряду Фибоначчи до числа N
    function generateFibonacciRow(n) {
        const series = [];
        for (let i = 0; i <= n; i++) {
            series.push(calculateFibonacciNumberRecursive(i));
        }
        return series;
    }

    // Функция для определения, является ли число простым
    function isPrime(number) {
        if (number <= 1) {
            return false;
        }
        // Перебираем числа от 2 до корня из number включительно
        for (let i = 2; i * i <= number; i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }

    // Функция для вычисления N-го простого числа
    function getNPrimeNumber(n) {
        //номер простого числа (счётчик)
        let count = 0;
        //само просто число, 2 самое первое просто число
        let number = 2;
        // Пока не найдем n простое число, увеличиваем number и проверяем на простоту
        while (count < n) {
            if (isPrime(number)) {
                count++;
            }
            number++;
        }
        // Поскольку number было увеличено после нахождения n-го простого числа, а нам нужно вернуть именно n-е простое число
        return number - 1;
    }

    // Функция для вычисления всех простых чисел до числа N
    function generatePrimesUpToN(n) {
        //создаём массив простых чисел
        const primes = [];
        for (let i = 2; i <= n; i++) {
            //если число простое пушим его в массив
            if (isPrime(i)) {
                primes.push(i);
            }
        }
        return primes;
    }

    // Публичный интерфейс модуля MathX
    return {
        calculateFibonacciNumberRecursive,
        generateFibonacciRow,
        getNPrimeNumber,
        generatePrimesUpToN
    };
})();

// Примеры использования функций из MathX
console.log(5 + "-е число в ряду Фибоначчи: " + MathX.calculateFibonacciNumberRecursive(5));
console.log("Ряд Фибоначчи до " + 10 + " - "+ MathX.generateFibonacciRow(10));
console.log(10 + " простое число: " + MathX.getNPrimeNumber(10));
console.log("Простые числа до " + 50 + " :" + MathX.generatePrimesUpToN(50));