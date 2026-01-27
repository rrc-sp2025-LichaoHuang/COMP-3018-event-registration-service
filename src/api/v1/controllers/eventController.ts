import {Request, Response} from "express";
import { HTTP_STATUS } from "../../../../src/constants/httpConstants";
import  * as eventService  from "../services/eventService"
import { Event , Attendee , event , attendee} from "../models/eventModules"

export const getHealth = (req: Request, res: Response): void => {
  res.status(HTTP_STATUS.OK).json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    version: "v1",
  });
};

export const getAllEvent = (req: Request, res: Response): void => {
    const event = eventService.getAllEvents();
    res.status(HTTP_STATUS.OK).json({
        message:"Events retrieved.",
        count: event.length,
    })
}
