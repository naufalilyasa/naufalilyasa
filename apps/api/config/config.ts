import "dotenv/config";
import { cleanEnv, num, str, url } from "envalid";

const env = cleanEnv(process.env, {
  API_KEY_CLOUDINARY: str(),
  API_SECRET_CLOUDINARY: str(),
  BASE_URL: url(),
  CLOUD_NAME_CLOUDINARY: str(),
  DATABASE_URL: url(),
  FRONTEND_URL: url(),
  JWT_ACCESS_TOKEN_PRIVATE_KEY: str(),
  JWT_ACCESS_TOKEN_PUBLIC_KEY: str(),
  JWT_REFRESH_TOKEN_PRIVATE_KEY: str(),
  JWT_REFRESH_TOKEN_PUBLIC_KEY: str(),
  NODE_ENV: str(),
  PORT: num(),
  REDIS_URL: url(),
});

export default {
  accessTokenExpiresIn: 60,
  accessTokenPrivateKey: env.JWT_ACCESS_TOKEN_PRIVATE_KEY,
  accessTokenPublicKey: env.JWT_ACCESS_TOKEN_PUBLIC_KEY,
  apiKeyCloudinary: env.API_KEY_CLOUDINARY,
  apiSecretCloudinary: env.API_SECRET_CLOUDINARY,
  baseUrl: env.BASE_URL,
  cloudNameCloudinary: env.CLOUD_NAME_CLOUDINARY,
  frontendUrl: env.FRONTEND_URL,
  nodeEnv: env.NODE_ENV,
  port: env.PORT,
  redisCacheExpiresIn: 1440,
  redisUrl: env.REDIS_URL,
  refreshTokenExpiresIn: 1440,
  refreshTokenPrivateKey: env.JWT_REFRESH_TOKEN_PRIVATE_KEY,
  refreshTokenPublicKey: env.JWT_REFRESH_TOKEN_PUBLIC_KEY,
};
