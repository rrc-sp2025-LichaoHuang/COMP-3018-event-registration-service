import express, { Express } from "express";
import router from "./api/v1/routes/eventRoutes";   

// Initialize Express application
const app: Express = express();

app.use(express.json());
// Define a route
app.use("/api/v1", router)

export default app;


