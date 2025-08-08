import { createFileRoute, Outlet } from "@tanstack/react-router";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@repo/ui/components/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@repo/ui/components/breadcrumb";
import { Separator } from "@repo/ui/components/separator";
import { AppSidebar } from "../components/dashboard/AppSidebar";
import { useEffect, useState } from "react";
import { redirect } from "@tanstack/react-router";
import { isAxiosError } from "axios";
import { meFn } from "../api/auth";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../store/auth";

export const Route = createFileRoute("/_auth")({
  loader: async ({ location }) => {
    try {
      const me = await meFn();

      if (me.status === "success") {
        return;
      } else {
        throw redirect({
          to: "/login",
          search: {
            redirect: location.href,
          },
        });
      }
    } catch (error) {
      if (isAxiosError(error)) {
        console.error(error.response?.data);
      }
      throw redirect({
        to: "/login",
        search: {
          redirect: location.href,
        },
      });
    }
  },
  component: PortfolioDashboardLayout,
});

export type PageType =
  | "dashboard"
  | "projects"
  | "profile"
  | "experience"
  | "analytics"
  | "contact";

function PortfolioDashboardLayout() {
  const [currentPage, setCurrentPage] = useState<PageType>("dashboard");
  const { data: dataMe, isLoading } = useQuery({
    queryKey: ["me"],
    queryFn: meFn,
  });
  const { setAuthUser } = useAuth();

  useEffect(() => {
    if (isLoading || !dataMe) return;
    setAuthUser(dataMe?.data);
  }, [isLoading, dataMe, setAuthUser]);

  const getPageTitle = () => {
    switch (currentPage) {
      case "projects":
        return "Projects";
      case "profile":
        return "Profile";
      case "contact":
        return "Contact";
      case "experience":
        return "Experience";
      case "analytics":
        return "Analytics";
      case "dashboard":
      default:
        return "Dashboard";
    }
  };

  return (
    <SidebarProvider>
      <AppSidebar onNavigate={setCurrentPage} currentPage={currentPage} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Portfolio</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>{getPageTitle()}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
