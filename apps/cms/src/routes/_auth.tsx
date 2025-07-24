import { createFileRoute } from "@tanstack/react-router";
import { redirect } from "@tanstack/react-router";
import api from "../lib/axios";
import { isAxiosError } from "axios";

export const Route = createFileRoute("/_auth")({
  beforeLoad: async ({ location }) => {
    try {
      const me = await api.get<{
        status: string;
        statusCode: number;
        data: { id: string; name: string; username: string };
      }>("/auth/me");

      if (me.data.status === "success") {
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
