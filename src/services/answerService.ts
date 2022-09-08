import { answersType } from "../types/answerTypes.js";
import * as answerRepository from "../repositories/answerRepository.js";

export async function createAnswer(answer: answersType) {
  await answerRepository.createAnswer(answer);
}
