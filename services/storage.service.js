import { homedir } from "os";
import { join } from "path";
import { promises } from "fs";

// Путь к файлу с данными
const filePath = join(homedir(), "weather-data.json");

const TOKEN_DICTIONARY = {
  token: "token",
  city: "city",
};

// Проверка на существование файла
const isExist = async (path) => {
  try {
    await promises.stat(path);
    return true;
  } catch (error) {
    return false;
  }
};

// Сохранение ключа и значения в файле
const saveKeyValue = async (key, value) => {
  let data = {};

  // Если файл уже существует, то читаем его данные
  if (await isExist(filePath)) {
    const file = await promises.readFile(filePath);
    data = JSON.parse(file);
  }

  // Меням значение данных, либо добавляем новые
  data[key] = value;
  await promises.writeFile(filePath, JSON.stringify(data));
};

// Возвращает значение, прочтеное из файла
const getKeyValue = async (key) => {
  if (await isExist(filePath)) {
    const file = await promises.readFile(filePath);
    const data = JSON.parse(file);
    return data[key];
  }
  return undefined;
};

export { saveKeyValue, getKeyValue, TOKEN_DICTIONARY };
