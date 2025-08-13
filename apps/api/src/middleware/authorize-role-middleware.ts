import { NextFunction, Request, Response } from "express";
import { Role } from "generated/prisma/index.js";

export function authorizeRole(...allowedRoles: Role[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = res.locals.user as null | {
      createdAt: Date;
      id: string;
      name: string;
      updatedAt: Date;
      username: string;
      role: Role;
    };

    if (!user?.role) {
      return res.status(401).json({
        message: "Unauthorized: No user role found",
      });
    }

    if (!allowedRoles.includes(user.role)) {
      return res.status(403).json({
        message: `Forbidden: Requires role ${allowedRoles.join(" or ")}`,
      });
    }

    next();
  };
}
