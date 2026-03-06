import { PrismaClient } from "../generated/prisma/index.js";
import config from "../config/config.js";

export const prisma = new PrismaClient({
    datasourceUrl: config.databaseUrl,
});
