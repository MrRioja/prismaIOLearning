import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.create({
    data: {
      fk_id_course: "85aa2d0e-cf04-46dd-b124-679121de180d",
      fk_id_module: "8f0b55d5-6422-4985-8f4d-156eab4c258b",
    },
  });

  console.log(result);
}

main();
