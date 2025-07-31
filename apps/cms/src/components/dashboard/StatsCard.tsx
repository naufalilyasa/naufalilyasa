import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/card";
import { Eye, Users, Star, Download } from "lucide-react";

const stats = [
  {
    title: "Total Views",
    value: "12,543",
    change: "+12%",
    icon: Eye,
    color: "text-blue-600",
  },
  {
    title: "Projects",
    value: "24",
    change: "+3",
    icon: Star,
    color: "text-green-600",
  },
  {
    title: "Followers",
    value: "1,234",
    change: "+5%",
    icon: Users,
    color: "text-purple-600",
  },
  {
    title: "Downloads",
    value: "856",
    change: "+18%",
    icon: Download,
    color: "text-orange-600",
  },
];

export function StatsCards() {
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
              <span className="text-green-600">{stat.change}</span> from last
              month
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
