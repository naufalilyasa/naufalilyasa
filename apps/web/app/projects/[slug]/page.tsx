import Link from "next/link";
import Image from "next/image";
import edjsHTML from "editorjs-html";
import { Button } from "@repo/ui/components/button";
import { Github, ExternalLink } from "lucide-react";
import { fetchProjects, fetchProjectById } from "@/lib/projectService";

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
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900">
            Achmad Naufal Ilyasa
          </h1>
          <nav className="flex space-x-6">
            <Link href="/#about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link
              href="/projects"
              className="text-gray-600 hover:text-gray-900"
            >
              Projects
            </Link>
            <Link
              href="/#tech-stack"
              className="text-gray-600 hover:text-gray-900"
            >
              Tech Stack
            </Link>
            <Link href="/#blog" className="text-gray-600 hover:text-gray-900">
              Blog
            </Link>
            <Link
              href="mailto:naufal.ilyasa7@gmail.com"
              className="text-orange-500 hover:text-orange-600"
            >
              naufal.ilyasa7@gmail.com
            </Link>
          </nav>
        </div>
      </header>

      {/* Project Detail Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link
            href="/projects"
            className="text-blue-600 hover:underline mb-8 block"
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

          <div
            className="text-lg text-gray-700 mb-8 leading-relaxed prose max-w-none"
            // Render EditorJS content as HTML
            dangerouslySetInnerHTML={{ __html: projectDetailContent }}
          />

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {/* Display technologies with icons from API */}
              {project.technologies.map((tech) => (
                <div
                  key={tech.id}
                  className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1"
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
                <Link href={project.githubUrl} target="_blank">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub Repo
                </Link>
              </Button>
            )}
          </div>

          <div className="bg-gray-100 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Project Information
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium text-gray-700">Category:</span>
                <span className="ml-2 text-gray-600">{project.category}</span>
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
              <div>
                <span className="font-medium text-gray-700">Featured:</span>
                <span className="ml-2 text-gray-600">
                  {project.featured ? "Yes" : "No"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
