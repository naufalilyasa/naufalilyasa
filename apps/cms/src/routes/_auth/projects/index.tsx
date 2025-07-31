import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/card";
import { Badge } from "@repo/ui/components/badge";
import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/components/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@repo/ui/components/tabs";
import {
  ExternalLink,
  Github,
  Search,
  Filter,
  Calendar,
  Star,
} from "lucide-react";

export const Route = createFileRoute("/_auth/projects/")({
  component: ProjectsPage,
});

const allProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and admin dashboard.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis", "AWS"],
    category: "Full Stack",
    status: "Completed",
    date: "2024-12-15",
    stars: 45,
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Collaborative task management tool with real-time updates using Socket.io. Includes team collaboration, file sharing, and project tracking features.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Next.js", "Socket.io", "MongoDB", "Tailwind CSS"],
    category: "Frontend",
    status: "In Progress",
    date: "2024-01-10",
    stars: 32,
    githubUrl: "#",
    liveUrl: "#",
    featured: false,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "Beautiful weather dashboard with data visualization and forecasting. Includes interactive maps, charts, and weather alerts.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API", "Mapbox"],
    category: "Frontend",
    status: "Completed",
    date: "2024-11-20",
    stars: 28,
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    id: 4,
    title: "API Gateway Service",
    description:
      "Microservices API gateway with authentication, rate limiting, and monitoring. Built with Node.js and Docker for scalability.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Node.js", "Express", "Docker", "Redis", "JWT"],
    category: "Backend",
    status: "Completed",
    date: "2024-10-05",
    stars: 67,
    githubUrl: "#",
    liveUrl: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Mobile Banking App",
    description:
      "React Native mobile banking application with biometric authentication, transaction history, and budget tracking features.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["React Native", "Firebase", "Expo", "TypeScript"],
    category: "Mobile",
    status: "In Progress",
    date: "2024-09-12",
    stars: 23,
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    id: 6,
    title: "Data Analytics Platform",
    description:
      "Business intelligence platform with interactive dashboards, data visualization, and automated reporting capabilities.",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["Python", "Django", "PostgreSQL", "D3.js", "Celery"],
    category: "Full Stack",
    status: "Completed",
    date: "2024-08-30",
    stars: 89,
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
  },
];

function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const categories = ["all", "Full Stack", "Frontend", "Backend", "Mobile"];
  const statuses = ["all", "Completed", "In Progress"];

  const filteredProjects = allProjects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesCategory =
      selectedCategory === "all" || project.category === selectedCategory;
    const matchesStatus =
      selectedStatus === "all" || project.status === selectedStatus;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const featuredProjects = allProjects.filter((project) => project.featured);

  const ProjectCard = ({ project }: { project: (typeof allProjects)[0] }) => (
    <Card className="group hover:shadow-lg transition-all duration-300">
      <div className="aspect-video overflow-hidden rounded-t-lg">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg">{project.title}</CardTitle>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {new Date(project.date).toLocaleDateString()}
              <Star className="h-4 w-4" />
              {project.stars}
            </div>
          </div>
          <Badge
            variant={project.status === "Completed" ? "default" : "secondary"}
          >
            {project.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-4 line-clamp-3">
          {project.description}
        </CardDescription>
        <div className="flex flex-wrap gap-1 mb-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <Badge variant="secondary">{project.category}</Badge>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" asChild>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4 mr-1" />
                Code
              </a>
            </Button>
            <Button size="sm" asChild>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4 mr-1" />
                Live
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="text-muted-foreground">
          Explore my portfolio of projects and applications
        </p>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All Projects</TabsTrigger>
          <TabsTrigger value="featured">Featured</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          {/* Filters */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Filters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category === "all" ? "All Categories" : category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select
                  value={selectedStatus}
                  onValueChange={setSelectedStatus}
                >
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    {statuses.map((status) => (
                      <SelectItem key={status} value={status}>
                        {status === "all" ? "All Status" : status}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Projects Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <Search className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  No projects found
                </h3>
                <p className="text-muted-foreground text-center">
                  Try adjusting your search terms or filters
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="featured" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
