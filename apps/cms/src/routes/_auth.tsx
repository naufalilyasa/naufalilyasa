import { createFileRoute } from "@tanstack/react-router";
import { redirect } from "@tanstack/react-router";
import { isAxiosError } from "axios";
import { meFn } from "../api/auth";

export const Route = createFileRoute("/_auth")({
  beforeLoad: async ({ location }) => {
    try {
      const me = await meFn();

      if (me.status === "success") {
        return;
      } else {
        throw redirect({
          to: "/login",
          search: {
            redirect: location.href,
          },
        });
      }
    } catch (error) {
      if (isAxiosError(error)) {
        console.error(error.message);
      }
      throw redirect({
        to: "/login",
        search: {
          redirect: location.href,
        },
      });
    }
  },
});
