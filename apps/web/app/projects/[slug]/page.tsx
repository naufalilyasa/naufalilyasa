import Link from "next/link";
import Image from "next/image";
import edjsHTML from "editorjs-html";
import { Button } from "@repo/ui/components/button";
import { Github, ExternalLink } from "lucide-react";
import { fetchProjects, fetchProjectById } from "@/lib/projectService";
import { CategoryProject } from "@repo/types/project";

export async function generateStaticParams() {
  const projects = await fetchProjects();
  // Use project ID instead of slug for static params
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  // Fetch project by ID instead of finding by slug
  const project = await fetchProjectById(params.slug);

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

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Project Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            The project you are looking for does not exist.
          </p>
          <Link href="/projects">
            <Button>Back to All Projects</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Render EditorJS content if available, fallback to description
  const edjsParser = edjsHTML();
  const projectDetailContent =
    project.projectDetail.length > 0 && project.projectDetail[0]?.content
      ? edjsParser.parse(project.projectDetail[0].content)
      : project.description;

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

      {/* Project Detail Section */}
      <section className="bg-beige py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link
            href="/projects"
            className="hover:text-ruby hover:underline mb-8 block"
          >
            &larr; Back to All Projects
          </Link>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {project.title}
          </h2>

          {project.thumbnail && (
            <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden mb-8">
              <Image
                // Use thumbnail URL from API response
                src={project.thumbnail.url || "/placeholder.svg"}
                alt={`${project.title} thumbnail`}
                fill
                className="object-cover"
              />
            </div>
          )}

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {/* Display technologies with icons from API */}
              {project.technologies.map((tech) => (
                <div
                  key={tech.id}
                  className="flex items-center gap-2 rounded-full px-3 py-1"
                >
                  {tech.technology.iconUrl && (
                    <Image
                      src={tech.technology.iconUrl || "/placeholder.svg"}
                      alt={tech.technology.name}
                      width={20}
                      height={20}
                      className="rounded"
                    />
                  )}
                  <span className="text-sm font-medium">
                    {tech.technology.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex space-x-4 mb-12">
            {project.liveUrl && (
              <Button asChild>
                <Link href={project.liveUrl} target="_blank">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Live Demo
                </Link>
              </Button>
            )}
            {project.githubUrl && (
              <Button variant="outline" asChild>
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  className="text-white"
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub Repo
                </Link>
              </Button>
            )}
          </div>

          <div className="mb-8 pb-6 border-b-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Project Information
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium text-gray-700">Category:</span>
                <span className="ml-2 text-gray-600">
                  {categories.map((category) => {
                    if (category.value === project.category) {
                      return category.label;
                    }
                  })}
                </span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Featured:</span>
                <span className="ml-2 text-gray-600">
                  {project.featured ? "Yes" : "No"}
                </span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Start Date:</span>
                <span className="ml-2 text-gray-600">
                  {new Date(project.startDate).toLocaleDateString()}
                </span>
              </div>
              {project.endDate && (
                <div>
                  <span className="font-medium text-gray-700">End Date:</span>
                  <span className="ml-2 text-gray-600">
                    {new Date(project.endDate).toLocaleDateString()}
                  </span>
                </div>
              )}
            </div>
          </div>
          <div
            className="text-lg text-gray-700 mb-8 leading-relaxed prose max-w-none"
            // Render EditorJS content as HTML
            dangerouslySetInnerHTML={{ __html: projectDetailContent }}
          />
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
