import { createFileRoute, Navigate, useNavigate } from "@tanstack/react-router";
import { LoginForm } from "../components/login/LoginForm";
import z from "zod";
import { useAuth } from "../store/auth";
import { useEffect } from "react";

export const Route = createFileRoute("/login")({
  validateSearch: z.object({
    redirect: z.string().optional(),
  }),
  component: LoginComponent,
});

function LoginComponent() {
  const { authUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authUser) return;
    navigate({ to: "/" });
  }, [authUser, navigate]);

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
