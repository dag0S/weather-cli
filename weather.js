#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { printHelp, printSuccess, printError } from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.service.js";

// Сохранение токена и вывод в консоль статус
const saveToken = async (token) => {
  try {
    await saveKeyValue("token", token);
    printSuccess("Токен сохранен");
  } catch (error) {
    printError(error.message);
  }
};

// Главная ф-ция
const initCLI = () => {
  const args = getArgs(process.argv);
  // Вывести помощь
  if (args.h) {
    printHelp();
  }
  // Сохранить город
  if (args.s) {
  }
  // Сохранить токен
  if (args.t) {
    return saveToken(args.t);
  }
  // Вывести погоду
};

initCLI();
