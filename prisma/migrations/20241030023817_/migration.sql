-- CreateTable
CREATE TABLE "dashboard" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR NOT NULL,
    "context" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "dashboard_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "dashboard_id_key" ON "dashboard"("id");
