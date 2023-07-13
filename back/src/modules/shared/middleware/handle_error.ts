import { NextFunction, Request, Response } from "express";

interface ErrorResponse {
    status: number;
    message: string;
}

export const handleError = (
    err: Error,
    _: Request,
    res: Response,
    __: NextFunction
  ) => {
    const { status, message } = handleErrorResponse(err);
  
    return res.status(status).json({
      ok: false,
      message,
    });
  };
  
  const handleErrorResponse = (err: Error): ErrorResponse => {
    let response: ErrorResponse = {
      status: 500,
      message: "Server error",
    };
  
    return response;
  };