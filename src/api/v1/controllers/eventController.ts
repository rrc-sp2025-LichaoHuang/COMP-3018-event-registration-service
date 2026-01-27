import { Request, Response } from "express";
import { HTTP_STATUS } from "../../../constants/httpConstants";
import {
  getAllEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
  calculatePopularity,
} from "../services/eventService";

/**
 * GET /api/v1/events
 */
export const getEvents = (req: Request, res: Response): void => {
  const events = getAllEvents();

  res.status(HTTP_STATUS.OK).json({
    message: "Events retrieved",
    count: events.length,
    data: events,
  });
};

/**
 * GET /api/v1/events/:id
 */
export const getEvent = (req: Request, res: Response): void => {
  const id = Number(req.params.id);
  const event = getEventById(id);

  if (!event) {
    res.status(HTTP_STATUS.NOT_FOUND).json({
      message: "Event not found",
    });
    return;
  }

  res.status(HTTP_STATUS.OK).json({
    message: "Event retrieved",
    data: event,
  });
};

/**
 * GET /api/v1/events/:id/popularity
 */
export const getEventPopularity = (req: Request, res: Response): void => {
  const id = Number(req.params.id);
  const event = getEventById(id);

  if (!event) {
    res.status(HTTP_STATUS.NOT_FOUND).json({
      message: "Event not found",
    });
    return;
  }

  const popularityData = calculatePopularity(event);

  res.status(HTTP_STATUS.OK).json({
    message: "Event popularity calculated",
    data: popularityData,
  });
};

/**
 * POST /api/v1/events
 */
export const createNewEvent = (req: Request, res: Response): void => {
  const { name, date, capacity } = req.body;

  if (!name) {
    res.status(HTTP_STATUS.BAD_REQUEST).json({
      message: "Missing required field: name",
    });
    return;
  }

  if (!date) {
    res.status(HTTP_STATUS.BAD_REQUEST).json({
      message: "Missing required field: date",
    });
    return;
  }

  if (capacity === undefined) {
    res.status(HTTP_STATUS.BAD_REQUEST).json({
      message: "Missing required field: capacity",
    });
    return;
  }

  const newEvent = createEvent(name, date, Number(capacity));

  res.status(HTTP_STATUS.CREATED).json({
    message: "Event created",
    data: newEvent,
  });
};

/**
 * PUT /api/v1/events/:id
 */
export const updateExistingEvent = (req: Request, res: Response): void => {
  const id = Number(req.params.id);

  if (!id) {
    res.status(HTTP_STATUS.BAD_REQUEST).json({
      message: "Missing or invalid event ID",
    });
    return;
  }

  const updatedEvent = updateEvent(id, req.body);

  if (!updatedEvent) {
    res.status(HTTP_STATUS.NOT_FOUND).json({
      message: "Event not found",
    });
    return;
  }

  res.status(HTTP_STATUS.OK).json({
    message: "Event updated",
    data: updatedEvent,
  });
};

/**
 * DELETE /api/v1/events/:id
 */
export const deleteExistingEvent = (req: Request, res: Response): void => {
  const id = Number(req.params.id);

  const deleted = deleteEvent(id);

  if (!deleted) {
    res.status(HTTP_STATUS.NOT_FOUND).json({
      message: "Event not found",
    });
    return;
  }

  res.status(HTTP_STATUS.OK).json({
    message: "Event deleted",
  });
};