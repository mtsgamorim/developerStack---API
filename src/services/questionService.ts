import { questionType, questionResult } from "../types/questionTypes.js";
import * as questionRepository from "../repositories/questionRepository.js";
import * as answerRepository from "../repositories/answerRepository.js";

// TODO
export async function createQuestion(question: questionType) {
  await questionRepository.createQuestion(question);
}

export async function getAllQuestions() {
  const questions = await questionRepository.getAllQuestions();
  const result = {
    questions,
  };
  return result;
}

export async function getQuestionById(id: number) {
  const question = await questionRepository.getQuestionById(id);
  const answers = await answerRepository.getAllAnswersByQuestionId(id);
  const answersData = answers.map((item) => {
    return {
      answeredBy: item.answeredBy,
      answer: item.answer,
    };
  });

  const data: questionResult = {
    id,
    askedBy: question?.askedBy,
    question: question?.question,
    answers: answersData,
  };
  return data;
}
