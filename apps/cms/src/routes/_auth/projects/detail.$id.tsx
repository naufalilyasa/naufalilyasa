/* eslint-disable @typescript-eslint/no-explicit-any */
import { createFileRoute } from "@tanstack/react-router";
import Editor from "../../../components/Editor";
import { useState } from "react";

export const Route = createFileRoute("/_auth/projects/detail/$id")({
  component: RouteComponent,
});

const dummyEditorJsData = {
  time: Date.now(),
  version: "2.29.0",
  blocks: [
    {
      id: "1",
      type: "header",
      data: {
        text: "Tentang Proyek Ini",
        level: 2,
      },
    },
    {
      id: "2",
      type: "paragraph",
      data: {
        text: "Proyek ini adalah sebuah aplikasi web fullstack yang memungkinkan pengguna membuat dan mengelola portofolio secara dinamis menggunakan Editor.js.",
      },
    },
    {
      id: "3",
      type: "list",
      data: {
        style: "unordered",
        items: [
          "Menggunakan React, Express, Prisma",
          "Upload gambar ke Cloudinary",
          "Mendukung konten dinamis via Editor.js",
        ],
      },
    },
    {
      id: "4",
      type: "quote",
      data: {
        text: "Sederhana tapi powerful.",
        caption: "— Developer",
        alignment: "left",
      },
    },
    {
      id: "5",
      type: "code",
      data: {
        code: `const greet = (name: string) => {\n  return \`Hello, \${name}!\`\n}`,
      },
    },
    {
      id: "6",
      type: "table",
      data: {
        content: [
          ["Fitur", "Status"],
          ["Editor.js", "✅"],
          ["Cloudinary", "✅"],
          ["Authentication", "⏳"],
        ],
      },
    },
  ],
};

function RouteComponent() {
  const [projectDetail, setProjectDetail] = useState<any>(dummyEditorJsData);

  return (
    <Editor data={projectDetail} onChange={(data) => setProjectDetail(data)} />
  );
}
