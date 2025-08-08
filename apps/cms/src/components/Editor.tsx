/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Quote from "@editorjs/quote";
import CodeTool from "@editorjs/code";
import InlineCode from "@editorjs/inline-code";
import Table from "@editorjs/table";
import ImageTool from "@editorjs/image";
import { uploadImagetoCloudinary } from "../api/upload";
import { useParams } from "@tanstack/react-router";
import { forwardRef, useImperativeHandle } from "react";

type EditorProps = {
  data: OutputData;
  setData: React.Dispatch<React.SetStateAction<OutputData>>;
  isLoading: boolean;
  isEditing?: boolean;
};

const tools = {
  // NOTE: Paragraph is default tool. Declare only when you want to change paragraph option.
  // paragraph: Paragraph,
  table: Table,
  list: List,
  code: CodeTool,
  header: Header,
  quote: Quote,
  inlineCode: InlineCode,
};

export type EditorHandle = {
  save: () => Promise<OutputData>;
};

const Editor = forwardRef<EditorHandle, EditorProps>(
  ({ data, setData, isLoading, isEditing }, ref) => {
    const editorRef = useRef<EditorJS | null>(null);
    const isInitialized = useRef(false);
    const params = useParams({ from: "/_auth/projects/detail/$id" });

    useImperativeHandle(ref, () => ({
      save: async () => {
        if (editorRef.current) {
          const saved = await editorRef.current.save();
          setData(saved);
          return saved;
        }
        throw new Error("Editor not initialized");
      },
    }));

    useEffect(() => {
      if (isLoading || !data || isInitialized.current) return;
      const holder = document.getElementById("editorjs");
      if (!holder) return;

      const editor = new EditorJS({
        holder: "editorjs",
        tools: {
          ...tools,
          image: {
            class: ImageTool,
            config: {
              uploader: {
                uploadByFile: (file: File) => {
                  return uploadImagetoCloudinary(params.id, file);
                },
                uploadByUrl: (url: string) => {
                  return { success: 1, file: { url } };
                },
              },
            },
          },
        },
        data,
        onReady: () => {
          if (!editorRef.current) {
            editorRef.current = editor;
            isInitialized.current = true;
          }
        },
        readOnly: !isEditing,
      });

      return () => {
        if (
          editorRef.current &&
          typeof editorRef.current.destroy === "function"
        ) {
          editorRef.current.destroy();
          editorRef.current = null;
          isInitialized.current = false;
        }
      };
    }, [params.id, isLoading, data, setData, isEditing]);

    if (isLoading && !data) {
      return <div>Loading...</div>;
    }

    return (
      <div
        id="editorjs"
        className="border w-full rounded p-4 bg-white text-sm"
      />
    );
  }
);

export default Editor;
