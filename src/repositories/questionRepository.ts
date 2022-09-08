// TODO
import { prisma } from "../config/database.js";
import { questionType } from "../types/questionTypes.js";

export async function createQuestion(data: questionType) {
  await prisma.questions.create({ data });
}

export async function getAllQuestions() {
  const questions = await prisma.questions.findMany();
  return questions;
}

export async function getQuestionById(id: number) {
  const question = await prisma.questions.findFirst({
    where: {
      id: id,
    },
  });
  return question;
}
