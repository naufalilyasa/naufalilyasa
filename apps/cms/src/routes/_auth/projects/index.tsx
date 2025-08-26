import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/card";
import { Badge } from "@repo/ui/components/badge";
import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/components/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@repo/ui/components/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@repo/ui/components/dropdown-menu";
import { toast } from "sonner";
import {
  ExternalLink,
  Github,
  Search,
  Filter,
  Calendar,
  Star,
  Plus,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
} from "lucide-react";
import ProjectForm from "../../../components/dashboard/projects/ProjectForm";
import DeleteProjectDialog from "../../../components/dashboard/projects/DeleteProjectDialog";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Project } from "@repo/types/project";
import {
  createProjectFn,
  deleteProjectFn,
  editProjectFn,
  getAllProjectsFn,
} from "../../../api/project";
import { CreateProjectFormDTO } from "@repo/zod-schemas";
import { format } from "date-fns";

export const Route = createFileRoute("/_auth/projects/")({
  component: ProjectsPage,
});

enum CategoryProject {
  FULLSTACK = "FULLSTACK",
  FRONTEND = "FRONTEND",
  BACKEND = "BACKEND",
  MOBILE = "MOBILE",
  DESKTOP = "DESKTOP",
  AIML = "AIML",
  DEVOPS = "DEVOPS",
}

