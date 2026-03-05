import { useMutation } from "@tanstack/react-query";
import { loginFn } from "../api/auth";
import { toast } from "sonner";
import { useAuth } from "../store/auth";

function useLogin() {
  const { data, mutateAsync, isPending, error } = useMutation({
    mutationKey: ["login"],
    mutationFn: loginFn,
    onMutate: () => {
      toast.loading("Loading...", { id: "toast-login" });
    },
    onSuccess: (data) => {
      toast.success("Login Successfully", { id: "toast-login" });
      useAuth.getState().setAuthUser(data.data);
    },
    onError: () => {
      toast.error("Login failed", { id: "toast-login" });
    },
  });

  return { data, mutateAsync, isPending, error };
}

export default useLogin;
