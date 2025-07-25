import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { registerFn } from "../api/auth";

function useRegister() {
  const { data, mutateAsync, isPending, isSuccess, error } = useMutation({
    mutationKey: ["login"],
    mutationFn: registerFn,
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

export default useRegister;
