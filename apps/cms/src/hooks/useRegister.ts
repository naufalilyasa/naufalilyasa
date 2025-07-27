import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { registerFn } from "../api/auth";
import { isAxiosError } from "axios";
import { ErrorResponseType } from "@repo/types/auth";

function useRegister() {
  const { data, mutateAsync, isPending, isSuccess, error } = useMutation({
    mutationKey: ["register"],
    mutationFn: registerFn,
    onMutate: () => {
      toast.loading("Loading...", { id: "register-toast" });
    },
    onSuccess: () => {
      toast.success("Registration Successfully", { id: "register-toast" });
    },
    onError: () => {
      toast.dismiss("register-toast");

      if (isAxiosError(error)) {
        const errMessage =
          (error.response?.data as ErrorResponseType).data.message ||
          "Registration failed";
        toast.error(errMessage);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    },
  });

  return { data, mutateAsync, isPending, isSuccess, error };
}

export default useRegister;
