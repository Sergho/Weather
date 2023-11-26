# Weather

CLI Приложение для получения прогноза погоды на __3 дня__ вперёд

__Weather__ работает на NodeJS и получает данные через API сервиса [WeatherAPI](http://api.weatherapi.com)

## Перед тем как запускать

Перед запуском в директории с проектом необходимо выполнить команду
```bash
$ npm i
```

Это установит зависимости для __Weather__ и сделает его готовым к работе

## Использование приложения

```bash
$ node index.js
```

## Структура проекта
+ api
  + weatherAPI.js
+ config
  + appconfig.js
+ index.js
+ package-lock.json
+ package.json
+ README.md

### Файл `config/appconfig.js`

Если приложение __Weather__ запущено без указания аргументов командной строки, то значения для подключения к API и получения данных берутся из файла `config/appconfig.js`


+ `weatherUrl` - url API погодного сервиса (не рекомендуется к замене)
+ `apiToken` - токен погодного сервиса [WeatherAPI](http://api.weatherapi.com)
+ `defaultSite` - текстовое описание локации по умолчанию

### Аргументы командной строки

Аргументы командной строки позволяют выборочно игнорировать значения полей в файле `config/appconfig.js`

+ `-s, --site <string>` - текстовое описание локации
+ `-t, --token <string>` - токен погодного сервиса [WeatherAPI](http://api.weatherapi.com)
+ `-h --help` - описание аргументов командной строки

С аргументами командной строки __Weather__ можно использовать следующим образом:

```bash
$ node index.js -t "67123328145949a9b5e131414631711" -s "Москва"
```

## Формат ответа

Формат ответа `text/plain`

Примерный фариант ответа:
```
Weather in Нижний Новгород:

[2023-11-26]
Temperature: -3.1/-0.7
Weather conditions: Freezing fog

[2023-11-27]
Temperature: -0.3/1.7
Weather conditions: Moderate or heavy snow showers

[2023-11-28]
Temperature: -6.5/-0.8
Weather conditions: Light freezing rain
```

## Используемые технологии
+ [NodeJS](https://nodejs.org/en)
  + [axios](https://www.npmjs.com/package/axios) - создание HTTP запросов к внешнему серверу
  + [commander](https://www.npmjs.com/package/commander) - работа с аргументами командной строки
+ [WeatherAPI](http://api.weatherapi.com) - погодный сервис с бесплатным тарифом