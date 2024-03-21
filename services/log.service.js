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

export { printError, printSuccess, printHelp };
