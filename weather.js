#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { printHelp } from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.service.js";

const initCLI = () => {
  const args = getArgs(process.argv);
  console.log(args);
  // Вывести помощь
  if (args.h) {
    printHelp();
  }
  // Сохранить город
  if (args.s) {
  }
  // Созранить токен
  if (args.t) {
    saveKeyValue('token', args.t)
  }
  // Вывести погоду
};

initCLI();
