/*
  Warnings:

  - A unique constraint covering the columns `[alumniId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "alumniId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "User_alumniId_key" ON "User"("alumniId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_alumniId_fkey" FOREIGN KEY ("alumniId") REFERENCES "Alumni"("id") ON DELETE SET NULL ON UPDATE CASCADE;
