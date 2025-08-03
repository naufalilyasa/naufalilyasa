-- DropForeignKey
ALTER TABLE "public"."ProjectTechnology" DROP CONSTRAINT "ProjectTechnology_projectId_fkey";

-- AddForeignKey
ALTER TABLE "public"."ProjectTechnology" ADD CONSTRAINT "ProjectTechnology_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "public"."Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
