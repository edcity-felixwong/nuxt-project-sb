import axios from "axios";
import * as changeCaseKeys from "change-case/keys";

/** Axios instance */
export const $http = axios.create({
  baseURL: "https://e.star.dev.hkedcity.net",
  withCredentials: true,
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  transformResponse: [
    ...axios.defaults.transformResponse,
    (_) => changeCaseKeys.camelCase(_, Number.MAX_SAFE_INTEGER),
  ],
  transformRequest: [
    (_) => {
      console.log(`🚀 // DEBUG 🍔 ~ file: axios-instance.ts:15 ~ changeKey:`, changeCaseKeys);
      console.log(`🚀 // DEBUG 🍔 ~ file: axios-instance.ts:17 ~ _:`, _);
      return _;
    },
    (_) => changeCaseKeys.snakeCase(_, Number.MAX_SAFE_INTEGER),
    ...axios.defaults.transformRequest,
  ],
});
