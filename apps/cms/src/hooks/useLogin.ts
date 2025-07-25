import { useMutation } from "@tanstack/react-query";
import { loginFn } from "../api/auth";
import { toast } from "sonner";

function useLogin() {
  const { data, mutateAsync, isPending, isSuccess, error } = useMutation({
    mutationKey: ["login"],
    mutationFn: loginFn,
    onMutate: () => {
      toast.loading("Loading...");
    },
    onSuccess: () => {
      toast.success("Login Successfully");
    },
    onError: () => {
      toast.error("Login failed");
    },
  });

  return { data, mutateAsync, isPending, isSuccess, error };
}

export default useLogin;
