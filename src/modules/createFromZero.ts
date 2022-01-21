import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.create({
    data: {
      course: {
        create: {
          name: "Curso de VueJS",
          description: "Curso completo de VueJS",
          duration: 250,
          teacher: {
            create: {
              name: "Mayk Brito",
            },
          },
        },
      },
      module: {
        create: {
          name: "Primeiros passos",
          description: "Introdução ao VueJS",
        },
      },
    },
  });

  console.log(result);
}

main();
