import { PrismaClient } from "../../generated/prisma/index.js";

const prisma = new PrismaClient();

async function main() {
  console.log("✅ Seeding completed");
}

main()
  .then(() => {
    console.log("✅ Semua data berhasil dihapus.");
    return prisma.$disconnect();
  })
  .catch((e) => {
    console.error("❌ Gagal menghapus data:", e);
    return prisma.$disconnect().then(() => process.exit(1));
  });