export function ProjectsPage() {
  const {
    data,
    isLoading: isLoadingProjects,
    // isError: isErrorProjects,
    // error: errorProjects,
  } = useQuery({ queryKey: ["getAllProjects"], queryFn: getAllProjectsFn });

  const [projects, setProjects] = useState<Project[] | undefined>(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [deletingProject, setDeletingProject] = useState<Project | null>(null);
  const [categories, setCategories] = useState<
    { value: string; label: string }[]
  >([]);

  const queryClient = useQueryClient();

  const statuses = ["all", "Completed", "In Progress"];

  useEffect(() => {
    if (!data) return setProjects(undefined);
    setProjects(data);
    function formatCategoryName(category: string): string {
      if (category === "AIML") return "AI/ML";
      return category.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
    }

    setCategories([
      { label: "All", value: "all" },
      ...Object.values(CategoryProject).map((value) => ({
        value,
        label: formatCategoryName(value),
      })),
    ]);
  }, [data]);

  const filteredProjects = projects?.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.technology.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesCategory =
      selectedCategory === "all" || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredProjects = projects?.filter((project) => project.featured);

  const {
    mutateAsync: mutateCreateProject,
    isPending: isPendingCreateProject,
  } = useMutation({
    mutationKey: ["createProject"],
    mutationFn: createProjectFn,
    onMutate: () => {
      toast.loading("Loading...", { id: "create-project" });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getAllProjects"] });
      toast.success("Successfully create project", { id: "create-project" });
    },
    onError: () => {
      toast.error("Failed create project", { id: "create-project" });
    },
  });

  const { mutateAsync: mutateEditProject, isPending: isPendingEditProject } =
    useMutation({
      mutationKey: ["editProject"],
      mutationFn: editProjectFn,
      onMutate: () => {
        toast.loading("Loading...", { id: "edit-project" });
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["getAllProjects"] });
        toast.success("Successfully edit project", { id: "edit-project" });
      },
      onError: () => {
        toast.error("Failed edit project", { id: "edit-project" });
      },
    });

  const {
    mutateAsync: mutateDeleteProject,
    isPending: isPendingDeleteProject,
  } = useMutation({
    mutationKey: ["deleteProject"],
    mutationFn: deleteProjectFn,
    onMutate: () => {
      toast.loading("Loading...", { id: "delete-project" });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getAllProjects"] });
      toast.success("Successfully delete project", { id: "delete-project" });
    },
    onError: () => {
      toast.error("Failed delete project", { id: "delete-project" });
    },
  });

  const handleCreateProject = async (payload: {
    projectId?: string;
    data: CreateProjectFormDTO;
  }) => {
    mutateCreateProject(payload.data);
    setShowProjectForm(false);
  };

  const handleEditProject = async (payload: {
    projectId?: string;
    data: CreateProjectFormDTO;
  }) => {
    if (!editingProject) return;
    mutateEditProject({ ...payload });
    setEditingProject(null);
    setShowProjectForm(false);
  };

  const handleDeleteProject = async (projectId: string) => {
    if (!deletingProject) return;
    mutateDeleteProject(projectId);
    setShowDeleteDialog(false);
  };

  const handleToggleFeatured = async (project: Project) => {
    try {
      mutateEditProject({
        projectId: project.id,
        data: {
          ...project,
          technologies:
            project?.technologies.map((tech) => tech.technology.id) ?? [],
          projectDetail: {
            time: Date.now(),
            blocks: project.projectDetail[0].content.blocks
              ? project.projectDetail[0].content.blocks
              : [
                  {
                    id: "1",
                    type: "paragraph",
                    data: {
                      text: "This is a project description",
                    },
                  },
                ],
            version: "2.29.0",
          },
          featured: !project?.featured,
          startDate: project?.startDate
            ? new Date(project?.startDate)
            : new Date(),
          endDate: project?.endDate ? new Date(project.endDate) : undefined,
          thumbnail: undefined,
        },
      });
      toast.success(
        `Project ${project.featured ? "added to" : "removed from"} featured!`
      );
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error(`Failed to update project status`);
    }
  };

  const ProjectCard = ({ project }: { project: Project }) => (
    <Card className="group hover:shadow-lg transition-all duration-300">
      <div className="aspect-video overflow-hidden rounded-t-lg relative">
        <img
          src={project?.thumbnail?.url || "/placeholder.png"}
          alt={project.title}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="sm" className="h-8 w-8 p-0">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <Link to={`/projects/detail/$id`} params={{ id: project.id }}>
                <DropdownMenuItem>
                  <Eye className="mr-2 h-4 w-4" />
                  View Details
                </DropdownMenuItem>
              </Link>
              <DropdownMenuItem
                onClick={() => {
                  setEditingProject(project);
                  setShowProjectForm(true);
                }}
              >
                <Edit className="mr-2 h-4 w-4" />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleToggleFeatured(project)}>
                <Star
                  className={`mr-2 h-4 w-4 ${project.featured ? "fill-current" : ""}`}
                />
                {project.featured ? "Remove from Featured" : "Add to Featured"}
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setDeletingProject(project);
                  setShowDeleteDialog(true);
                }}
                className="text-red-600"
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg">{project.title}</CardTitle>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {project.startDate
                ? "Start " +
                  format(new Date(project.startDate), "d") +
                  "/" +
                  format(new Date(project.startDate), "M") +
                  "/" +
                  format(new Date(project?.startDate), "yyyy")
                : ""}
              {project.endDate
                ? " - End " +
                  format(new Date(project.endDate), "d") +
                  "/" +
                  format(new Date(project.endDate), "M") +
                  "/" +
                  format(new Date(project?.endDate), "yyyy")
                : " - present"}
              {project.featured && (
                <Badge variant="default" className="text-xs">
                  Featured
                </Badge>
              )}
            </div>
          </div>
          {/* <Badge
            variant={project.status === "Completed" ? "default" : "secondary"}
          >
            {project.status}
          </Badge> */}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-4 line-clamp-3">
          {project.description}
        </CardDescription>
        <div className="flex flex-wrap gap-1 mb-4">
          {project.technologies.map((tech) => (
            <Badge
              key={tech.technology.id}
              variant="outline"
              className="text-xs"
            >
              <img src={tech.technology.iconUrl} alt="" className="size-5" />
              {tech.technology.name}
            </Badge>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <Badge variant="secondary">
            {categories.map((category) => {
              if (category.value === project.category) {
                return category.label;
              }
            })}
          </Badge>
          <div className="flex gap-2">
            {project.githubUrl && (
              <Button size="sm" variant="outline" asChild>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4 mr-1" />
                  Code
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button size="sm" asChild>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Live
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  if (isLoadingProjects) return <p>Loading...</p>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Projects</h1>
          <p className="text-muted-foreground">
            Manage your portfolio projects
          </p>
        </div>
        <Button onClick={() => setShowProjectForm(true)}>
          <Plus className="h-4 w-4 mr-2" />
          New Project
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">
            All Projects ({projects?.length})
          </TabsTrigger>
          <TabsTrigger value="featured">
            Featured ({featuredProjects?.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          {/* Filters */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Filters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.label} value={category.value}>
                        {category.value === "all"
                          ? "All Categories"
                          : category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select
                  value={selectedStatus}
                  onValueChange={setSelectedStatus}
                >
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    {statuses.map((status) => (
                      <SelectItem key={status} value={status}>
                        {status === "all" ? "All Status" : status}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Projects Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects?.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filteredProjects?.length === 0 && (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <Search className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  No projects found
                </h3>
                <p className="text-muted-foreground text-center mb-4">
                  Try adjusting your search terms or filters
                </p>
                <Button onClick={() => setShowProjectForm(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Your First Project
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="featured" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects?.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {featuredProjects?.length === 0 && (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <Star className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  No featured projects
                </h3>
                <p className="text-muted-foreground text-center">
                  Mark your best projects as featured to showcase them here
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
      {/* Project Form Dialog */}
      <ProjectForm
        open={showProjectForm}
        onOpenChange={(open) => {
          setShowProjectForm(open);
          if (!open) {
            setEditingProject(null);
          }
        }}
        editProject={editingProject}
        onSubmit={editingProject ? handleEditProject : handleCreateProject}
        isLoading={
          editingProject ? isPendingEditProject : isPendingCreateProject
        }
      />

      {/* Delete Confirmation Dialog */}
      <DeleteProjectDialog
        open={showDeleteDialog}
        onOpenChange={setShowDeleteDialog}
        project={deletingProject}
        onConfirm={handleDeleteProject}
        isLoading={isPendingDeleteProject}
      />
    </div>
  );
}
