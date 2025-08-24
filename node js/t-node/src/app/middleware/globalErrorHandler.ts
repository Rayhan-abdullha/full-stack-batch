import { ErrorRequestHandler, Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import mongoose from "mongoose";

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500;
  let message = err.message || "Something went wrong";
  let errors: any = [];

  // ✅ Handle Zod validation errors
  if (err instanceof ZodError) {
    console.log('error zod')
    statusCode = 400;
    errors = (err as ZodError<any>).issues.map((e) => ({
      path: e.path.join("."), // e.g. body.email
      message: e.message,
    }));
    message = "Validation Error";
  }

  // ✅ Handle Mongoose validation errors
  else if (err instanceof mongoose.Error.ValidationError) {
    statusCode = 400;
    errors = Object.values(err.errors).map((el: any) => ({
      path: el.path,
      message: el.message,
    }));
    message = "Mongoose Validation Error";
  }

  // ✅ Handle Mongoose CastError (invalid ObjectId, etc.)
  else if (err instanceof mongoose.Error.CastError) {
    statusCode = 400;
    errors = [
      {
        path: err.path,
        message: `Invalid ${err.path}: ${err.value}`,
      },
    ];
    message = "Invalid ID format";
  }

  // ✅ Handle Duplicate key error
  else if ((err as any).code === 11000) {
    statusCode = 400;
    const key = Object.keys((err as any).keyValue)[0];
    errors = [
      {
        path: key,
        message: `${key} must be unique`,
      },
    ];
    message = "Duplicate Key Error";
  }

  // ✅ Fallback: General Error
  else {
    errors = [
      {
        path: "",
        message: err.message || "Internal Server Error",
      },
    ];
    if (statusCode === 500) {
      message = "Internal Server Error";
    }
  }

  res.status(statusCode).json({
    success: false,
    message,
    errors,
    // stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export default errorHandler;
