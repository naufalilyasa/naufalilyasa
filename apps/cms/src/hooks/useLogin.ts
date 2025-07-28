import { useMutation } from "@tanstack/react-query";
import { loginFn } from "../api/auth";
import { toast } from "sonner";

function useLogin() {
  const { data, mutateAsync, isPending, isSuccess, error } = useMutation({
    mutationKey: ["login"],
    mutationFn: loginFn,
    onMutate: () => {
      toast.loading("Loading...", { id: "toast-login" });
    },
    onSuccess: () => {
      toast.success("Login Successfully", { id: "toast-login" });
    },
    onError: () => {
      toast.error("Login failed", { id: "toast-login" });
    },
  });

  return { data, mutateAsync, isPending, isSuccess, error };
}

export default useLogin;
