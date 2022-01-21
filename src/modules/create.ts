import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.modules.create({
    data: {
      name: "Autenticação",
      description: "Autenticação no NodeJs com JWT",
      CoursesModules: {
        create: {
          course: {
            connect: {
              id: "574f3660-a4d0-47ec-96c4-3ff45231c784",
            },
          },
        },
      },
    },
  });

  console.log(result);
}

main();
