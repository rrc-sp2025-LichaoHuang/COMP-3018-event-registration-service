import { Router } from "express";
import {
  getEvents,
  getEvent,
  getEventPopularity,
  createNewEvent,
  updateExistingEvent,
  deleteExistingEvent,
} from "../controllers/eventController";

const router = Router();

/**
 * GET /api/v1/events
 */
router.get("/", getEvents);

/**
 * GET /api/v1/events/:id
 */
router.get("/:id", getEvent);

/**
 * GET /api/v1/events/:id/popularity
 */
router.get("/:id/popularity", getEventPopularity);

/**
 * POST /api/v1/events
 */
router.post("/", createNewEvent);

/**
 * PUT /api/v1/events/:id
 */
router.put("/:id", updateExistingEvent);

/**
 * DELETE /api/v1/events/:id
 */
router.delete("/:id", deleteExistingEvent);

export default router;