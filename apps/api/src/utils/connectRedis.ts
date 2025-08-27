import config from "#/config/config.js";
import { createClient, RedisClientType } from "redis";

const redisUrl = config.redisUrl;

const redisClient: RedisClientType = createClient({
  socket: {
    reconnectStrategy: 5000,
  },
  url: redisUrl,
});

const redisConnect = async () => await redisClient.connect();

redisConnect()
  .then(() => {
    console.log("Redis connected successfully");
  })
  .catch((err: unknown) => {
    console.log("Redis client error", err);
  });

export default redisClient;
