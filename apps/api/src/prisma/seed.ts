import { TechCategory } from "../generated/prisma/index.js";
import { prisma } from "./prisma.js";
import fs from "fs";
import path from "path";
import { createId } from "@paralleldrive/cuid2";

async function main() {
  console.log("Menghapus data Project dan Technology lama...");
  await prisma.project.deleteMany({});
  await prisma.technology.deleteMany({});
  console.log("Data lama berhasil dihapus.");

  const dataPath = path.join(process.cwd(), "data", "final_icons_data.json");
  const rawData = fs.readFileSync(dataPath, "utf-8");
  const technologies = JSON.parse(rawData);

  console.log(`Memasukkan ${technologies.length} data Technology baru...`);

  const dataToInsert = technologies.map((tech: any) => ({
    id: createId(),
    code: tech.code,
    name: tech.name,
    iconUrl: tech.iconUrl,
    category: tech.category as TechCategory,
  }));

  await prisma.technology.createMany({
    data: dataToInsert,
    skipDuplicates: true,
  });
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
