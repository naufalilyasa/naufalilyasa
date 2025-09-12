import { PrismaClient } from "../generated/prisma/index.js";
const prisma = new PrismaClient();

async function main() {
  await prisma.category.createMany({
    data: [
      {
        id: "cmfdfrqkj00013j6pxyh3llay",
        name: "Technology",
        slug: "technology",
      },
      {
        id: "cmfdfrxv400033j6pcbh5l8xf",
        name: "Programming",
        slug: "programming",
      },
      {
        id: "cmfdfs24o00053j6p5b77v5sb",
        name: "Web Development",
        slug: "web-development",
      },
      {
        id: "cmfdfs5qo00073j6p2j2jn28d",
        name: "Mobile Development",
        slug: "mobile-development",
      },
      {
        id: "cmfdfs9i800093j6pib2j5rdy",
        name: "DevOps",
        slug: "devops",
      },
      {
        id: "cmfdfsczs000b3j6pbagazahw",
        name: "Career",
        slug: "career",
      },
    ],
  });
}

main()
  .then(() => {
    console.log("Seed completed");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
