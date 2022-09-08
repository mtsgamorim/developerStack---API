import { Request, Response } from "express";
import { questionType } from "../types/questionTypes.js";
import { answersType } from "../types/answerTypes.js";
import * as questionService from "../services/questionService.js";
import * as answerService from "../services/answerService.js";

export async function createQuestion(req: Request, res: Response) {
  const question: questionType = req.body;
  await questionService.createQuestion(question);
  res.sendStatus(201);
}

export async function createAnswer(req: Request, res: Response) {
  const { answeredBy, answer } = req.body;
  const questionId = Number(req.params.id);
  const data: answersType = {
    answeredBy,
    answer,
    questionId,
  };

  await answerService.createAnswer(data);
  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  const questions = await questionService.getAllQuestions();
  res.status(200).send(questions);
}

export async function getById(req: Request, res: Response) {
  // TODO
  const id = Number(req.params.id);
  const questions = await questionService.getQuestionById(id);
  res.status(200).send(questions);
}
