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
          id: "69837acf-8993-441d-b69f-b890ab7d3d1b",
        },
      },
    },
  });

  console.log(result);
}

main();
