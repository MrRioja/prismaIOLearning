import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.delete({
    where: {
      id: "e3c3397f-d8ec-461a-8733-f06f5923a96d",
    },
  });

  console.log(result);
}

main();
