

// Создаем объект XMLHttpRequest
var xhr = new XMLHttpRequest();

// Настраиваем запрос
xhr.open("POST", "ajax.php", true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

// Определяем обработчик события, который будет вызываться при завершении запроса
xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
        // Здесь обрабатываем успешный ответ от сервера
        var response = JSON.parse(xhr.responseText);
        console.log(response);
    } else {
        // Здесь обрабатываем ошибку
        console.error(xhr.statusText);
    }
};

// Создаем JSON-строку с вашим запросом
var data = {
    query: "SELECT * FROM `test10` ORDER BY `test10`.`date` DESC`"
};

// Преобразуем объект JavaScript в JSON-строку
var jsonData = JSON.stringify(data);

// Отправляем запрос на сервер
xhr.send(jsonData);
