import { GalleryVerticalEnd } from "lucide-react";
import { cn } from "@repo/ui/lib/utils";
import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";
import { useForm } from "react-hook-form";
import {
  LoginUserDTO,
  loginUserSchema,
} from "@repo/zod-schemas/shared/auth-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/ui/components/form";
import useLogin from "../../hooks/useLogin";
import { useEffect, useLayoutEffect } from "react";
import { Link, useRouter, useSearch } from "@tanstack/react-router";
import { useAuth } from "../../store/auth";
import ErrorDisplay from "../ErrorDisplay";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();
  const search = useSearch({ from: "/login" });
  const { setAuthUser, isAuthenticate } = useAuth();

  const form = useForm<LoginUserDTO>({
    resolver: zodResolver(loginUserSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const { mutateAsync, data, isPending, isSuccess, error } = useLogin();

  useEffect(() => {
    if (!data) return;

    if (isSuccess) {
      setAuthUser(data.data);
    }
  }, [data, isSuccess, setAuthUser]);

  function onSubmit(values: LoginUserDTO) {
    mutateAsync(values);
    router.invalidate();
  }

  useLayoutEffect(() => {
    if (isAuthenticate && search.redirect) {
      router.history.push(search.redirect);
    }
  }, [isAuthenticate, router.history, search.redirect]);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center gap-2">
              <a
                href="#"
                className="flex flex-col items-center gap-2 font-medium"
              >
                <div className="flex size-8 items-center justify-center rounded-md">
                  <GalleryVerticalEnd className="size-6" />
                </div>
                <span className="sr-only">Admin Panel</span>
              </a>
              <h1 className="text-xl font-bold">Login</h1>
              <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link to="/register" className="underline underline-offset-4">
                  Register
                </Link>
              </div>
            </div>
            <ErrorDisplay error={error} />
            <div className="flex flex-col gap-6">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <div className="grid gap-3">
                    <FormItem>
                      <FormLabel htmlFor="username">Username</FormLabel>
                      <FormControl>
                        <Input
                          id="username"
                          type="text"
                          placeholder="username"
                          required
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </div>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <div className="grid gap-3">
                    <FormItem>
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <FormControl>
                        <Input
                          id="password"
                          type="password"
                          placeholder="password"
                          required
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </div>
                )}
              />
              <Button type="submit" className="w-full" disabled={isPending}>
                Login
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
