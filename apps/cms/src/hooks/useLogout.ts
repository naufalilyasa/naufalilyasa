import { useMutation, useQuery } from "@tanstack/react-query";
import { logoutFn } from "../api/auth";
import { toast } from "sonner";
import { LogoutResponseType } from "@repo/types/auth";

export default function useLogout() {
  const { data, isPending, error, mutateAsync } =
    useMutation<LogoutResponseType>({
      mutationKey: ["logout"],
      mutationFn: logoutFn,
      onMutate: () => {
        toast.loading("Loading...", { id: "toast-logout" });
      },
      onSuccess: () => {
        toast.success("Successfully logged out", { id: "toast-logout" });
      },
      onError: (error) => {
        toast.error(error.message, { id: "toast-logout" });
      },
    });

  return { data, isPending, error, mutateAsync };
}
