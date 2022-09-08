// TODO
import { prisma } from "../config/database.js";
import { answersType } from "../types/answerTypes.js";

export async function createAnswer(data: answersType) {
  await prisma.answers.create({ data });
}

export async function getAllAnswersByQuestionId(questionId: number) {
  const answers = await prisma.answers.findMany({
    where: {
      questionId: questionId,
    },
  });
  return answers;
}
