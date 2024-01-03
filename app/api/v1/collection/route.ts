import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const { anime_mal_id, anime_image_url, anime_title, user_email } = await req.json();

  const data = {
    anime_mal_id: anime_mal_id,
    anime_image_url: anime_image_url,
    anime_title: anime_title,
    user_email: user_email,
  };

  const createCollection = await prisma.collection.create({
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
