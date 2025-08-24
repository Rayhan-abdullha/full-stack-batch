import { NextFunction, Request, Response } from "express";
import { ZodObject } from "zod";

export const validateRequest =
  (schema: ZodObject) =>
    (req: Request, res: Response, next: NextFunction) => {

    try {
      schema.parse({
        body: req.body
      });
      next();
    } catch (error: any) {
      next(error)
    }
  };

