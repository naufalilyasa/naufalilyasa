import { createFileRoute, Navigate } from "@tanstack/react-router";
import { LoginForm } from "../components/login/LoginForm";
import z from "zod";
import { useAuth } from "../store/auth";

export const Route = createFileRoute("/login")({
  validateSearch: z.object({
    redirect: z.string().optional(),
  }),
  component: LoginComponent,
});

function LoginComponent() {
  const { authUser } = useAuth();

  return authUser.id ? (
    <Navigate to="/" />
  ) : (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
