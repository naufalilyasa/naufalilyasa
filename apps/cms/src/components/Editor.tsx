import { useEffect, useRef } from "react";
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
  onChange?: (data: OutputData) => void;
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
  ({ data, setData, isLoading, isEditing, onChange }, ref) => {
    const editorRef = useRef<EditorJS | null>(null);
    const holderRef = useRef<HTMLDivElement>(null);
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
      if (isLoading || !data || !holderRef.current) return;

      // Local variable to ensure we destroy the instance created in THIS effect run
      let editorInstance: EditorJS | null = null;

      const editor = new EditorJS({
        holder: holderRef.current,
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
        onChange: async (api) => {
          const savedData = await api.saver.save();
          onChange?.(savedData);
        },
        onReady: () => {
          editorRef.current = editor;
          isInitialized.current = true;
          editor.readOnly.toggle(!isEditing);
        },
      });

      editorInstance = editor;

      return () => {
        if (editorInstance) {
          editorInstance.isReady
            .then(() => {
              if (editorInstance && typeof editorInstance.destroy === "function") {
                editorInstance.destroy();
                // Only clear the global ref if it's still pointing to this instance
                if (editorRef.current === editorInstance) {
                  editorRef.current = null;
                  isInitialized.current = false;
                }
              }
            })
            .catch((e) => console.error("Error cleaning up editor:", e));
        }
      };
    }, [params.id, isLoading]);

    // Handle readOnly mode changes without re-initializing
    useEffect(() => {
      if (editorRef.current && isInitialized.current) {
        editorRef.current.readOnly.toggle(!isEditing);
      }
    }, [isEditing]);

    if (isLoading && !data) {
      return <div>Loading...</div>;
    }

    return (
      <div
        ref={holderRef}
        className="border w-full rounded p-4 bg-white text-sm"
      />
    );
  }
);

export default Editor;
