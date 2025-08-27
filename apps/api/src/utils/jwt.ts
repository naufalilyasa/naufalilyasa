import jwt, { type JwtPayload, type SignOptions } from "jsonwebtoken";

import { AppError } from "./appError.js";

export interface UserPayload {
  id: number;
}

export const signJwt = (
  payload: object,
  privateTokenKey: string | undefined,
  options: SignOptions,
) => {
  if (!privateTokenKey) throw new AppError(500, "Invalid token key");

  const privateKey = Buffer.from(privateTokenKey, "base64").toString("ascii");

  return jwt.sign(payload, privateKey, { ...options, algorithm: "RS256" });
};

export const verifyJwt = (
  token: string,
  publicTokenKey: string,
): JwtPayload | null | string => {
  try {
    const publicKey = Buffer.from(publicTokenKey, "base64").toString("ascii");
    const decoded = jwt.verify(token, publicKey);
    return decoded;
  } catch (error) {
    console.error(error);
    return null;
  }
};
