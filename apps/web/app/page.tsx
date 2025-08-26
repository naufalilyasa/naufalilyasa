import Image from "next/image";
import Link from "next/link";
import { Button } from "@repo/ui/components/button";
import { Card, CardContent } from "@repo/ui/components/card";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  File,
  Eye,
  Calendar,
} from "lucide-react";
import { fetchProjects } from "@/lib/projectService";
import { format } from "date-fns";
import { fetchUser } from "@/lib/userService";
import React from "react";
import { CategoryProject } from "@repo/types/project";
import { Badge } from "@repo/ui/components/badge";

export default async function Portfolio() {
  const allProjects = await fetchProjects();
  const user = await fetchUser();

  const grouped = user?.userTechnologies.reduce(
    (acc, item) => {
      const category = item.technology.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(item.technology);
      return acc;
    },
    {} as Record<string, (typeof user.userTechnologies)[number]["technology"][]>
  );

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

  // const allBlogPosts = [
  //   "Understanding React's useEffect Hook",
  //   "Building RESTful APIs with Express.js",
  //   "A Beginner's Guide to TypeScript",
  //   "Deploying Node.js Applications on Heroku",
  //   "Optimizing Performance in React Applications",
  // ];
  const allBlogPosts: string[] = [];

  const featuredProjects = allProjects
    .filter((project) => project.featured)
    .slice(0, 2);
  const latestBlogPosts = allBlogPosts.slice(0, 3);

  return (
    <div className="min-h-screen bg-beige">
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

      {/* Hero Section */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="lg:w-1/3">
            <div className="relative w-94 h-110 mx-auto lg:mx-0">
              <Image
                src="/photo.jpg"
                alt="Achmad Naufal Ilyasa"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="mt-20 lg:w-2/3">
            <h2 className={`text-4xl font-light mb-6 leading-tight font-noto`}>
              I&apos;m Naufal, a full-stack web developer.
            </h2>
            <p className="text-lg mb-8 leading-relaxed">
              Full Stack Web Developer with a strong foundation in building
              scalable web applications and REST APIs. Skilled in Express.js,
              TypeScript, PostgreSQL, React, Tailwind CSS, and modern tooling
              for cloud deployment and CI/CD. Passionate about delivering clean,
              efficient, and maintainable solutions across both frontend and
              backend development.
            </p>
            <div className="flex space-x-4 text-white">
              <Button variant="outline" size="sm" asChild>
                <Link href="https://github.com/naufalilyasa" target="_blank">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link
                  href="https://linkedin.com/in/naufalilyasa"
                  target="_blank"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="mailto:naufal.ilyasa7@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link
                  href="https://drive.google.com/file/d/1W77M9c5HOfwUD4q3BCk_PcXex6lEnU8K/view?usp=sharing"
                  target="_blank"
                >
                  <File className="w-4 h-4 mr-2" />
                  Resume
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="bg-beige py-16">
        <div className="max-w-6xl mx-auto px-4 border-b-1">
          <h3 className="text-4xl font-medium leading-tight font-noto mb-8">
            Featured Projects
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
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
          <div className="font-overpass text-ruby hover:underline text-center my-8">
            <Link href="/projects">See All Projects</Link>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="tech-stack" className="bg-beige py-16">
        <div className="max-w-6xl mx-auto px-4 border-b-1">
          <h3 className="text-4xl font-medium leading-tight font-noto mb-8">
            Tech Stack
          </h3>

          <div className="grid grid-cols-[150px_15px_1fr] gap-y-2 text-sm text-gray-900 mb-8">
            {Object.entries(grouped!).map(([category, techs]) => (
              <React.Fragment key={category}>
                <div className="font-medium text-lg">
                  {category
                    .replace(/_/g, " ")
                    .toLowerCase()
                    .replace(/\b\w/g, (c) => c.toUpperCase())}
                </div>
                <div className="text-right mr-2 font-medium text-lg">: </div>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-1 px-1 py-1 text-gray-700 text-sm"
                    >
                      <Image src={tech.iconUrl} alt="" width={23} height={23} />
                      <span>{tech.name}</span>
                    </span>
                  ))}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section id="blog" className="bg-beige py-16">
        <div className="max-w-6xl mx-auto px-4 border-b-1">
          <h3 className="text-4xl font-medium leading-tight font-noto mb-8">
            Latest Posts
          </h3>
          <div className="space-y-4">
            {latestBlogPosts.length > 0 ? (
              latestBlogPosts.map((post, index) => (
                <div key={index} className="border-b border-black pb-4">
                  <Link
                    href="#"
                    className="text-lg text-gray-700 hover:text-gray-900 transition-colors hover:underline hover:underline-offset-1"
                  >
                    {post}
                  </Link>
                </div>
              ))
            ) : (
              <div className="pb-4">
                <p className="text-lg text-gray-700 hover:text-gray-900 transition-colors">
                  No posts available.
                </p>
              </div>
            )}
          </div>
          {latestBlogPosts.length > 0 ? (
            <div className="font-overpass text-ruby hover:underline text-center my-8">
              <Link href="/blog">See All Posts</Link>
            </div>
          ) : (
            <></>
          )}
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
