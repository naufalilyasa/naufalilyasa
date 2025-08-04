import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@repo/ui/components/dialog";
import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";
import { Textarea } from "@repo/ui/components/textarea";
import { Badge } from "@repo/ui/components/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/components/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/ui/components/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@repo/ui/components/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@repo/ui/components/command";
import { Calendar } from "@repo/ui/components/calendar";
import {
  X,
  Save,
  Loader2,
  Link,
  Check,
  ChevronsUpDown,
  CalendarIcon,
} from "lucide-react";
import { cn } from "@repo/ui/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { getAllTechnologiesFn } from "../../../api/technology";
import {
  CreateProjectFormDTO,
  projectFormSchema,
} from "@repo/zod-schemas/frontend/project-schema";
import ErrorDisplay from "../../ErrorDisplay";
import { Project, Technologies } from "@repo/types/project";
import { format } from "date-fns";

interface ProjectFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project?: Project | null;
  onSubmit: ({
    projectId,
    data,
  }: {
    projectId?: string;
    data: CreateProjectFormDTO;
  }) => void;
  // onSubmit: (projectId?: string, data?: CreateProjectFormDTO) => void;
  isLoading?: boolean;
}

const categories = [
  "Full Stack",
  "Frontend",
  "Backend",
  "Mobile",
  "Desktop",
  "AI/ML",
  "DevOps",
];

