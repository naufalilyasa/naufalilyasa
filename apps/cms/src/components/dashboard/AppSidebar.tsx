import {
  Home,
  User,
  Briefcase,
  Mail,
  Settings,
  BarChart3,
  FolderOpen,
  AlertTriangle,
  LogOut,
  LucideProps,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@repo/ui/components/sidebar";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@repo/ui/components/avatar";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@repo/ui/components/alert-dialog";
import { PageType } from "../../routes/_auth";
import { useNavigate } from "@tanstack/react-router";
import useLogout from "../../hooks/useLogout";
import { useAuth } from "../../store/auth";

type MenuItemsType = {
  title: PageType;
  url: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
};

const menuItems: MenuItemsType[] = [
  {
    title: "dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "projects",
    url: "/projects",
    icon: FolderOpen,
  },
  {
    title: "experience",
    url: "#",
    icon: Briefcase,
  },
  {
    title: "analytics",
    url: "#",
    icon: BarChart3,
  },
  {
    title: "profile",
    url: "#",
    icon: User,
  },
  {
    title: "contact",
    url: "#",
    icon: Mail,
  },
  {
    title: "settings",
    url: "#",
    icon: Settings,
  },
];

interface AppSidebarProps {
  onNavigate: React.Dispatch<React.SetStateAction<PageType>>;
  currentPage: string;
}

export function AppSidebar({ onNavigate, currentPage }: AppSidebarProps) {
  const navigate = useNavigate();
  const { clearAuthUser } = useAuth();

  const { isPending, mutateAsync } = useLogout();

  const onLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    mutateAsync();
    clearAuthUser();
    navigate({ to: "/login" });
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-3 px-2 py-4">
          <Avatar className="h-10 w-10">
            <AvatarImage
              src="/placeholder.svg?height=40&width=40"
              alt="Profile"
            />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">John Doe</span>
            <span className="text-xs text-muted-foreground">
              Full Stack Developer
            </span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => {
                      navigate({ to: item.url });
                      onNavigate(item.title);
                    }}
                    isActive={currentPage === item.title.toLowerCase()}
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <SidebarMenuButton className="text-red-600 hover:text-red-700 hover:bg-red-50">
                  <LogOut />
                  <span>Logout</span>
                </SidebarMenuButton>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-500" />
                    Confirm Logout
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to logout? You will need to sign in
                    again to access your dashboard.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel disabled={isPending}>
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction
                    onClick={onLogout}
                    className="bg-red-600 hover:bg-red-700"
                    disabled={isPending}
                  >
                    Logout
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </SidebarMenuItem>
        </SidebarMenu>
        <div className="p-2 text-xs text-muted-foreground">
          © 2024 Portfolio Dashboard
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
