-- CreateTable
CREATE TABLE "Collection" (
    "id" SERIAL NOT NULL,
    "anime_mal_id" TEXT NOT NULL,
    "anime_image_url" TEXT,
    "anime_title" TEXT,
    "user_email" TEXT NOT NULL,

    CONSTRAINT "Collection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "anime_mal_id" TEXT NOT NULL,
    "anime_title" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "user_image" TEXT,
    "comment" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MangaCollection" (
    "id" SERIAL NOT NULL,
    "mal_id" TEXT NOT NULL,
    "image_url" TEXT,
    "title" TEXT,
    "user_email" TEXT NOT NULL,

    CONSTRAINT "MangaCollection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MangaComment" (
    "id" SERIAL NOT NULL,
    "mal_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "user_image" TEXT,
    "comment" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MangaComment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Collection_anime_mal_id_user_email_key" ON "Collection"("anime_mal_id", "user_email");

-- CreateIndex
CREATE UNIQUE INDEX "MangaCollection_mal_id_user_email_key" ON "MangaCollection"("mal_id", "user_email");
