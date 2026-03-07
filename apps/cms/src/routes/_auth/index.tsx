import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { StatsCards } from "../../components/dashboard/StatsCard";
import { RecentProjects } from "../../components/dashboard/RecentProjects";
import { getDashboardStatsFn } from "../../api/analytics";
import { getAllProjectsFn } from "../../api/project";
import { getUserByIdFn } from "../../api/user";
import { useAuth } from "../../store/auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/card";
import { Badge } from "@repo/ui/components/badge";
import { Progress } from "@repo/ui/components/progress";
import { Loader2, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/_auth/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { authUser } = useAuth();

  const { data: stats, isLoading: statsLoading } = useQuery({
    queryKey: ["dashboard-stats"],
    queryFn: getDashboardStatsFn,
  });

  const { data: projects, isLoading: projectsLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: getAllProjectsFn,
  });

  const { data: profile, isLoading: profileLoading } = useQuery({
    queryKey: ["profile", authUser?.id],
    queryFn: () => getUserByIdFn(authUser?.id as string),
    enabled: !!authUser?.id,
  });

  const isLoading = statsLoading || projectsLoading || profileLoading;

  if (isLoading) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  // Sort project views for the breakdown
  const topProjects = [...(stats?.projectViews || [])].sort((a, b) => b.views - a.views).slice(0, 5);
  const maxViews = Math.max(...topProjects.map(p => p.views), 1);

  return (
    <div className="flex flex-col gap-6 p-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard Overview</h1>
        <p className="text-muted-foreground">Welcome back, {authUser?.name}. Here's what's happening today.</p>
      </div>

      <StatsCards data={stats} />

      <div className="grid gap-6 md:grid-cols-2">
        <RecentProjects projects={projects?.filter(p => p.featured)} />

        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="space-y-1">
                <CardTitle className="text-lg">Views per Project</CardTitle>
                <CardDescription>Engagement breakdown of your work</CardDescription>
              </div>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topProjects.length > 0 ? (
                  topProjects.map((project) => (
                    <div key={project.id} className="space-y-1.5">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium truncate w-32 md:w-48">{project.title}</span>
                        <span className="text-muted-foreground">{project.views} views</span>
                      </div>
                      <Progress value={(project.views / maxViews) * 100} className="h-1.5" />
                    </div>
                  ))
                ) : (
                  <div className="py-6 text-center text-sm text-muted-foreground italic">
                    No view data yet.
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Technologies</CardTitle>
              <CardDescription>Current stack from your profile</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {profile?.userTechnologies && profile.userTechnologies.length > 0 ? (
                  profile.userTechnologies.map((item) => (
                    <Badge key={item.technology.id} variant="secondary" className="px-3 py-1">
                      {item.technology.name}
                    </Badge>
                  ))
                ) : (
                  <div className="py-2 text-sm text-muted-foreground italic">
                    No technologies added to profile.
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
