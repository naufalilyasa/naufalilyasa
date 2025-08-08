import { createFileRoute, useParams } from "@tanstack/react-router";
import Editor, { EditorHandle } from "../../../components/Editor";
import { useEffect, useRef, useState } from "react";
import { OutputData } from "@editorjs/editorjs";
import edjsHTML from "editorjs-html";
import EditorPreview from "@repo/ui/components/editor-preview";
import { useMutation, useQuery } from "@tanstack/react-query";
import { editProjectFn, getProjectByIdFn } from "../../../api/project";
import { defaultProject } from "../../../utils/dummy";
import { Skeleton } from "@repo/ui/components/skeleton";
import { Button } from "@repo/ui/components/button";
import { Project } from "@repo/types/project";
import { toast } from "sonner";
// import EditorPreviewPrismjs from "@repo/ui/components/editor-preview-prismjs";

export const Route = createFileRoute("/_auth/projects/detail/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  const [projectDetail, setProjectDetail] = useState<OutputData>({
    time: Date.now(),
    blocks: [],
    version: "2.29.0", // pastikan sesuaikan dengan versimu
  });
  const [isEditing, setIsEditing] = useState(false);

  const editorRef = useRef<EditorHandle>(null);

  const edjsParser = edjsHTML();
  const htmlBlocks = projectDetail
    ? edjsParser.parse(projectDetail)
    : undefined;

  const params = useParams({ from: "/_auth/projects/detail/$id" });

  const { data: dataProjectDetail, isLoading } = useQuery({
    queryKey: ["projectDetail", params.id],
    queryFn: async () => await getProjectByIdFn(params.id),
    initialData: defaultProject,
  });

  useEffect(() => {
    if (dataProjectDetail.projectDetail.length > 0) {
      setProjectDetail(dataProjectDetail.projectDetail[0].content);
    }
  }, [dataProjectDetail]);

  const { mutate } = useMutation({
    mutationKey: ["saveProjectDetail", dataProjectDetail],
    mutationFn: async (data: Project) => {
      if (!projectDetail) throw new Error("Project detail is undefined");

      editProjectFn({
        projectId: params.id,
        data: {
          ...data,
          technologies: data.technologies.map((tech) => tech.technology.id),
          projectDetail: {
            time: projectDetail.time ? projectDetail.time : Date.now(),
            blocks: projectDetail.blocks ? projectDetail.blocks : [],
            version: projectDetail.version ? projectDetail.version : "2.29.0",
          },
          thumbnail: undefined,
        },
      });
    },
    onSuccess: () => {
      toast.success("Project detail saved successfully");
    },
    onError: (error) => {
      toast.error(`Failed to save project detail: ${error.message}`);
    },
  });

  const handleSave = async (data: Project) => {
    try {
      const result = await editorRef.current?.save();
      if (result) {
        setProjectDetail(result); // Simpan ke state
        mutate(data); // Kirim ke backend
      }
    } catch (err) {
      console.error("Failed to save:", err);
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-1 gap-8">
      <div className="w-full">
        {isEditing ? null : (
          <div className="flex justify-end mb-4">
            <Button onClick={() => setIsEditing(!isEditing)}>
              Edit Detail Project
            </Button>
          </div>
        )}
        <h2 className="font-bold text-lg mb-2">Editor</h2>
        {isLoading ? (
          <Skeleton className="h-[300px] rounded" />
        ) : (
          <Editor
            ref={editorRef}
            data={projectDetail}
            setData={setProjectDetail}
            isLoading={isLoading}
            isEditing={isEditing}
          />
        )}
        {isEditing ? (
          <div className="flex justify-end gap-2 mt-4">
            <Button onClick={() => setIsEditing(false)}>Close Edit</Button>
            <Button onClick={() => handleSave(dataProjectDetail)}>Save</Button>
          </div>
        ) : null}
      </div>
      <hr />
      <div>
        <h2 className="font-bold text-lg mb-2">Preview</h2>
        <hr className="mb-5" />
        {typeof htmlBlocks === "string" ? (
          <EditorPreview html={htmlBlocks} />
        ) : (
          <p>No content available</p>
        )}
      </div>
    </div>
  );
}
