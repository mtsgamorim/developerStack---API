import { questions } from "@prisma/client";
import { answersType } from "./answerTypes.js";

export type questionType = Omit<questions, "id">;

export interface questionResult {
  id: number;
  askedBy: string | undefined;
  question: string | undefined;
  answers?: { answeredBy: string; answer: string }[] | undefined;
}
