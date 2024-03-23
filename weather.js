#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { getWeather, getIcon } from "./services/api.service.js";
import {
  printHelp,
  printSuccess,
  printError,
  printWeather,
} from "./services/log.service.js";
import {
  saveKeyValue,
  getKeyValue,
  TOKEN_DICTIONARY,
} from "./services/storage.service.js";

// Сохранение токена и вывод в консоль статус
const saveToken = async (token) => {
  if (!token.length) {
    printError("Не передан токет");
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSuccess("Токен сохранен");
  } catch (error) {
    printError(error.message);
  }
};

// Сохранение города и вывод в консоль статус
const saveCity = async (city) => {
  if (!city.length) {
    printError("Город не передан");
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.city, city);
    printSuccess("Город сохранен");
  } catch (error) {
    printError(error.message);
  }
};

// Получить прогноз
const getForcast = async () => {
  try {
    const city = await getKeyValue(TOKEN_DICTIONARY.city);
    const weather = await getWeather(city);
    const icon = getIcon(weather.weather[0].icon);
    printWeather(weather, icon);
  } catch (error) {
    if (error?.response?.status === 404) {
      printError("Неверно указан город");
    } else if (error?.response?.status === 401) {
      printError("Неверно указан токен");
    } else {
      printError(error.message);
    }
  }
};

// Главная ф-ция
const initCLI = () => {
  const args = getArgs(process.argv);
  // Вывести помощь
  if (args.h) {
    return printHelp();
  }
  // Сохранить город
  if (args.s) {
    return saveCity(args.s);
  }
  // Сохранить токен
  if (args.t) {
    return saveToken(args.t);
  }
  // Вывести погоду
  return getForcast();
};

initCLI();
