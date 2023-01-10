/*
  Warnings:

  - You are about to drop the column `date` on the `Appointment` table. All the data in the column will be lost.
  - You are about to drop the column `paid` on the `Appointment` table. All the data in the column will be lost.
  - You are about to drop the column `bloodType` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Appointment` DROP COLUMN `date`,
    DROP COLUMN `paid`;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `bloodType`;
