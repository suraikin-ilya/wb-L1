function isPalindrome(str) {
    // Приводим строку к нижнему регистру и убираем все пробелы (\s)
    const cleanStr = str.toLowerCase().replace(/\s/g, '');
    // Разбиваем строку на массив, разваорачиваем порядок элементов в массиве, объединяем элементы массива в строку и сравниваем результаты
    return cleanStr === cleanStr.split('').reverse().join('');
}

console.log(isPalindrome("аргентина манит негра"))
console.log(isPalindrome("без труда не выловишь и рыбку из пруда"))
console.log(isPalindrome("Около Миши молоко"))
