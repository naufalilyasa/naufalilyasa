import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/card";
import { Eye, Star, Download } from "lucide-react";

import { DashboardStats } from "../../api/analytics";

interface StatsCardsProps {
  data?: DashboardStats;
}

export function StatsCards({ data }: StatsCardsProps) {
  const stats = [
    {
      title: "Total Portfolio Views",
      value: data?.totalProfileViews?.toLocaleString() ?? "0",
      icon: Eye,
      color: "text-blue-600",
    },
    {
      title: "Project Views",
      value: data?.totalProjectViews?.toLocaleString() ?? "0",
      icon: Star,
      color: "text-green-600",
    },
    {
      title: "Total Projects",
      value: data?.totalProjects?.toLocaleString() ?? "0",
      icon: Star,
      color: "text-purple-600",
    },
    {
      title: "Resume Downloads",
      value: data?.totalDownloads?.toLocaleString() ?? "0",
      icon: Download,
      color: "text-orange-600",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">
              Across all platforms
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
