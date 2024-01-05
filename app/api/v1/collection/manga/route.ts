import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const { mal_id, image_url, title, user_email } = await req.json();

  const data = {
    mal_id: mal_id,
    image_url: image_url,
    title: title,
    user_email: user_email,
  };

  const createCollection = await prisma.mangaCollection.create({
    data,
  });

  if (!createCollection) {
    return Response.json({
      status: 500,
      message: "Failed to add collection",
    });
  } else
    return Response.json({
      status: 200,
      message: "Collection added successfully!",
    });
}
