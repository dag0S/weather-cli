const getArgs = (args) => {
  const res = {};
  // Получаем все аргументы
  const [executer, file, ...rest] = args;
  rest.forEach((value, index, array) => {
    // Является ли аргумент флагом
    if (value.charAt(0) === "-") {
      // Является ли флаг последним аргументом
      if (index === array.length - 1) {
        res[value.substring(1)] = true;
        // Является ли следующий аргумент значением флага
      } else if (array[index + 1].charAt(0) !== "-") {
        res[value.substring(1)] = array[index + 1];
        // Если флаг является не последним аргументом и след аргумент это тоже флаг 
      } else {
        res[value.substring(1)] = true;
      }
    }
  });
  return res;
};

export { getArgs };
