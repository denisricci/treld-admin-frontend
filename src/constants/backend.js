export const DEV_SERVER = "http://localhost:8080/";
export const PROD_SERVER = "";
export const API = '/api/';

const isDev = true;

export const DEFAULT_SERVER = (isDev) ? DEV_SERVER : PROD_SERVER;
