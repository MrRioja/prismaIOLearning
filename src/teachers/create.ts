import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.teachers.create({
    data: {
      name: "Danielle Leão",
    },
  });

  console.log(result);
}

main();
