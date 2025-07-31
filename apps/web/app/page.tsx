"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@repo/ui/components/button";
import { Card, CardContent } from "@repo/ui/components/card";
import { Badge } from "@repo/ui/components/badge";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Server,
  Wrench,
  Database,
} from "lucide-react";
import { Noto_Serif_JP } from "next/font/google";

export const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  style: "normal",
  weight: "400",
});

export default function Portfolio() {
  const techStack = {
    frontend: [
      { name: "React", icon: "⚛️" },
      { name: "TypeScript", icon: "🔷" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "HTML", icon: "🌐" },
      { name: "CSS", icon: "💅" },
      { name: "ShadCN UI", icon: "🎯" },
    ],
    backend: [
      { name: "Express.js", icon: "🚀" },
      { name: "Node.js", icon: "💚" },
      { name: "JavaScript", icon: "📜" },
      { name: "Prisma", icon: "🔺" },
      { name: "Sequelize", icon: "🔄" },
    ],
    tools: [
      { name: "Git", icon: "📝" },
      { name: "Docker", icon: "🐳" },
      { name: "Postman", icon: "📮" },
      { name: "VS Code", icon: "💻" },
      { name: "Vercel", icon: "▲" },
    ],
    database: [
      { name: "PostgreSQL", icon: "🐘" },
      { name: "SQL", icon: "🗃️" },
    ],
  };

  const projects = [
    {
      title: "CVku Project",
      description:
        "A web-based CV builder that allows users to create professional resumes easily with real-time preview and PDF generation.",
      tech: ["React", "TypeScript", "Tailwind CSS", "ShadCN UI", "React-PDF"],
      demo: "https://cvku-fe.vercel.app",
      github: "https://github.com/naufalilyasa/cvku-fe",
      logo: "📄",
    },
    {
      title: "Circle App",
      description:
        "X (formerly Twitter) clone with full-stack implementation featuring authentication, posts, and social interactions.",
      tech: ["React", "Express.js", "TypeScript", "Prisma", "PostgreSQL"],
      demo: "https://circle-app-sage-delta.vercel.app",
      github: "https://github.com/naufalilyasa/circle-app",
      logo: "🐦",
    },
  ];

  const blogPosts = [
    "Building Modern Web Applications with React and TypeScript",
    "Full-Stack Development: From Frontend to Backend",
    "Database Design Best Practices with PostgreSQL",
    "Deploying Applications with Docker and Vercel",
    "Understanding Modern CSS with Tailwind",
    "API Development with Express.js and Prisma",
  ];

  return (
    <div className="min-h-screen bg-beige">
      {/* Header */}
      <header className="bg-beige">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900">
            Achmad Naufal Ilyasa
          </h1>
          <nav className="flex space-x-6">
            <Link href="#about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link
              href="#projects"
              className="text-gray-600 hover:text-gray-900"
            >
              Projects
            </Link>
            <Link href="#blog" className="text-gray-600 hover:text-gray-900">
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

      {/* Hero Section */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="lg:w-1/3">
            <div className="relative w-64 h-80 mx-auto lg:mx-0">
              <Image
                src="/photo.jpg"
                alt="Achmad Naufal Ilyasa"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="lg:w-2/3">
            <h2
              className={`text-4xl font-bold text-gray-900 mb-6 ${notoSerifJP}`}
            >
              {"I'm Naufal, a full-stack web developer from Indonesia."}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Informatics fresh graduate with entrepreneurial experience and
              expertise in modern web development. I specialize in building
              full-stack applications using React, TypeScript, Express.js, and
              PostgreSQL. Passionate about creating efficient, scalable
              solutions and continuously learning new technologies.
            </p>
            <div className="flex space-x-4">
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
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="bg-beige py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Featured Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow bg-dark-olive"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl">{project.logo}</div>
                    <h4 className="text-xl font-semibold text-white">
                      {project.title}
                    </h4>
                  </div>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs bg-gold"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-taupe"
                      asChild
                    >
                      <Link href={project.demo} target="_blank">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-taupe"
                      asChild
                    >
                      <Link href={project.github} target="_blank">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button
              variant="outline"
              className="bg-taupe hover:bg-dark-olive cursor-pointer"
              asChild
            >
              <Link
                href="https://tinyurl.com/portofolio-a-naufal-ilyasa-7"
                target="_blank"
              >
                See All Projects
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="tech-stack" className="bg-beige py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Tech Stack</h3>

          <div className="space-y-4">
            {/* Frontend */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="w-[100px] font-semibold flex items-center gap-1 text-gray-900">
                <Code2 className="size-6 text-blue-600" />
                <div className="flex justify-between w-full text-md">
                  <span>Frontend</span>
                  <span>:</span>
                </div>
              </span>
              {techStack.frontend.map((tech, index) => (
                <span
                  key={index}
                  className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-md shadow-sm text-gray-700 text-sm"
                >
                  <span>{tech.icon}</span>
                  <span>{tech.name}</span>
                </span>
              ))}
            </div>

            {/* Backend */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="w-[100px] font-semibold flex items-center gap-1 text-gray-900">
                <Server className="size-6 text-green-600" />
                <div className="flex justify-between w-full text-md">
                  <span>Backend</span>
                  <span>:</span>
                </div>
              </span>
              {techStack.backend.map((tech, index) => (
                <span
                  key={index}
                  className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-md shadow-sm text-gray-700 text-sm"
                >
                  <span>{tech.icon}</span>
                  <span>{tech.name}</span>
                </span>
              ))}
            </div>

            {/* Tools */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="w-[100px] font-semibold flex items-center gap-1 text-gray-900">
                <Wrench className="size-6 text-orange-600" />
                <div className="flex justify-between w-full text-md">
                  <span>Tools</span>
                  <span>:</span>
                </div>
              </span>
              {techStack.tools.map((tech, index) => (
                <span
                  key={index}
                  className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-md shadow-sm text-gray-700 text-sm"
                >
                  <span>{tech.icon}</span>
                  <span>{tech.name}</span>
                </span>
              ))}
            </div>

            {/* Database */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="w-[100px] font-semibold flex items-center gap-1 text-gray-900">
                <Database className="size-6 text-purple-600" />
                <div className="flex justify-between w-full text-md">
                  <span>Database</span>
                  <span>:</span>
                </div>
              </span>
              {techStack.database.map((tech, index) => (
                <span
                  key={index}
                  className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-md shadow-sm text-gray-700 text-sm"
                >
                  <span>{tech.icon}</span>
                  <span>{tech.name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section id="blog" className="bg-beige py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Latest Posts
          </h3>
          <div className="space-y-4">
            {blogPosts.map((post, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <Link
                  href="#"
                  className="text-lg text-gray-700 hover:text-gray-900 transition-colors hover:underline hover:underline-offset-1"
                >
                  {post}
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button
              variant="outline"
              className="bg-taupe hover:bg-dark-olive cursor-pointer"
            >
              See All Posts
            </Button>
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
