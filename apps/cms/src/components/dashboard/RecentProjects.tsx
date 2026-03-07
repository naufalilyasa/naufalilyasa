import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/card";
import { Badge } from "@repo/ui/components/badge";
import { Button } from "@repo/ui/components/button";
import { ExternalLink, Github } from "lucide-react";

import { Project } from "@repo/types/project";
import { Link } from "@tanstack/react-router";

interface RecentProjectsProps {
  projects?: Project[];
}

export function RecentProjects({ projects = [] }: RecentProjectsProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Recent Projects</CardTitle>
          <CardDescription>Your latest portfolio projects</CardDescription>
        </div>
        <Button asChild variant="outline" size="sm">
          <Link to="/projects">View All</Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg border"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.thumbnail?.url || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-sm truncate mr-2">
                    {project.title}
                  </h3>
                  <Badge variant="outline" className="capitalize text-[10px]">
                    {project.category.toLowerCase()}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mb-3 line-clamp-2 h-8">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-3 h-10 overflow-hidden">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge
                      key={tech.technology.id}
                      variant="secondary"
                      className="text-[10px]"
                    >
                      {tech.technology.name}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-[10px]">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
                <div className="flex items-center justify-between border-t pt-3 mt-1">
                  <span className="text-[10px] text-muted-foreground">
                    {new Date(project.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                  <div className="flex gap-1">
                    {project.githubUrl && (
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-7 w-7 p-0"
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Github className="h-3.5 w-3.5" />
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-7 w-7 p-0"
                        asChild
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
          {projects.length === 0 && (
            <div className="col-span-full py-10 text-center text-muted-foreground italic border rounded-lg border-dashed">
              No projects found.
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
