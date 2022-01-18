import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.update({
    where: {
      id: "8a50a2c1-2ce2-48c4-8357-9906a35e9ef7",
    },
    data: {
      duration: 300,
    },
  });

  console.log(result);
}

main();
