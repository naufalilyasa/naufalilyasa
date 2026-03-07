import { createFileRoute, useParams } from "@tanstack/react-router";
import { useMemo, useEffect, useRef, useState } from "react";
import Editor, { EditorHandle } from "../../../components/Editor";
import { OutputData } from "@editorjs/editorjs";
import edjsHTML from "editorjs-html";
import EditorPreview from "@repo/ui/components/editor-preview";
import { useMutation, useQuery } from "@tanstack/react-query";
import { editProjectFn, getProjectByIdFn } from "../../../api/project";

import { Skeleton } from "@repo/ui/components/skeleton";
import { Button } from "@repo/ui/components/button";
import { Badge } from "@repo/ui/components/badge";
import { Project } from "@repo/types/project";
import { toast } from "sonner";
// import EditorPreviewPrismjs from "@repo/ui/components/editor-preview-prismjs";

export const Route = createFileRoute("/_auth/projects/detail/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  // `localDetail` tracks live edits — starts null until API data is ready
  const [localDetail, setLocalDetail] = useState<OutputData | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const editorRef = useRef<EditorHandle>(null);
  const params = useParams({ from: "/_auth/projects/detail/$id" });

  const { data: dataProjectDetail, isLoading } = useQuery({
    queryKey: ["projectDetail", params.id],
    queryFn: async () => await getProjectByIdFn(params.id),
  });

  // Derive the initial content from the API response
  const EMPTY_DETAIL = useMemo<OutputData>(() => ({
    time: Date.now(),
    blocks: [],
    version: "2.30.8"
  }), []);

  const initialContent = useMemo<OutputData>(() => {
    const content = dataProjectDetail?.projectDetail?.[0]?.content;
    return content ?? EMPTY_DETAIL;
  }, [dataProjectDetail, EMPTY_DETAIL]);

  // 1. Reset when switching projects
  useEffect(() => {
    setLocalDetail(null);
  }, [params.id]);

  // 2. Set content when data is ready (runs after reset in same cycle is fine)
  useEffect(() => {
    if (isLoading || !dataProjectDetail) return;
    setLocalDetail(initialContent);
  }, [params.id, isLoading, initialContent]); // eslint-disable-line react-hooks/exhaustive-deps

  // The content to display/save is localDetail
  const projectDetail = localDetail;


  const edjsParser = useMemo(() => edjsHTML(), []);
  const htmlBlocks = useMemo(() => {
    if (!localDetail) return [];
    try {
      const parsed = edjsParser.parse(localDetail);
      return Array.isArray(parsed) ? (parsed as string[]) : [String(parsed)];
    } catch (e) {
      console.error("Failed to parse editor data:", e);
      return [];
    }
  }, [localDetail, edjsParser]);

  const { mutate, isPending: isSaving } = useMutation({
    mutationKey: ["saveProjectDetail", params.id],
    mutationFn: async (data: Project) => {
      if (!projectDetail) throw new Error("Project detail is undefined");

      return await editProjectFn({
        projectId: params.id,
        data: {
          ...data,
          technologies: data.technologies.map((tech) => tech.technology.id),
          projectDetail: {
            time: projectDetail.time ?? Date.now(),
            blocks: projectDetail.blocks ?? [],
            version: projectDetail.version ?? "2.30.8",
          },
          thumbnail: undefined,
        },
      });
    },
    onSuccess: () => {
      toast.success("Project detail saved successfully");
      setIsEditing(false);
    },
    onError: (error) => {
      toast.error(`Failed to save project detail: ${error instanceof Error ? error.message : "Unknown error"}`);
    },
  });

  const handleSave = async (data: Project) => {
    try {
      const result = await editorRef.current?.save();
      if (result) {
        setLocalDetail(result);
        mutate(data);
      }
    } catch (err) {
      console.error("Failed to save:", err);
    }
  };

  // Using a simple timeout-based debounce for real-time preview
  // to prevent heavy parsing on every single keystroke
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const handleEditorChange = (newData: OutputData) => {
    if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
    debounceTimerRef.current = setTimeout(() => {
      setLocalDetail(newData);
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
    };
  }, []);

  if (isLoading || !dataProjectDetail) return (
    <div className="p-8 space-y-4">
      <Skeleton className="h-8 w-1/4" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Skeleton className="h-[500px]" />
        <Skeleton className="h-[500px]" />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-full -m-4">
      <div className="flex items-center justify-between p-4 border-b bg-background sticky top-0 z-10">
        <div>
          <h1 className="text-xl font-bold truncate max-w-[300px] md:max-w-md">
            {dataProjectDetail.title}
          </h1>
          <p className="text-xs text-muted-foreground">Detail Project Content</p>
        </div>
        <div className="flex gap-2">
          {isEditing ? (
            <>
              <Button variant="outline" size="sm" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
              <Button size="sm" onClick={() => handleSave(dataProjectDetail!)} disabled={isSaving}>
                {isSaving ? "Saving..." : "Save Changes"}
              </Button>
            </>
          ) : (
            <Button size="sm" onClick={() => setIsEditing(true)}>
              Edit Content
            </Button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 divide-x h-full overflow-hidden">
        {/* Editor Side */}
        <div className="h-full overflow-y-auto p-4 bg-muted/10">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Editor
            </h2>
            {isEditing && (
              <Badge variant="outline" className="text-[10px] uppercase">
                Editing Mode
              </Badge>
            )}
          </div>
          {projectDetail ? (
            <Editor
              key={params.id}
              ref={editorRef}
              data={projectDetail}
              setData={setLocalDetail as React.Dispatch<React.SetStateAction<OutputData>>}
              isLoading={isLoading}
              isEditing={isEditing}
              onChange={handleEditorChange}
            />
          ) : (
            <div className="text-muted-foreground italic text-sm p-4">
              Loading editor...
            </div>
          )}
        </div>

        {/* Preview Side */}
        <div className="h-full overflow-y-auto p-4 flex flex-col">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
            Preview
          </h2>
          <div className="flex-1 rounded-lg border bg-background p-6 shadow-sm">
            {htmlBlocks && htmlBlocks.length > 0 ? (
              <EditorPreview html={htmlBlocks.join("")} />
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-muted-foreground italic">
                <p>No content available</p>
                <p className="text-xs">Start typing in the editor to see content</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
