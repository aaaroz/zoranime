import prisma from "@/lib/prisma";
import CommentLists from "@/components/comments";
import { HeroSmall } from "@/components/layout/hero-small";
import { authUserSession } from "@/lib/utils";
import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: "My Comments",
};

const Comments: FC = async () => {
  const user = await authUserSession();
  const comments = await prisma.comment.findMany({
    where: { user_email: user?.email as string },
  });
  const mangaComments = await prisma.mangaComment.findMany({
    where: { user_email: user?.email as string },
  });
  return (
    <>
      <HeroSmall title="My Comments" breadcrumb />
      <section className="px-5 md:px-10 py-5 bg-neutral-50 dark:bg-neutral-800">
        {comments.length === 0 ? (
          <div className="h-[60dvh]">
            <h1 className="text-xl font-medium text-center dark:text-neutral-500">
              No comments found
            </h1>
          </div>
        ) : (
          <CommentLists data={comments} dataManga={mangaComments} />
        )}
      </section>
    </>
  );
};

export default Comments;
