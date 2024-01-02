import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(req: Request) {
  try {
    const id: number = Number(req.url.split("manga/")[1]);

    await prisma.mangaCollection.delete({ where: { id: id } });

    return NextResponse.json(
      { message: "collection deleted successfully!" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        message: "Error",
        err,
      },
      {
        status: 500,
      }
    );
  }
}
