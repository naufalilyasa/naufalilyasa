import { PrismaClient, TechCategory } from "../../generated/prisma/index.js";
import { technologiesWithCategory } from "./transformTechData.js";
const prisma = new PrismaClient();

async function main() {
  for (const tech of technologiesWithCategory) {
    await prisma.technology.upsert({
      where: { id: tech.id },
      update: {
        name: tech.name,
        iconUrl: tech.iconUrl,
        category: tech.category as TechCategory,
      },
      create: {
        id: tech.id,
        name: tech.name,
        iconUrl: tech.iconUrl,
        category: tech.category as TechCategory,
      },
    });
  }
}

main()
  .then(() => {
    console.log("✅ Seeding selesai");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
