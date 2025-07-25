import "dotenv/config";

export default {
  accessTokenExpiresIn: 60,
  accessTokenPrivateKey: process.env.JWT_ACCESS_TOKEN_PRIVATE_KEY ?? "",
  accessTokenPublicKey: process.env.JWT_ACCESS_TOKEN_PUBLIC_KEY ?? "",
  baseUrl: process.env.BASE_URL ?? "http://localhost:3003",
  frontendUrl: process.env.FRONTEND_URL ?? "http://localhost:5180",
  nodeEnv: process.env.NODE_ENV ?? "development",
  port: parseInt(process.env.PORT ?? "3003"),
  redisCacheExpiresIn: 1440,
  redisUrl: process.env.REDIS_URL,
  refreshTokenExpiresIn: 1440,
  refreshTokenPrivateKey: process.env.JWT_REFRESH_TOKEN_PRIVATE_KEY ?? "",
  refreshTokenPublicKey: process.env.JWT_REFRESH_TOKEN_PUBLIC_KEY ?? "",
};
