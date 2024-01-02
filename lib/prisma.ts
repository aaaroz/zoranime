import { type Prisma, PrismaClient } from "@prisma/client";
import { type DefaultArgs } from "@prisma/client/runtime/library";

declare global {
  var prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;
}

let prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
