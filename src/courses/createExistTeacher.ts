import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "React Native course",
      description: "Excellent React Native course",
      duration: 300,
      teacher: {
        connect: {
          id: "9f68fb8a-b008-4828-96e2-d4343e454c42",
        },
      },
    },
  });

  console.log(result);
}

main();
