import { Router } from "express";
import {
  createAnswer,
  createQuestion,
  get,
  getById,
} from "../controllers/questionController.js";
import { answerSchema } from "../schemas/answerSchema.js";
import { questionSchema } from "../schemas/questionSchema.js";
import { validateSchemaMiddleware } from "./../middlewares/validateSchema.js";

const questionRouter = Router();

questionRouter.get("/questions", get);

questionRouter.get("/questions/:id", getById);

questionRouter.post(
  "/questions",
  validateSchemaMiddleware(questionSchema),
  createQuestion
);

questionRouter.post(
  "/questions/:id/answers",
  validateSchemaMiddleware(answerSchema),
  createAnswer
);

export default questionRouter;
