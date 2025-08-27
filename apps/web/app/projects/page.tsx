import Link from "next/link";
import Image from "next/image";
import { Button } from "@repo/ui/components/button";
import { Card, CardContent } from "@repo/ui/components/card";
import { Badge } from "@repo/ui/components/badge";
import { Github, ExternalLink, Eye, Calendar } from "lucide-react";
import { fetchProjects } from "@/lib/projectService";
import { format } from "date-fns";
import { CategoryProject } from "@repo/types/project";

export default async function AllProjectsPage() {
  const projects = await fetchProjects();

  function formatCategoryName(category: string): string {
    if (category === "AIML") return "AI/ML";
    return category.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
  }

  const categories = [
    { label: "All", value: "all" },
    ...Object.values(CategoryProject).map((value) => ({
      value,
      label: formatCategoryName(value),
    })),
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-beige mt-5">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-base font-medium md:text-lg lg:text-xl 2xl:text-2xl">
            Achmad Naufal Ilyasa
          </h1>
          <nav className="flex space-x-6 text-xl">
            <Link href="/" className="hover:text-ruby hover:underline">
              About
            </Link>
            <Link href="/projects" className="hover:text-ruby hover:underline">
              Projects
            </Link>
            <Link href="#blog" className="hover:text-ruby hover:underline">
              Blog
            </Link>
            <Link
              href="mailto:naufal.ilyasa7@gmail.com"
              className="text-ruby hover:underline"
            >
              naufal.ilyasa7@gmail.com
            </Link>
          </nav>
        </div>
      </header>

      {/* All Projects Section */}
      <section id="projects" className="bg-beige py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-4xl font-medium leading-tight font-noto mb-8">
            Projects
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group hover:shadow-lg transition-all duration-300 bg-gray-100 border-0 border-gray-200"
              >
                {project.thumbnail && (
                  <div className="aspect-video overflow-hidden rounded-t-lg relative">
                    <Image
                      src={project.thumbnail.url || "/placeholder.svg"}
                      alt={`${project.title} thumbnail`}
                      fill
                      className="h-full w-full object-cover transition-transform group-hover:scale-105 duration-500 ease-in-out"
                    />
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <h4 className="text-xl font-semibold text-gray-900">
                      {project.title}
                    </h4>
                    <Badge variant="secondary">
                      {categories.map((category) => {
                        if (category.value === project.category) {
                          return category.label;
                        }
                      })}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    {project.startDate
                      ? "Start " +
                        format(new Date(project.startDate), "d") +
                        "/" +
                        format(new Date(project.startDate), "M") +
                        "/" +
                        format(new Date(project?.startDate), "yyyy")
                      : ""}
                    {project.endDate
                      ? " - End " +
                        format(new Date(project.endDate), "d") +
                        "/" +
                        format(new Date(project.endDate), "M") +
                        "/" +
                        format(new Date(project?.endDate), "yyyy")
                      : " - present"}
                  </div>
                  <p className="text-gray-900 mb-4">
                    {project.description.substring(0, 150)}...
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <div
                        key={tech.id}
                        className="flex items-center gap-1 bg-gray-100 rounded-full px-2 py-1"
                      >
                        {tech.technology.iconUrl && (
                          <Image
                            src={tech.technology.iconUrl || "/placeholder.svg"}
                            alt={tech.technology.name}
                            width={16}
                            height={16}
                            className="rounded"
                          />
                        )}
                        <span className="text-xs font-medium text-black">
                          {tech.technology.name}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/projects/${project.id}`}>
                        <Eye />
                        View Details
                      </Link>
                    </Button>
                    {project.liveUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <Link href={project.liveUrl} target="_blank">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Link>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <Link href={project.githubUrl} target="_blank">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-beige py-12 text-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Achmad Naufal Ilyasa</h4>
              <p className="text-sm">
                Full-stack web developer from Indonesia specializing in modern
                web technologies.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-ruby tracking-widest">
                Pages
              </h5>
              <div className="space-y-2 text-sm">
                <div>
                  <Link
                    href="#about"
                    className="hover:text-ruby hover:underline hover:underline-offset-1"
                  >
                    About
                  </Link>
                </div>
                <div>
                  <Link
                    href="#projects"
                    className="hover:text-ruby hover:underline hover:underline-offset-1"
                  >
                    Projects
                  </Link>
                </div>
                <div>
                  <Link
                    href="#blog"
                    className="hover:text-ruby hover:underline hover:underline-offset-1"
                  >
                    Blogs
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-ruby tracking-widest">
                Get in Touch
              </h5>
              <div className="space-y-2 text-sm">
                <div>
                  <Link
                    href="mailto:naufal.ilyasa7@gmail.com"
                    className="hover:text-ruby hover:underline hover:underline-offset-1"
                  >
                    Email
                  </Link>
                </div>
                <div>
                  <Link
                    href="https://linkedin.com/in/naufalilyasa"
                    className="hover:text-ruby hover:underline hover:underline-offset-1"
                  >
                    LinkedIn
                  </Link>
                </div>
                <div>
                  <Link
                    href="https://github.com/naufalilyasa"
                    className="hover:text-ruby hover:underline hover:underline-offset-1"
                  >
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-ruby tracking-widest">
                Location
              </h5>
              <p className="text-sm">East Jakarta, DKI Jakarta</p>
              <p className="text-sm">Indonesia</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2025 Achmad Naufal Ilyasa.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
