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
import { CategoryProject } from "@repo/types";
import { SiGithub } from "@icons-pack/react-simple-icons";

export default async function Portfolio() {
  const allProjects = await fetchProjects();
  const user = await fetchUser();

  const grouped = user?.userTechnologies?.reduce(
    (acc, item) => {
      const category = item.technology.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(item.technology);
      return acc;
    },
    {} as Record<string, (typeof user.userTechnologies)[number]["technology"][]>
  ) || {};

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

  const allBlogPosts: string[] = [];

  const featuredProjects = allProjects
    .filter((project) => project.featured)
    .slice(0, 3); // Changed to 3 for standard 3-column newspaper grid
  const latestBlogPosts = allBlogPosts.slice(0, 3);

  // Fallback if there aren't 3 featured projects, we just take the first 3
  const displayProjects = featuredProjects.length >= 3 ? featuredProjects : allProjects.slice(0, 3);

  return (
    <div className="min-h-screen bg-beige text-black selection:bg-ruby selection:text-beige border-x-[12px] border-beige max-w-[78%] mx-auto">
      {/* Masthead (Header) */}
      <header className="max-w-full mx-auto px-4 md:px-8 pt-8 mb-10 w-full">
        <div className="border-b-[6px] border-black pb-4">
          {/* Top meta bar */}
          <div className="flex justify-between items-end border-b-2 border-black pb-2 mb-6">
            <span className="font-overpass text-xs md:text-sm font-bold uppercase tracking-widest text-ruby">
              Vol. 1 &mdash; Issue No. 1
            </span>
            <span className="font-overpass text-xs md:text-sm font-bold uppercase tracking-widest hidden md:inline">
              {format(new Date(), "MMMM dd, yyyy")}
            </span>
            <span className="font-overpass text-xs md:text-sm font-bold uppercase tracking-widest text-ruby">
              Jakarta, ID
            </span>
          </div>

          {/* Title block */}
          <div className="text-center mb-8 w-full">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black font-noto uppercase tracking-tighter leading-none text-black">
              {user?.name || "Achmad Naufal Ilyasa"}
            </h1>
            <p className="text-xl md:text-3xl font-inter italic mt-4 font-light text-stone-800">
              The Web Development Inquirer
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex justify-center flex-wrap gap-x-8 gap-y-4 text-sm md:text-base font-ibm uppercase tracking-widest border-t-2 border-b-2 border-black py-4 font-bold">
            <Link href="#about" className="hover:text-ruby hover:bg-black px-2 py-1 transition-colors">
              Editorial
            </Link>
            <Link href="#projects" className="hover:bg-black hover:text-beige px-2 py-1 transition-colors">
              Featured Works
            </Link>
            <Link href="#tech-stack" className="hover:text-ruby hover:bg-black px-2 py-1 transition-colors">
              Tech Stack
            </Link>
            <Link href="#blog" className="hover:text-ruby hover:bg-black px-2 py-1 transition-colors">
              Columns
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-full mx-auto px-4 md:px-8">
        {/* Editorial Section (Hero) */}
        <section id="about" className="mb-16">
          <div className="grid md:grid-cols-12 gap-8 border-b-[6px] border-black pb-12">
            <div className="md:col-span-8">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-noto font-black uppercase leading-none mb-6 text-black tracking-tight">
                Full-Stack Engineer <br />
                <span className="italic font-light text-3xl sm:text-5xl md:text-6xl text-ruby tracking-normal">
                  Takes The Spotlight
                </span>
              </h2>

              <div className="columns-1 md:columns-2 gap-8 text-justify font-inter leading-relaxed text-black/90">
                {user?.description ? (
                  user.description.split('\n').filter(p => p.trim() !== '').map((paragraph, index) => (
                    <p key={index} className={index === 0 ? "first-letter:text-7xl first-letter:font-black first-letter:font-noto first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-ruby mb-4" : "mb-4"}>
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <>
                    <p className="first-letter:text-7xl first-letter:font-black first-letter:font-noto first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-ruby mb-4">
                      I am a Full-Stack Web Developer specializing in transforming manual, fragmented business workflows into streamlined enterprise systems. With a strong foundation in React.js, Next.js, Express, and PostgreSQL, I engineer high-performance web applications and secure REST APIs designed to solve complex operational bottlenecks.
                    </p>
                    <p className="mb-4">
                      My approach goes beyond just writing code. I am driven by Clean Code principles, MVC architecture, and a rigorous testing mindset. Whether building multi-layer approval workflows or scalable cloud infrastructures, my focus is always on engineering robust, secure digital solutions that drive real business growth.
                    </p>
                  </>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-8 font-ibm text-xs md:text-sm font-bold">
                {(user?.github || !user) && (
                  <Button variant="outline" className="border-2 border-black rounded-none uppercase tracking-wider hover:bg-black hover:text-ruby text-beige focus:ring-0 transition-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]" asChild>
                    <Link href={user?.github || "https://github.com/naufalilyasa"} target="_blank">
                      <SiGithub className="w-4 h-4 mr-2" />
                      GitHub
                    </Link>
                  </Button>
                )}
                {(user?.linkedin || !user) && (
                  <Button variant="outline" className="border-2 border-black rounded-none uppercase tracking-wider hover:bg-black hover:text-ruby text-beige focus:ring-0 transition-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]" asChild>
                    <Link href={user?.linkedin || "https://linkedin.com/in/naufalilyasa"} target="_blank">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Link>
                  </Button>
                )}
                {(user?.email || !user) && (
                  <Button variant="outline" className="border-2 border-black rounded-none uppercase tracking-wider hover:bg-black hover:text-ruby text-beige focus:ring-0 transition-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]" asChild>
                    <Link href={`mailto:${user?.email || "naufal.ilyasa7@gmail.com"}`}>
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </Link>
                  </Button>
                )}
                <Button variant="outline" className="text-ruby border-2 border-ruby rounded-none uppercase tracking-wider hover:bg-ruby hover:text-beige focus:ring-0 transition-none shadow-[2px_2px_0px_0px_rgba(164,57,57,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]" asChild>
                  <Link
                    href={user?.resume || "https://drive.google.com/file/d/1W77M9c5HOfwUD4q3BCk_PcXex6lEnU8K/view?usp=sharing"}
                    target="_blank"
                  >
                    <File className="w-4 h-4 mr-2" />
                    Resume
                  </Link>
                </Button>
              </div>
            </div>

            {/* Photo Column */}
            <div className="md:col-span-4 flex flex-col items-center border-t-[6px] md:border-t-0 md:border-l-[6px] border-black pt-8 md:pt-0 md:pl-8">
              <div className="w-full aspect-[4/5] relative border-4 border-black p-2 bg-beige mb-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <Image
                  src={user?.photoUrl || "/achmad_naufal_ilyasa.jpg"}
                  alt={user?.name || "Achmad Naufal Ilyasa"}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="font-ibm text-xs text-center uppercase font-bold tracking-wider border-y-2 border-black py-3 mt-4 w-full">
                FIG 1. Portrait of the Developer in his element.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="mb-16">
          <div className="border-b-[6px] border-black mb-8 pb-3 flex justify-between items-end">
            <h3 className="text-5xl font-noto font-black uppercase tracking-tight text-black">
              Featured Works
            </h3>
            <span className="font-ibm text-xs font-bold uppercase tracking-widest hidden md:inline bg-black text-beige px-3 py-1">
              Exclusive Access
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayProjects.map((project) => (
              <Card
                key={project.id}
                className="rounded-none border-4 border-black bg-beige shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-200 group flex flex-col h-full"
              >
                {project.thumbnail && (
                  <div className="aspect-[4/3] relative border-b-4 border-black bg-black p-1 overflow-hidden">
                    <Image
                      src={project.thumbnail.url || "/placeholder.svg"}
                      alt={`${project.title} thumbnail`}
                      fill
                      className="object-cover grayscale sm:grayscale-0 lg:grayscale lg:group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                    />
                  </div>
                )}
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="border-b-2 border-black pb-4 mb-4">
                    <div className="flex gap-2 font-ibm text-xs font-bold uppercase mb-3">
                      <span className="bg-black text-beige px-2 py-1">
                        {categories.find(c => c.value === project.category)?.label || project.category}
                      </span>
                      {project.featured && (
                        <span className="border-2 border-ruby text-ruby px-2 py-1 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-ruby rounded-full animate-pulse"></span>
                          Hot
                        </span>
                      )}
                    </div>
                    <h4 className="text-3xl font-noto font-black uppercase leading-tight line-clamp-2 text-black">
                      {project.title}
                    </h4>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-ibm font-bold uppercase text-black mb-4">
                    <Calendar className="h-4 w-4 text-ruby" />
                    <span>
                      {project.startDate ? format(new Date(project.startDate), "MMM yyyy") : ""}
                      {project.endDate ? " - " + format(new Date(project.endDate), "MMM yyyy") : " - Present"}
                    </span>
                  </div>

                  <p className="font-inter text-sm mb-6 text-black/90 text-justify leading-relaxed flex-grow">
                    {project.description.length > 150 ? project.description.substring(0, 150) + "..." : project.description}
                  </p>

                  <div className="border-t-2 border-black pt-4 mb-6">
                    <p className="font-ibm text-xs font-bold uppercase mb-2">Developed With:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <div
                          key={tech.id}
                          className="flex items-center gap-1 border border-black px-2 py-1 bg-white"
                        >
                          <span className="text-xs font-ibm font-bold text-black uppercase">
                            {tech.technology.name}
                          </span>
                        </div>
                      ))}
                      {project.technologies.length > 5 && (
                        <div className="flex items-center gap-1 border border-black px-2 py-1 bg-black text-beige">
                          <span className="text-xs font-ibm font-bold uppercase">
                            +{project.technologies.length - 5} More
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-auto font-ibm text-xs">
                    <Button variant="default" className="rounded-none font-bold uppercase border-2 border-black px-4 bg-black text-beige hover:bg-beige hover:text-black transition-colors" asChild>
                      <Link href={`/projects/${project.id}`}>
                        Read Story
                      </Link>
                    </Button>

                    {project.liveUrl && (
                      <Button variant="ghost" className="rounded-none font-bold uppercase px-2 hover:bg-transparent hover:text-ruby hover:underline underline-offset-4" asChild>
                        <Link href={project.liveUrl} target="_blank" className="text-black">
                          <ExternalLink className="w-4 h-4 mr-1 text-black" /> View Live
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 mb-8 flex justify-center">
            <Link href="/projects" className="group flex items-center gap-2 font-ibm text-sm font-bold uppercase tracking-widest text-black border-2 border-black hover:bg-black hover:text-beige px-6 py-3 transition-colors">
              Browse Full Catalog
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>
        </section>

        {/* Tech Stack & Classifieds (Blog) Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">

          {/* Tech Stack Column (Left 2 cols) */}
          <section id="tech-stack" className="lg:col-span-2 border-[6px] border-black p-6 md:p-8 bg-beige/50">
            <div className="border-b-4 border-black mb-8 pb-3 text-center">
              <h3 className="text-4xl md:text-5xl font-noto font-black uppercase text-black tracking-tight">
                Arsenal <span className="text-ruby">&amp;</span> Expertise
              </h3>
              <p className="font-ibm text-xs font-bold uppercase mt-2 tracking-widest">Tools of the trade curated for modern web delivery</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
              {Object.entries(grouped!).map(([category, techs]) => (
                <div key={category} className="border-t-2 border-black pt-4">
                  <h4 className="font-ibm font-black uppercase text-xl mb-4 text-black flex items-center justify-between">
                    <span>
                      {category.replace(/_/g, " ").toUpperCase()}
                    </span>
                    <span className="text-ruby text-sm">{techs.length} Tools</span>
                  </h4>
                  <ul className="space-y-3 font-inter text-sm">
                    {techs.map((tech, index) => (
                      <li key={index} className="flex items-center gap-3 group">
                        <div className="w-8 h-8 flex items-center justify-center border-2 border-black bg-white group-hover:bg-black transition-colors p-1">
                          <Image src={tech.iconUrl} alt={tech.name} width={20} height={20} className="group-hover:invert transition-all" />
                        </div>
                        <span className="font-bold border-b border-dotted border-black/30 flex-grow pb-1 group-hover:border-black transition-colors uppercase tracking-wide">
                          {tech.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Classifieds / Blog Column (Right col) */}
          <section id="blog" className="border-4 border-black p-6 bg-[#EBE7D9]">
            <div className="border-b-[6px] border-double border-black mb-6 pb-4 text-center">
              <h3 className="text-4xl font-noto font-black uppercase tracking-tighter">
                Classifieds
              </h3>
              <span className="font-ibm text-[10px] font-bold uppercase tracking-[0.2em] text-ruby">
                Editorials &bull; Opinions &bull; Tutorials
              </span>
            </div>

            <div className="space-y-6">
              {latestBlogPosts.length > 0 ? (
                latestBlogPosts.map((post, index) => (
                  <div key={index} className="border-b-2 border-black pb-4 group cursor-pointer">
                    <span className="font-ibm text-[10px] font-bold uppercase text-ruby mb-1 block">Article No. 0{index + 1}</span>
                    <Link
                      href="/blogs"
                      className="text-xl font-noto font-bold uppercase text-black leading-tight group-hover:text-ruby transition-colors group-hover:underline underline-offset-4 decoration-2"
                    >
                      {post}
                    </Link>
                    <p className="font-inter text-xs text-stone-700 mt-2 line-clamp-2">
                      A comprehensive deep dive into the engineering principles behind this topic and why it matters to you.
                    </p>
                  </div>
                ))
              ) : (
                <div className="py-8 text-center border-2 border-dashed border-black">
                  <p className="font-ibm text-sm uppercase font-bold text-stone-500">
                    Advertising Space <br /> Currently Available
                  </p>
                  <p className="font-inter text-xs mt-2 italic text-stone-400">
                    No editorials printed in this issue.
                  </p>
                </div>
              )}
            </div>

            {latestBlogPosts.length > 0 && (
              <div className="mt-8">
                <Button className="w-full rounded-none font-ibm font-bold uppercase tracking-widest bg-black text-beige border-2 border-black hover:bg-beige hover:text-black transition-colors" asChild>
                  <Link href="/blog">Read All Columns</Link>
                </Button>
              </div>
            )}
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t-[8px] border-double border-black bg-beige pt-12 pb-6 px-4 md:px-8">
        <div className="max-w-full mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10 border-b-4 border-black pb-12">

            <div className="lg:col-span-1">
              <h4 className="font-noto font-black text-3xl uppercase tracking-tighter mb-4">A. Naufal</h4>
              <p className="font-inter text-sm mb-6 leading-relaxed text-black/80 font-medium">
                Distributed worldwide. Providing cutting-edge web engineering and architectural solutions. Printed with digital ink.
              </p>
              <p className="font-ibm text-xs uppercase font-bold tracking-widest text-ruby">
                EST. 2025
              </p>
            </div>

            <div>
              <h5 className="font-ibm font-black uppercase text-sm mb-6 border-b-2 border-black pb-2 tracking-widest">
                Sections
              </h5>
              <div className="flex flex-col space-y-3 font-inter font-bold text-sm uppercase">
                <Link href="#about" className="hover:text-ruby hover:pl-2 transition-all flex items-center gap-2">
                  <span className="w-2 h-2 bg-black inline-block"></span> Editorial
                </Link>
                <Link href="#projects" className="hover:text-ruby hover:pl-2 transition-all flex items-center gap-2">
                  <span className="w-2 h-2 bg-black inline-block"></span> Features
                </Link>
                <Link href="#blog" className="hover:text-ruby hover:pl-2 transition-all flex items-center gap-2">
                  <span className="w-2 h-2 bg-black inline-block"></span> Classifieds
                </Link>
              </div>
            </div>

            <div>
              <h5 className="font-ibm font-black uppercase text-sm mb-6 border-b-2 border-black pb-2 tracking-widest">
                Wire Services
              </h5>
              <div className="flex flex-col space-y-3 font-inter font-bold text-sm uppercase">
                <Link href="mailto:naufal.ilyasa7@gmail.com" className="hover:text-ruby hover:underline underline-offset-4 decoration-2">
                  Telegraph (Email)
                </Link>
                <Link href="https://linkedin.com/in/naufalilyasa" className="hover:text-ruby hover:underline underline-offset-4 decoration-2">
                  Professional Network
                </Link>
                <Link href="https://github.com/naufalilyasa" className="hover:text-ruby hover:underline underline-offset-4 decoration-2">
                  Code Repository
                </Link>
              </div>
            </div>

            <div>
              <h5 className="font-ibm font-black uppercase text-sm mb-6 border-b-2 border-black pb-2 tracking-widest">
                Publishing Office
              </h5>
              <div className="font-ibm text-xs font-bold uppercase leading-relaxed text-stone-800">
                <p>East Jakarta,</p>
                <p>DKI Jakarta Province</p>
                <p className="text-black font-black mt-2">Republic of Indonesia</p>
              </div>
            </div>

          </div>

          <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 font-ibm text-xs font-bold uppercase tracking-widest">
            <p>&copy; 2025 ACHMAD NAUFAL ILYASA.</p>
            <p>All Rights Reserved. <span className="text-ruby ml-2 text-[10px]">■ VOL 1.</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
