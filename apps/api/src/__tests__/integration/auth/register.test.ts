import request from "supertest";
import { describe, it, expect } from "vitest";
import app from "../../../app.js";

describe("Auth: Register", () => {
  it("should register a new user successfully", async () => {
    const res = await request(app).post("/api/auth/register").send({
      name: "test",
      username: "Test1",
      password: "12345678",
      passwordConfirm: "12345678",
    });

    expect(res.status).toBe(200);

    // Response shape
    expect(res.body).toHaveProperty("data");
    expect(res.body).toHaveProperty("message", "User registered successfully");
    expect(res.body).toHaveProperty("status", "success");
    expect(res.body).toHaveProperty("statusCode", 200);

    // Data fields
    expect(res.body.data).toHaveProperty("id");
    expect(typeof res.body.data.id).toBe("string");

    expect(res.body.data.name).toBe("test");
    expect(res.body.data.username).toBe("test1"); // lowercase
  });

  it("should fail if password and passwordConfirm do not match", async () => {
    const res = await request(app).post("/api/auth/register").send({
      name: "test",
      username: "Test1",
      password: "12345678",
      passwordConfirm: "wrongpass",
    });

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty("message", "Passwords do not match");
    expect(res.body.status).toBe("fail");
    expect(res.body.statusCode).toBe(400);
  });
});
