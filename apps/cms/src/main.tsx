import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { ErrorComponent, RouterProvider, createRouter } from "@tanstack/react-router";
import { auth } from "./utils/auth";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import Spinner from "./components/Spinner";

// Create a new router instance
const router = createRouter({
  routeTree,
  defaultPendingComponent: () => (
    <div className={`p-2 text-2xl`}>
      <Spinner size={50} />
    </div>
  ),
  defaultErrorComponent: ({ error }) => <ErrorComponent error={error} />,
  context: {
    auth: undefined!, // We'll inject this when we render
  },
  defaultPreload: "intent",
  scrollRestoration: true,
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider
        router={router}
        defaultPreload="intent"
        context={{
          auth,
        }}
      />
    </StrictMode>
  );
}
