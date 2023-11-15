function jsonToLinkedList(json) {
    // Проверка наличия ключа "list" в JSON
    if (!json.hasOwnProperty('list')) {
        throw new Error('Invalid JSON format. "list" key not found.');
    }

    // Помещаем массив объектов из JSON в переменную data
    const data = json.list;

    // Функция для преобразования массива объектов в связный список каждый элемент содержит значение текущего объекта и ссылку на следующий узел
    const arrayToLinkedList = arr => {
        if (arr.length === 0) {
            return null;
        }

        const node = { value: arr[0], next: null };
        node.next = arrayToLinkedList(arr.slice(1));

        return node;
    };

    // Вызываем функцию для преобразования массива в связанный список
    return arrayToLinkedList(data);
}



// Пример использования
const jsonData = {
    list: [
        {
            "id": 1,
            "type": "Cat",
            "name": "Whiskers"
        },
        {
            "id": 2,
            "type": "Dog",
            "name": "Buddy"
        }
    ]
};

console.log(jsonToLinkedList(jsonData));

