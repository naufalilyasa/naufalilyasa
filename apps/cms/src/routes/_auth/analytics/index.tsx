import { createFileRoute } from "@tanstack/react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/card";
import { Badge } from "@repo/ui/components/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@repo/ui/components/tabs";
import { Progress } from "@repo/ui/components/progress";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";
import {
  TrendingUp,
  TrendingDown,
  Eye,
  Users,
  Globe,
  Download,
  Star,
  GitBranch,
  Clock,
} from "lucide-react";

export const Route = createFileRoute("/_auth/analytics/")({
  component: RouteComponent,
});

// Sample data for charts
const monthlyViews = [
  { month: "Jan", views: 1200, visitors: 800, projects: 2 },
  { month: "Feb", views: 1800, visitors: 1200, projects: 3 },
  { month: "Mar", views: 2400, visitors: 1600, projects: 1 },
  { month: "Apr", views: 3200, visitors: 2100, projects: 4 },
  { month: "May", views: 2800, visitors: 1900, projects: 2 },
  { month: "Jun", views: 3600, visitors: 2400, projects: 3 },
  { month: "Jul", views: 4200, visitors: 2800, projects: 5 },
  { month: "Aug", views: 3800, visitors: 2500, projects: 2 },
  { month: "Sep", views: 4600, visitors: 3100, projects: 4 },
  { month: "Oct", views: 5200, visitors: 3500, projects: 3 },
  { month: "Nov", views: 4800, visitors: 3200, projects: 6 },
  { month: "Dec", views: 5600, visitors: 3800, projects: 4 },
];

const trafficSources = [
  { name: "Direct", value: 35, color: "#8884d8" },
  { name: "Google", value: 28, color: "#82ca9d" },
  { name: "LinkedIn", value: 18, color: "#ffc658" },
  { name: "GitHub", value: 12, color: "#ff7300" },
  { name: "Others", value: 7, color: "#00ff88" },
];

const topProjects = [
  {
    name: "E-Commerce Platform",
    views: 2840,
    stars: 45,
    forks: 12,
    downloads: 1200,
    growth: 15.2,
  },
  {
    name: "Task Management App",
    views: 2156,
    stars: 32,
    forks: 8,
    downloads: 890,
    growth: 8.7,
  },
  {
    name: "Weather Dashboard",
    views: 1923,
    stars: 28,
    forks: 6,
    downloads: 650,
    growth: -2.3,
  },
  {
    name: "API Gateway Service",
    views: 1654,
    stars: 67,
    forks: 15,
    downloads: 2100,
    growth: 22.1,
  },
  {
    name: "Mobile Banking App",
    views: 1432,
    stars: 23,
    forks: 4,
    downloads: 340,
    growth: 5.8,
  },
];

const skillsData = [
  { skill: "React/Next.js", projects: 18, hours: 1200, level: 95 },
  { skill: "Node.js", projects: 15, hours: 980, level: 90 },
  { skill: "TypeScript", projects: 20, hours: 1100, level: 88 },
  { skill: "Python", projects: 8, hours: 560, level: 75 },
  { skill: "AWS", projects: 12, hours: 720, level: 82 },
  { skill: "Docker", projects: 10, hours: 480, level: 78 },
];

const weeklyActivity = [
  { day: "Mon", commits: 12, hours: 8.5 },
  { day: "Tue", commits: 8, hours: 6.2 },
  { day: "Wed", commits: 15, hours: 9.1 },
  { day: "Thu", commits: 6, hours: 4.8 },
  { day: "Fri", commits: 20, hours: 10.2 },
  { day: "Sat", commits: 4, hours: 2.5 },
  { day: "Sun", commits: 2, hours: 1.2 },
];

const stats = [
  {
    title: "Total Portfolio Views",
    value: "45,231",
    change: "+12.5%",
    trend: "up",
    icon: Eye,
    description: "Last 30 days",
  },
  {
    title: "Unique Visitors",
    value: "12,543",
    change: "+8.2%",
    trend: "up",
    icon: Users,
    description: "Monthly active users",
  },
  {
    title: "Project Downloads",
    value: "8,924",
    change: "+15.7%",
    trend: "up",
    icon: Download,
    description: "Total downloads",
  },
  {
    title: "GitHub Stars",
    value: "234",
    change: "-2.1%",
    trend: "down",
    icon: Star,
    description: "Across all repositories",
  },
  {
    title: "Countries Reached",
    value: "47",
    change: "+3",
    trend: "up",
    icon: Globe,
    description: "Global reach",
  },
  {
    title: "Avg. Session Duration",
    value: "4m 32s",
    change: "+18.3%",
    trend: "up",
    icon: Clock,
    description: "Time spent on portfolio",
  },
];

