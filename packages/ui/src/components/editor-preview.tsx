import { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/vs2015.css";

export default function EditorPreview({ html }: { html: string }) {
  useEffect(() => {
    hljs.highlightAll();
    hljs.configure({
      languages: [
        "javascript",
        "typescript",
        "css",
        "json",
        "bash",
        "python",
        "java",
        "csharp",
        "php",
        "ruby",
        "go",
        "kotlin",
      ],
    });
  }, [html]);

  return (
    <div
      className="prose max-w-full prose-pre:bg-[#1E1E1E] prose-code:bg-[#1E1E1E]"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
