import {
  createFileRoute,
  Navigate,
  useNavigate,
  useSearch,
} from "@tanstack/react-router";
import { LoginForm } from "../components/auth/LoginForm";
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
  const { authUser, clearAuthUser } = useAuth();
  const navigate = useNavigate();
  const search = useSearch({ from: "/login" });

  useEffect(() => {
    if (!authUser) return;
    clearAuthUser();
    navigate({ to: search.redirect ?? "/" });
  }, [authUser, navigate, search, clearAuthUser]);

  return authUser ? (
    <Navigate to="/" />
  ) : (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
