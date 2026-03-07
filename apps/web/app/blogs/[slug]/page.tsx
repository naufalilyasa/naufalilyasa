import Link from "next/link";
import Image from "next/image";
import edjsHTML from "editorjs-html";
import { Button } from "@repo/ui/components/button";
import { Calendar, User, Tag as TagIcon } from "lucide-react";
import { fetchBlogs, fetchBlogBySlug } from "@/lib/blogService";
import { format } from "date-fns";

export async function generateStaticParams() {
    const blogs = await fetchBlogs();
    return blogs
        .filter((blog) => !!blog.slug)
        .map((blog) => ({
            slug: blog.slug,
        }));
}

type BlogPageProps = Promise<{ slug: string }>;

export default async function BlogDetailPage(props: {
    params: BlogPageProps;
}) {
    const params = await props.params;
    const blog = await fetchBlogBySlug(params.slug);

    if (!blog) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-beige border-12 border-black">
                <div className="text-center p-12 border-4 border-black bg-beige shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                    <h1 className="text-6xl font-black font-noto uppercase text-black mb-4 tracking-tighter">
                        Column Retracted
                    </h1>
                    <p className="font-inter text-lg text-black mb-8 italic">
                        The editorial you are seeking is currently unavailable or has been archived.
                    </p>
                    <Button className="rounded-none border-2 border-black bg-black text-beige font-ibm uppercase font-bold tracking-widest hover:bg-beige hover:text-black transition-colors" asChild>
                        <Link href="/blogs">Return to Columns</Link>
                    </Button>
                </div>
            </div>
        );
    }

    // Render EditorJS content
    const edjsParser = edjsHTML();
    const blogContent = edjsParser.parse(blog.content);

    return (
        <div className="min-h-screen bg-beige text-black selection:bg-ruby selection:text-beige border-x-12 border-beige max-w-[80%] mx-auto">
            {/* Masthead (Header) */}
            <header className="max-w-full mx-auto px-4 md:px-8 pt-8 mb-10 w-full">
                <div className="border-b-[6px] border-black pb-4">
                    <div className="flex justify-between items-end border-b-2 border-black pb-2 mb-6">
                        <span className="font-overpass text-xs md:text-sm font-bold uppercase tracking-widest text-ruby">
                            Vol. 1 &mdash; Issue No. 1
                        </span>
                        <span className="font-overpass text-xs md:text-sm font-bold uppercase tracking-widest hidden md:inline">
                            {blog.publishedAt ? format(new Date(blog.publishedAt), "MMMM dd, yyyy") : format(new Date(blog.createdAt), "MMMM dd, yyyy")}
                        </span>
                        <span className="font-overpass text-xs md:text-sm font-bold uppercase tracking-widest text-ruby">
                            Jakarta, ID
                        </span>
                    </div>

                    <div className="text-center mb-8">
                        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black font-noto uppercase tracking-tighter leading-none text-black">
                            Achmad Naufal Ilyasa
                        </h1>
                        <p className="text-xl md:text-3xl font-inter italic mt-4 font-light text-stone-800">
                            The Web Development Inquirer
                        </p>
                    </div>

                    <nav className="flex justify-center flex-wrap gap-x-8 gap-y-4 text-sm md:text-base font-ibm uppercase tracking-widest border-t-2 border-b-2 border-black py-4 font-bold">
                        <Link href="/#about" className="hover:text-ruby hover:bg-black px-2 py-1 transition-colors">
                            Editorial
                        </Link>
                        <Link href="/projects" className="hover:text-ruby hover:bg-black px-2 py-1 transition-colors">
                            Featured Works
                        </Link>
                        <Link href="/#tech-stack" className="hover:text-ruby hover:bg-black px-2 py-1 transition-colors">
                            Tech Stack
                        </Link>
                        <Link href="/blogs" className="bg-black text-beige px-2 py-1 transition-colors">
                            Columns
                        </Link>
                    </nav>
                </div>
            </header>

            <main className="max-w-full mx-auto px-4 md:px-8 pb-16">
                <div className="flex justify-between items-center mb-8 border-b-2 border-black pb-4">
                    <Link
                        href="/blogs"
                        className="group flex items-center font-ibm text-xs uppercase font-bold tracking-widest hover:text-ruby transition-colors"
                    >
                        <span className="mr-2 group-hover:-translate-x-1 transition-transform">&larr;</span> Back to Columns
                    </Link>
                    <div className="flex gap-2 font-ibm text-xs font-bold uppercase">
                        <span className="bg-black text-beige px-2 py-1">
                            {blog.category?.name || "Uncategorized"}
                        </span>
                    </div>
                </div>

                <div className="mb-10 text-center max-w-4xl mx-auto">
                    <h2 className="text-5xl md:text-7xl font-black font-noto uppercase leading-none tracking-tight text-black mb-6">
                        {blog.title}
                    </h2>
                    <div className="flex justify-center flex-wrap items-center gap-x-6 gap-y-2 text-sm font-ibm font-bold uppercase tracking-widest text-black border-y-2 border-black py-2">
                        <span className="flex items-center gap-2">
                            <User className="w-4 h-4 text-ruby" />
                            By: {blog.author.name}
                        </span>
                        <span className="hidden md:inline text-ruby">&bull;</span>
                        <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-ruby" />
                            Published: {blog.publishedAt ? format(new Date(blog.publishedAt), "MMM dd, yyyy") : format(new Date(blog.createdAt), "MMM dd, yyyy")}
                        </span>
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-10">
                    <article className="lg:col-span-8">
                        {blog.thumbnail && (
                            <div className="relative w-full aspect-video border-[6px] border-black bg-black p-1 mb-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                                <Image
                                    src={blog.thumbnail.url || "/placeholder.svg"}
                                    alt={`${blog.title} thumbnail`}
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                    unoptimized
                                />
                            </div>
                        )}

                        <div
                            className="prose prose-stone prose-lg max-w-none text-black/90 font-inter text-justify leading-relaxed prose-headings:font-noto prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-headings:border-b-2 prose-headings:border-black prose-headings:pb-2 prose-a:text-ruby prose-a:underline-offset-4 prose-a:font-bold prose-strong:font-black prose-blockquote:border-l-4 prose-blockquote:border-black prose-blockquote:bg-beige/50 prose-blockquote:font-ibm prose-blockquote:text-sm prose-blockquote:uppercase prose-blockquote:font-bold prose-img:border-4 prose-img:border-black"
                            dangerouslySetInnerHTML={{
                                __html: Array.isArray(blogContent) ? blogContent.join('') : blogContent
                            }}
                        />
                    </article>

                    <aside className="lg:col-span-4 space-y-8">
                        <div className="border-[6px] border-double border-black p-6 bg-[#EBE7D9]">
                            <h3 className="font-noto font-black text-2xl uppercase tracking-tight mb-4 border-b-2 border-black pb-2">
                                The Ledger
                            </h3>
                            <p className="font-inter text-sm italic mb-4">
                                "{blog.excerpt}"
                            </p>
                            <div className="pt-4 border-t-2 border-black">
                                <h4 className="font-ibm text-xs font-bold uppercase mb-3 flex items-center gap-2">
                                    <TagIcon className="w-3 h-3 text-ruby" /> Tags & Classifications
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {blog.tags?.map((tag: any) => (
                                        <span key={tag.id} className="border border-black px-2 py-0.5 bg-white text-[10px] font-bold uppercase tracking-widest">
                                            #{tag.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="border-4 border-black p-6 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <h3 className="font-noto font-black text-2xl uppercase tracking-tight mb-4 border-b-4 border-black pb-2">
                                Editorial Note
                            </h3>
                            <p className="font-inter text-xs leading-relaxed text-black/80 font-medium">
                                Our columns are meticulously drafted by industry professionals. Any resemblance to real engineering challenges is entirely intentional.
                            </p>
                        </div>
                    </aside>
                </div>
            </main>

            {/* Footer (Simplified link to match) */}
            <footer className="border-t-8 border-double border-black bg-beige pt-12 pb-6 px-4 md:px-8 mt-12">
                <div className="max-w-full mx-auto">
                    <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 font-ibm text-xs font-bold uppercase tracking-widest">
                        <p>&copy; 2025 ACHMAD NAUFAL ILYASA.</p>
                        <p>All Rights Reserved. <span className="text-ruby ml-2 text-[10px]">■ VOL 1.</span></p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
