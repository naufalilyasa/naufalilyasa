import request from "supertest";
import { describe, it, expect } from "vitest";
import app from "../../../app.js";

describe("Auth: Register", () => {
  it("should register a new user successfully", async () => {
    const randomStr = Math.random().toString(36).substring(7);
    const res = await request(app).post("/api/auth/register").send({
      name: "test user",
      username: `testuser_${randomStr}`,
      password: "12345678",
      passwordConfirm: "12345678",
    });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("message", "Successfully created profile");
    expect(res.body).toHaveProperty("status", "success");
    expect(res.body).toHaveProperty("statusCode", 201);
  });

  it("should fail if password and passwordConfirm do not match", async () => {
    const randomStr = Math.random().toString(36).substring(7);
    const res = await request(app).post("/api/auth/register").send({
      name: "test user",
      username: `testuser_${randomStr}`,
      password: "12345678",
      passwordConfirm: "wrongpass",
    });

    expect(res.status).toBe(400);
    expect(res.body.message).toBe("Validation failed");
    expect(res.body.status).toBe("failed");
    expect(res.body.errors).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          message: "Passwords do not match",
        }),
      ])
    );
  });
});
