/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Quote from "@editorjs/quote";
import CodeTool from "@editorjs/code";
import InlineCode from "@editorjs/inline-code";
import Table from "@editorjs/table";

type EditorProps = {
  data?: any;
  onChange: (data: any) => void;
};

const tools = {
  // NOTE: Paragraph is default tool. Declare only when you want to change paragraph option.
  // paragraph: Paragraph,
  table: Table,
  list: List,
  // image: Image,
  code: CodeTool,
  header: Header,
  quote: Quote,
  inlineCode: InlineCode,
};

function Editor({ data, onChange }: EditorProps) {
  const ref = useRef<EditorJS | null>(null);
  const isInitialized = useRef(false);
  const onChangeRef = useRef(onChange);

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    if (isInitialized.current) return;

    if (!ref.current) {
      const editor = new EditorJS({
        holder: "editorjs",
        tools,
        data,
        onReady: () => {
          isInitialized.current = true;
          ref.current = editor;
        },
        onChange: async () => {
          const saved = await editor.save();
          onChangeRef.current(saved);
        },
      });
    }
    return () => {
      if (ref.current) {
        ref.current.destroy();
        ref.current = null;
      }
    };
  }, []);

  return <div id="editorjs" className="border rounded p-4 bg-white" />;
}

export default Editor;
