import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.books.create({
    data: {
      name: "Sobrevivendo no inferno",
      author_id: "6eb7aefe-7d24-4407-ba35-d6636b3b07ae",
    },
  });

  console.log(result);
}

main();
