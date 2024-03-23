// Библиотека для имользования цвета в консоли
import chalk from "chalk";
// Библиотека для того, чтобы убрать лишние отступы у шаблонной строки
import dedent from "dedent-js";

// Вывод ошибки
const printError = (error) => {
  console.log(chalk.bgRed(" ERROR ") + " " + error);
};

// Вывод в случае успеха
const printSuccess = (message) => {
  console.log(chalk.bgGreen(" SUCCESS ") + " " + message);
};

// Вывод помощи
const printHelp = () => {
  console.log(
    dedent(`${chalk.bgCyan(" HELP ")}
    Без параметров - вывод погоды
    -s [CITY] для установки города
    -h для вывода помощи
    -t [API_KEY] для сохранения токеда
    `)
  );
};

// Вывод погоды
const printWeather = (res, icon) => {
  console.log(
    dedent(`${chalk.bgYellow(" WEATHER ")} Погода в городе ${res.name}
    ${icon} ${res.weather[0].description}
    Температура: ${res.main.temp}
    Ощущается как: ${res.main.feels_like}
    Влажность: ${res.main.humidity}
    Скорость ветра: ${res.wind.speed}
    `)
  );
};

export { printError, printSuccess, printHelp, printWeather };
