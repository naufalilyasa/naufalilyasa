import bcrypt from "bcrypt";

import { prisma } from "@/prisma/prisma";
import { registerUser } from "@/services/auth-service";
import { AppError } from "@/utils/appError";

// Mock prisma dan bcrypt
jest.mock("@/prisma/prisma", () => ({
  prisma: {
    user: {
      create: jest.fn(),
      findUnique: jest.fn(),
    },
  },
}));

jest.mock("bcrypt");

describe("registerUser", () => {
  const payload = {
    name: "Naufal",
    password: "secure123",
    username: "naufaldev",
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should create a new user if username is not taken", async () => {
    (prisma.user.findUnique as jest.Mock).mockResolvedValue(null); // no user
    (bcrypt.genSalt as jest.Mock).mockResolvedValue("salt123");
    (bcrypt.hash as jest.Mock).mockResolvedValue("hashedPassword123");
    (prisma.user.create as jest.Mock).mockResolvedValue({ id: "1", ...payload, password: "hashedPassword123" });

    const result = await registerUser(payload);

    const mockedFindUnique = prisma.user.findUnique as jest.Mock;
    expect(mockedFindUnique).toHaveBeenCalledWith({
      select: { username: true },
      where: { username: payload.username },
    });

    expect(bcrypt.hash).toHaveBeenCalledWith(payload.password, "salt123");

    expect(prisma.user.create).toHaveBeenCalledWith({
      data: {
        name: payload.name,
        password: "hashedPassword123",
        username: payload.username,
      },
    });

    expect(result).toHaveProperty("result");
    expect(result.result.username).toBe(payload.username);
  });

  it("should throw an error if username already exists", async () => {
    (prisma.user.findUnique as jest.Mock).mockResolvedValue({ username: payload.username });

    await expect(registerUser(payload)).rejects.toThrow(AppError);
    await expect(registerUser(payload)).rejects.toThrow("Username naufaldev already exist.");
  });
});
