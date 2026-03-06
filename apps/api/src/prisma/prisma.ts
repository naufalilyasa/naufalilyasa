import { PrismaClient } from "../generated/prisma/index.js";
import config from "../config/config.js";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
    connectionString: config.databaseUrl,
});
export const prisma = new PrismaClient({ adapter });
