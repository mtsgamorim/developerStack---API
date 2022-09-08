import { answers } from "@prisma/client";

export type answersType = Omit<answers, "id">;
