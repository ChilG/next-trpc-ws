-- CreateTable
CREATE TABLE "GlobalConfiguration" (
    "key" VARCHAR(100) NOT NULL,
    "value" VARCHAR(100) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GlobalConfiguration_pkey" PRIMARY KEY ("key")
);
