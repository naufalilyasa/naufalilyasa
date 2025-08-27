import { expect, test } from "vitest";
import request from "supertest";
import app from "#/app.js";

test("GET /ping → should return pong", async () => {
  const res = await request(app).get("/ping");
  expect(res.status).toBe(200);
  expect(res.text).toBe("pong");
});
