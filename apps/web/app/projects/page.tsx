import Link from "next/link"
import Image from "next/image"
import { Button } from "@repo/ui/components/button"
import { Card, CardContent } from "@repo/ui/components/card"
import { Badge } from "@repo/ui/components/badge"
import { Github, ExternalLink } from "lucide-react"
import { fetchProjects } from "@/lib/projectService"

export default async function AllProjectsPage() {
  const projects = await fetchProjects()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900">Achmad Naufal Ilyasa</h1>
          <nav className="flex space-x-6">
            <Link href="/#about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="/projects" className="text-gray-600 hover:text-gray-900">
              Projects
            </Link>
            <Link href="/#tech-stack" className="text-gray-600 hover:text-gray-900">
              Tech Stack
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900">
              Blog
            </Link>
            <Link href="mailto:naufal.ilyasa7@gmail.com" className="text-orange-500 hover:text-orange-600">
              naufal.ilyasa7@gmail.com
            </Link>
          </nav>
        </div>
      </header>

      {/* All Projects Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">All My Projects</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="hover:shadow-lg transition-shadow flex flex-col">
                {project.thumbnail && (
                  <div className="relative w-full h-40 bg-gray-100 rounded-t-lg overflow-hidden">
                    <Image
                      src={project.thumbnail.url || "/placeholder.svg"}
                      alt={`${project.title} thumbnail`}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <CardContent className="p-6 flex-grow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl">
                      {project.category === "FULLSTACK" && "🌐"}
                      {project.category === "FRONTEND" && "🎨"}
                      {project.category === "BACKEND" && "⚙️"}
                      {project.category === "MOBILE" && "📱"}
                      {project.category === "DESKTOP" && "💻"}
                      {project.category === "AIML" && "🤖"}
                      {project.category === "DEVOPS" && "🚀"}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">{project.description.substring(0, 150)}...</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech.id} variant="secondary" className="text-xs">
                        {tech.technology.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <div className="p-6 pt-0 flex space-x-3">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/projects/${project.id}`}>View Details</Link>
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
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/#projects">
              <Button variant="outline">Back to Featured Projects</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Achmad Naufal Ilyasa</h4>
              <p className="text-gray-400 text-sm">
                Full-stack web developer from Indonesia specializing in modern web technologies.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Pages</h5>
              <div className="space-y-2 text-sm">
                <div>
                  <Link href="/#about" className="text-gray-400 hover:text-white">
                    About
                  </Link>
                </div>
                <div>
                  <Link href="/projects" className="text-gray-400 hover:text-white">
                    Projects
                  </Link>
                </div>
                <div>
                  <Link href="/#tech-stack" className="text-gray-400 hover:text-white">
                    Tech Stack
                  </Link>
                </div>
                <div>
                  <Link href="/blog" className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Get in Touch</h5>
              <div className="space-y-2 text-sm">
                <div>
                  <Link href="mailto:naufal.ilyasa7@gmail.com" className="text-gray-400 hover:text-white">
                    Email
                  </Link>
                </div>
                <div>
                  <Link href="https://linkedin.com/in/naufalilyasa" className="text-gray-400 hover:text-white">
                    LinkedIn
                  </Link>
                </div>
                <div>
                  <Link href="https://github.com/naufalilyasa" className="text-gray-400 hover:text-white">
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Location</h5>
              <p className="text-gray-400 text-sm">East Jakarta, DKI Jakarta</p>
              <p className="text-gray-400 text-sm">Indonesia</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2025 Achmad Naufal Ilyasa. Built with Next.js and Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