function ProjectForm({
  open,
  onOpenChange,
  project,
  onSubmit,
  isLoading = false,
}: ProjectFormProps) {
  const [comboboxOpen, setComboboxOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [preview, setPreview] = useState<string | null>(null);

  const {
    data: categoryTechnologies,
    isLoading: isLoadingTechnologies,
    error: errorTechnologies,
    isError: isErrorTechnologies,
  } = useQuery({
    queryKey: ["getAllTechnologies"],
    queryFn: getAllTechnologiesFn,
  });

  const [selectedTechnologies, setSelectedTechnologies] = useState<
    Technologies[] | undefined
  >([]);

  useEffect(() => {
    if (!categoryTechnologies) return;
  }, [categoryTechnologies]);

  const form = useForm<CreateProjectFormDTO>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: {
      title: project?.title ?? "",
      description: project?.description ?? "",
      category: project?.category ? project!.category : "FULLSTACK",
      githubUrl: project?.githubUrl ?? "",
      liveUrl: project?.liveUrl ?? "",
      technologies: project?.technologies.map((tech) => tech.id) ?? [],
      projectDetail: project?.projectDetail[0].content ?? {
        time: Date.now(),
        blocks: [],
        version: "2.29.0",
      },
      featured: project?.featured ?? false,
      startDate: project?.startDate ? new Date(project?.startDate) : new Date(),
      endDate: project?.endDate ? new Date(project.endDate) : undefined,
      thumbnail: undefined,
    },
  });

  const handleSubmit = ({
    projectId,
    data,
  }: {
    projectId?: string;
    data: CreateProjectFormDTO;
  }) => {
    if (data.thumbnail instanceof File) {
      form.setValue("thumbnail", data.thumbnail);
    }
    onSubmit({
      projectId,
      data: {
        ...data,
        technologies: selectedTechnologies!.map((selected) => selected.id),
        thumbnail: form.getValues("thumbnail"),
      },
    });
  };

  const addTechnology = (tech: Technologies) => {
    if (
      tech &&
      selectedTechnologies?.filter((selected) => selected.id.includes(tech.id))
    ) {
      const currentSelectedTechnologies: Technologies[] | undefined =
        selectedTechnologies?.map((selected) => selected);

      currentSelectedTechnologies?.push(tech);

      setSelectedTechnologies(currentSelectedTechnologies);
      form.setValue(
        "technologies",
        currentSelectedTechnologies.map((tech) => tech.id)
      );
      setSearchValue(""); // Reset search after selection
    }
  };

  const removeTechnology = (tech: Technologies) => {
    const newTechs = selectedTechnologies?.filter((t) => t !== tech);

    setSelectedTechnologies(newTechs);
    form.setValue(
      "technologies",
      newTechs!.map((tech) => tech.id)
    );
  };

  const handleClose = () => {
    form.reset();
    setSelectedTechnologies([]);
    setComboboxOpen(false);
    setSearchValue("");
    onOpenChange(false);
  };

  // if (isLoadingTechnologies) return <p>Loading...</p>;
  if (isErrorTechnologies) return <ErrorDisplay error={errorTechnologies} />;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {project ? "Edit Project" : "Create New Project"}
          </DialogTitle>
          <DialogDescription>
            {project
              ? "Update your project information"
              : "Add a new project to your portfolio"}
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data) =>
              handleSubmit({ projectId: project?.id, data })
            )}
            className="space-y-6"
            encType="multipart/form-data"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Title *</FormLabel>
                    <FormControl>
                      <Input placeholder="My Awesome Project" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category *</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categories.map((category) =>
                          category === "AI/ML" ? (
                            <SelectItem key={category} value={"AIML"}>
                              {category}
                            </SelectItem>
                          ) : (
                            <SelectItem
                              key={category}
                              value={category.toUpperCase().split(" ").join("")}
                            >
                              {category}
                            </SelectItem>
                          )
                        )}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your project, its features, and what makes it special..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <div className="text-xs text-muted-foreground">
                    {field.value?.length || 0}/500 characters
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid gap-4 md:grid-cols-1 w-full">
              {preview && (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full rounded shadow"
                />
              )}
            </div>
            <div className="grid gap-4 md:grid-cols-1">
              {/* <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status *</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {statuses.map((status) => (
                          <SelectItem key={status} value={status}>
                            {status}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}

              <FormField
                control={form.control}
                name="thumbnail"
                render={({ field: { onChange, value, ...fieldProps } }) => (
                  <FormItem>
                    <FormLabel>Thumbnail</FormLabel>
                    <FormControl>
                      <div className="flex gap-2">
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              onChange(file);
                              setPreview(URL.createObjectURL(file));
                            }
                          }}
                          {...fieldProps}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="githubUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>GitHub URL</FormLabel>
                    <FormControl>
                      <div className="flex gap-2">
                        <Input
                          placeholder="https://github.com/username/repo"
                          {...field}
                        />
                        <Link className="h-4 w-4 mt-3 text-muted-foreground" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="liveUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Live Demo URL</FormLabel>
                    <FormControl>
                      <div className="flex gap-2">
                        <Input placeholder="https://myproject.com" {...field} />
                        <Link className="h-4 w-4 mt-3 text-muted-foreground" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* New Date Fields */}
            <div className="grid gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="startDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Start Date (Optional)</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value || undefined}
                          onSelect={field.onChange}
                          captionLayout="dropdown"
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="endDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>End Date (Optional)</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value || undefined}
                          onSelect={field.onChange}
                          captionLayout="dropdown"
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-3">
              <FormField
                control={form.control}
                name="technologies"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Technologies Used *</FormLabel>
                    <Popover open={comboboxOpen} onOpenChange={setComboboxOpen}>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={comboboxOpen}
                            className="w-full justify-between bg-transparent hover:bg-muted/50"
                          >
                            <span className="text-muted-foreground">
                              {selectedTechnologies!.length > 0
                                ? `${selectedTechnologies?.length} technologies selected`
                                : "Search and select technologies..."}
                            </span>
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-[400px] p-0" align="start">
                        <Command>
                          <CommandInput
                            placeholder="Search technologies (e.g., React, Node.js, Python)..."
                            className="h-9"
                          />
                          <CommandList className="max-h-[300px]">
                            <CommandEmpty>
                              <div className="flex flex-col items-center justify-center py-6 text-center">
                                <div className="text-muted-foreground mb-2">
                                  No technology found
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  Try searching for "React", "Node.js", or
                                  "Python"
                                </div>
                              </div>
                            </CommandEmpty>

                            {/* Categorized Technologies */}
                            {isLoadingTechnologies ? (
                              <div>Loading...</div>
                            ) : (
                              categoryTechnologies?.data
                                .filter(
                                  (tech) =>
                                    !selectedTechnologies?.some(
                                      (selected) => selected.id === tech.id
                                    )
                                )
                                .map((tech) => {
                                  return (
                                    <CommandGroup>
                                      <CommandItem
                                        key={tech.id}
                                        value={tech.name}
                                        onSelect={() => addTechnology(tech)}
                                        className="cursor-pointer flex items-center gap-2"
                                      >
                                        <Check
                                          className={cn(
                                            "h-4 w-4",
                                            selectedTechnologies?.filter(
                                              (selected) =>
                                                !selected.id.includes(tech.id)
                                            )
                                              ? "opacity-0"
                                              : "opacity-100"
                                          )}
                                        />
                                        <span>{tech.name}</span>
                                      </CommandItem>
                                    </CommandGroup>
                                  );
                                })
                            )}
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    <div className="text-xs text-muted-foreground">
                      Start typing to search through{" "}
                      {categoryTechnologies!.data.length}+ technologies
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Selected Technologies Display with Better Design */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">
                    Selected Technologies
                  </label>
                  {selectedTechnologies!.length > 0 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setSelectedTechnologies([]);
                        form.setValue("technologies", []);
                      }}
                      className="h-auto p-1 text-xs text-muted-foreground hover:text-red-500"
                    >
                      Clear all
                    </Button>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 min-h-[60px] p-3 border rounded-md bg-muted/20">
                  {selectedTechnologies!.length > 0 ? (
                    selectedTechnologies?.map((tech, index) => (
                      <Badge
                        key={tech.id}
                        variant="secondary"
                        className="flex items-center gap-1 px-2 py-1 bg-primary/10 hover:bg-primary/20 transition-colors"
                      >
                        <span className="text-xs font-medium">{tech.name}</span>
                        <button onClick={() => removeTechnology(tech)}>
                          <X className="h-3 w-3 cursor-pointer hover:text-red-500 transition-colors" />
                        </button>
                      </Badge>
                    ))
                  ) : (
                    <div className="flex items-center justify-center w-full h-full">
                      <span className="text-sm text-muted-foreground">
                        No technologies selected. Use the search above to add
                        technologies.
                      </span>
                    </div>
                  )}
                </div>

                {selectedTechnologies!.length > 0 && (
                  <div className="text-xs text-muted-foreground">
                    {selectedTechnologies?.length} technolog
                    {selectedTechnologies?.length === 1 ? "y" : "ies"} selected
                  </div>
                )}
              </div>

              {selectedTechnologies?.length === 0 && (
                <div className="flex items-center gap-2 text-sm text-red-500">
                  <X className="h-4 w-4" />
                  At least one technology is required
                </div>
              )}
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                disabled={isLoading}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isLoading || selectedTechnologies?.length === 0}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {project ? "Updating..." : "Creating..."}
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    {project ? "Update Project" : "Create Project"}
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default ProjectForm;
