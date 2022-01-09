import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Elixir course",
      description: "Excellent Elixir course",
      duration: 300,
    },
  });

  console.log(result);
}

main();
