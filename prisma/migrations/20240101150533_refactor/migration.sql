/*
  Warnings:

  - You are about to alter the column `rating` on the `mangacomment` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `mangacomment` MODIFY `rating` INTEGER NOT NULL;