function RouteComponent() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Analytics</h1>
        <p className="text-muted-foreground">
          Insights and performance metrics for your portfolio
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Stats Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => (
              <Card key={stat.title}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {stat.title}
                  </CardTitle>
                  <stat.icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    {stat.trend === "up" ? (
                      <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
                    ) : (
                      <TrendingDown className="mr-1 h-3 w-3 text-red-500" />
                    )}
                    <span
                      className={
                        stat.trend === "up" ? "text-green-500" : "text-red-500"
                      }
                    >
                      {stat.change}
                    </span>
                    <span className="ml-1">{stat.description}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Charts */}
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Traffic</CardTitle>
                <CardDescription>
                  Views and visitors over the last 12 months
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={monthlyViews}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="views"
                      stackId="1"
                      stroke="#8884d8"
                      fill="#8884d8"
                    />
                    <Area
                      type="monotone"
                      dataKey="visitors"
                      stackId="1"
                      stroke="#82ca9d"
                      fill="#82ca9d"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Traffic Sources</CardTitle>
                <CardDescription>
                  Where your visitors are coming from
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={trafficSources}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) =>
                        percent ? `${name} ${(percent * 100).toFixed(0)}%` : ""
                      }
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {trafficSources.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="projects" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Projects</CardTitle>
              <CardDescription>
                Your most popular projects and their metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topProjects.map((project, index) => (
                  <div
                    key={project.name}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full">
                        <span className="text-sm font-bold text-primary">
                          #{index + 1}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold">{project.name}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            {project.views.toLocaleString()} views
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3" />
                            {project.stars} stars
                          </div>
                          <div className="flex items-center gap-1">
                            <GitBranch className="h-3 w-3" />
                            {project.forks} forks
                          </div>
                          <div className="flex items-center gap-1">
                            <Download className="h-3 w-3" />
                            {project.downloads} downloads
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div
                        className={`flex items-center gap-1 text-sm ${
                          project.growth > 0 ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {project.growth > 0 ? (
                          <TrendingUp className="h-3 w-3" />
                        ) : (
                          <TrendingDown className="h-3 w-3" />
                        )}
                        {Math.abs(project.growth)}%
                      </div>
                      <span className="text-xs text-muted-foreground">
                        vs last month
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Project Views Trend</CardTitle>
              <CardDescription>
                Monthly project views and new projects added
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyViews}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="views" fill="#8884d8" />
                  <Bar dataKey="projects" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Skills Analytics</CardTitle>
              <CardDescription>
                Your skill usage and proficiency metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {skillsData.map((skill) => (
                  <div key={skill.skill} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{skill.skill}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{skill.projects} projects</span>
                        <span>{skill.hours}h total</span>
                        <Badge variant="outline">{skill.level}%</Badge>
                      </div>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Most Used Technologies</CardTitle>
                <CardDescription>
                  Based on project count and hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={skillsData} layout="horizontal">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="skill" type="category" width={100} />
                    <Tooltip />
                    <Bar dataKey="projects" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Time Investment</CardTitle>
                <CardDescription>
                  Hours spent on each technology
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={skillsData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="hours"
                      label={({ skill, percent }) =>
                        percent ? `${skill} ${(percent * 100).toFixed(0)}%` : ""
                      }
                    >
                      {skillsData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={`hsl(${index * 60}, 70%, 50%)`}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="activity" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Commits</CardTitle>
                <CardDescription>
                  Your coding activity this week
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={weeklyActivity}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="commits" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Daily Hours</CardTitle>
                <CardDescription>Time spent coding each day</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={weeklyActivity}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="hours"
                      stroke="#82ca9d"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Activity Summary</CardTitle>
              <CardDescription>
                Your development activity overview
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-4">
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-primary">67</div>
                  <div className="text-sm text-muted-foreground">
                    Total Commits
                  </div>
                  <div className="text-xs text-green-600">+12 this week</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-primary">42.5h</div>
                  <div className="text-sm text-muted-foreground">
                    Hours Coded
                  </div>
                  <div className="text-xs text-green-600">+8.2h this week</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-primary">15</div>
                  <div className="text-sm text-muted-foreground">
                    Files Changed
                  </div>
                  <div className="text-xs text-blue-600">Across 5 projects</div>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">
                    Code Quality
                  </div>
                  <div className="text-xs text-green-600">+2% improvement</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
