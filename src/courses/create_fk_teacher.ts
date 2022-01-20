import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Node course",
      description: "Excellent Node course",
      duration: 300,
      fk_id_teacher: "c8f072c0-7c7c-4487-9a5f-c304b1b730c1",
    },
  });

  console.log(result);
}

main();
