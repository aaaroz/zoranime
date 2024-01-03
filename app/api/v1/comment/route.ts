import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const { anime_mal_id, anime_title, user_image, username, user_email, comment, rating } =
    await req.json();

  const data = {
    anime_mal_id: anime_mal_id,
    anime_title: anime_title,
    user_email: user_email,
    username: username,
    user_image: user_image,
    comment: comment,
    rating: rating,
  };

  const createComment = await prisma.comment.create({
    data,
  });

  if (!createComment) {
    return Response.json({
      status: 500,
      message: "Failed to add comment",
    });
  } else
    return Response.json({
      status: 200,
      message: "Comment added successfully!",
    });
}
