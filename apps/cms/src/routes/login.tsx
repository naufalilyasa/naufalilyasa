import {
  createFileRoute,
  Navigate,
  useSearch,
  redirect,
} from "@tanstack/react-router";
import { LoginForm } from "../components/auth/LoginForm";
import z from "zod";
import { useAuth } from "../store/auth";
import { meFn } from "../api/auth";
import { isAxiosError } from "axios";

export const Route = createFileRoute("/login")({
  validateSearch: z.object({
    redirect: z.string().optional(),
  }),
  loaderDeps: ({ search: { redirect: redirectUrl } }) => ({ redirectUrl }),
  loader: async ({ deps }) => {
    try {
      const me = await meFn();

      if (me.status === "success" && me.data) {
        useAuth.getState().setAuthUser(me.data);
        throw redirect({
          to: deps.redirectUrl || "/",
        });
      }
    } catch (error) {
      if (isAxiosError(error)) {
        console.error(error.response?.data);
      }
    }
  },
  component: LoginComponent,
});

function LoginComponent() {
  const { authUser } = useAuth();
  const { redirect: redirectUrl } = useSearch({ from: "/login" });

  console.log(authUser);

  return authUser ? (
    <Navigate to={redirectUrl ?? "/"} />
  ) : (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
