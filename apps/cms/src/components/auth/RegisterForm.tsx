import { Button } from "@repo/ui/components/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/ui/components/form";
import { Input } from "@repo/ui/components/input";
import { cn } from "@repo/ui/lib/utils";
import { Link, useNavigate, useRouter } from "@tanstack/react-router";
import { GalleryVerticalEnd } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import {
  RegisterUserDTO,
  registerUserSchema,
} from "@repo/zod-schemas/shared/auth-schema";
import useRegister from "../../hooks/useRegister";
import { PulseLoader } from "react-spinners";
import ErrorDisplay from "../ErrorDisplay";

function RegisterForm({ className, ...props }: React.ComponentProps<"div">) {
  const router = useRouter();

  const form = useForm<RegisterUserDTO>({
    resolver: zodResolver(registerUserSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const { mutateAsync, data, isPending, isSuccess, error } = useRegister();
  console.log(error);

  const navigate = useNavigate();

  useEffect(() => {
    if (!data) return;

    if (isSuccess) {
      navigate({ to: "/login" });
    }
  }, [data, isSuccess, navigate]);

  function onSubmit(values: RegisterUserDTO) {
    mutateAsync(values);
    router.invalidate();
  }

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
                <span className="sr-only">Admin Panel.</span>
              </a>
              <h1 className="text-xl font-bold">Register</h1>
              <div className="text-center text-sm">
                Already have an account?{" "}
                <Link to="/login" className="underline underline-offset-4">
                  Login
                </Link>
              </div>
            </div>
            <ErrorDisplay error={error} />
            <div className="flex flex-col gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <div className="grid gap-3">
                    <FormItem>
                      <FormLabel htmlFor="name">Name</FormLabel>
                      <FormControl>
                        <Input
                          id="name"
                          type="text"
                          placeholder="name"
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
              <FormField
                control={form.control}
                name="passwordConfirm"
                render={({ field }) => (
                  <div className="grid gap-3">
                    <FormItem>
                      <FormLabel htmlFor="passwordConfirm">
                        Confirm Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="passwordConfirm"
                          type="password"
                          placeholder="Confirm Password"
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
                {isPending ? (
                  <PulseLoader size={10} color="#ffffff" />
                ) : (
                  "Register"
                )}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default RegisterForm;
