export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME  || "Insta Buy";
export const APP_DESCRIPTION = "Ecommerce Platform";
export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";
export const LATEST_PRODUCTS_LIMIT =
  Number(process.env.LATEST_PRODUCTS_LIMIT) || 4;
export const PAGE_SIZE = Number(process.env.PAGE_SIZE) || 12;