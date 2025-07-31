import { createFileRoute } from "@tanstack/react-router";
import { StatsCards } from "../../components/dashboard/StatsCard";
import { ActivityChart } from "../../components/dashboard/ActivityChart";
import { RecentProjects } from "../../components/dashboard/RecentProjects";
import { SkillsSection } from "../../components/dashboard/SkillsSection";

export const Route = createFileRoute("/_auth/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="grid auto-rows-min gap-4">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="md:col-span-2">
          <StatsCards />
        </div>
        <div className="md:col-span-1">
          <ActivityChart />
        </div>
      </div>
      <div className="grid gap-4">
        <RecentProjects />
      </div>
      <div className="grid gap-4">
        <SkillsSection />
      </div>
    </div>
  );
}
