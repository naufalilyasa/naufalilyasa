import {
  createRootRoute,
  Outlet,
  useRouterState,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@repo/ui/styles/globals.css";
import Spinner from "../components/Spinner";
import { Toaster } from "sonner";

const queryClient = new QueryClient();

function RouterSpinner() {
  const isLoading = useRouterState({ select: (s) => s.status === "pending" });
  return <Spinner show={isLoading} size={50} />;
}

export const Route = createRootRoute({
  component: () => (
    <>
      <QueryClientProvider client={queryClient}>
        <div>
          <RouterSpinner />
        </div>
        <Toaster position="bottom-right" />
        <Outlet />
      </QueryClientProvider>
      <TanStackRouterDevtools />
    </>
  ),
});
