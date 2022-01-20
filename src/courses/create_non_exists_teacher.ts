import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "React course",
      description: "Excellent React course",
      duration: 300,
      teacher: {
        create: {
          name: "Diego Fernandes",
        },
      },
    },
  });

  console.log(result);
}

main();
