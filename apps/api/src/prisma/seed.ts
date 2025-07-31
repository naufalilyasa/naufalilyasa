import { PrismaClient } from "../../generated/prisma/index.js";

const prisma = new PrismaClient();

async function main() {
  // Urutan penghapusan harus diperhatikan untuk hindari error relasi (foreign key constraint)
  await prisma.project.deleteMany();
  await prisma.projectImage.deleteMany();
  await prisma.user.deleteMany();
  // Tambahkan deleteMany() lainnya sesuai dengan tabel kamu
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
