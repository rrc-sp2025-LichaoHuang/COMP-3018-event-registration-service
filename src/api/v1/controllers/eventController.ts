import {Request, Response} from "express";
import { HTTP_STATUS } from "../../../../src/constants/httpConstants";

export const getHealth = (req: Request, res: Response): void => {
  res.status(HTTP_STATUS.OK).json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    version: "v1",
  });
};
