-- CreateTable
CREATE TABLE `MangaCollection` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mal_id` VARCHAR(191) NOT NULL,
    `image_url` VARCHAR(191) NULL,
    `title` VARCHAR(191) NULL,
    `user_email` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `MangaCollection_mal_id_user_email_key`(`mal_id`, `user_email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MangaComment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mal_id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `user_email` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `user_image` VARCHAR(191) NULL,
    `comment` VARCHAR(191) NOT NULL,
    `rating` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
