/*
  Warnings:

  - You are about to drop the column `phoee` on the `gyms` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "gyms" DROP COLUMN "phoee",
ADD COLUMN     "phone" TEXT;
