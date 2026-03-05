/* eslint-disable @typescript-eslint/no-unused-vars */
import { UserType } from "@repo/types/auth";

import { Role } from "../generated/prisma/index.js";

declare global {
    namespace Express {
        interface Locals {
            user?: UserType & { role?: Role };
        }
    }
}
