-- CreateTable
CREATE TABLE "questions" (
    "id" SERIAL NOT NULL,
    "askedby" TEXT NOT NULL,
    "question" TEXT NOT NULL,

    CONSTRAINT "questions_pkey" PRIMARY KEY ("id")
);
