import { getKeyValue, TOKEN_DICTIONARY } from "./storage.service.js";
import axios from "axios";

// Получение данных о погоде по наз города
const getWeather = async (city) => {
  // Получение токена
  const token = await getKeyValue(TOKEN_DICTIONARY.token);

  // Ошибка если токен undefined
  if (!token) {
    throw new Error(
      "Не задан ключ API, задайте его через команду -t [API_KEY]"
    );
  }

  // Запрос
  const { data } = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: city,
        appid: token,
        lang: "ru",
        units: "metric",
      },
    }
  );

  return data;
};

export { getWeather };
