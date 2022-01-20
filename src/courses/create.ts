import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Elixir course",
      description: "Excellent Elixir course",
      duration: 300,
      teacher: {
        connectOrCreate: {
          where: {
            name: "Raphael Camarda",
          },
          create: {
            name: "Raphael Camarda",
          },
        },
      },
    },
  });

  console.log(result);
}

main();
