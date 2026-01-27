import { Router } from "express";
import { getAllEvent } from "../controllers/eventController";

const router = Router();

router.get("/", getAllEvent);

export default router;