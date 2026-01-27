import request from "supertest";
import express from "express";
import router from "../src/api/v1/routes/eventRoutes";
import * as controller from "../src/api/v1/controllers/eventController";

// Mock the entire controller
jest.mock("../src/api/v1/controllers/eventController.ts");

const app = express();
app.use(express.json());
app.use("/api/v1", router);

describe("Get all events", () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

describe("GET /api/v1/events", () => {
	it("should call getAll controller", async () => {
		await request(app).get("/api/v1/resource");
		expect(controller.getAll).toHaveBeenCalled();
	});
});

	describe("POST /api/v1/resource", () => {
		it("should call create controller", async () => {
			await request(app).post("/api/v1/resource").send({
				/* mock data */
			});
			expect(controller.create).toHaveBeenCalled();
		});
	});

	describe("PUT /api/v1/resource/:id", () => {
		it("should call update controller", async () => {
			await request(app).put("/api/v1/resource/1").send({
				/* mock data */
			});
			expect(controller.update).toHaveBeenCalled();
		});
	});

	describe("DELETE /api/v1/resource/:id", () => {
		it("should call delete controller", async () => {
			await request(app).delete("/api/v1/resource/1");
			expect(controller.delete).toHaveBeenCalled();
		});
	});
});