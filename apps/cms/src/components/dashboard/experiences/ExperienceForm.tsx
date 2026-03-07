import { useEffect, useState, useMemo } from "react";
import { useForm, useFieldArray } from "react-hook-form";
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
    Plus,
    Trash2,
    Save,
    Loader2,
    Check,
    ChevronsUpDown,
    CalendarIcon,
} from "lucide-react";
import { cn } from "@repo/ui/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { getAllTechnologiesFn } from "../../../api/technology";
import { ExperienceFormDTO, experienceFormSchema } from "@repo/zod-schemas";
import ErrorDisplay from "../../ErrorDisplay";
import { CategoryTech, Technologies, ExperienceResponse } from "@repo/types";
import { format } from "date-fns";

interface ExperienceFormProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    editExperience?: ExperienceResponse | null;
    onSubmit: (payload: {
        experienceId?: string;
        data: ExperienceFormDTO;
    }) => void;
    isLoading?: boolean;
}

const experienceTypes = [
    "Full-time",
    "Part-time",
    "Contract",
    "Freelance",
    "Internship",
];

export default function ExperienceForm({
    open,
    onOpenChange,
    editExperience,
    onSubmit,
    isLoading = false,
}: ExperienceFormProps) {
    const [comboboxOpen, setComboboxOpen] = useState(false);
    const [preview, setPreview] = useState<string | null>(null);

    const {
        data: technologiesData,
        error: errorTechnologies,
        isError: isErrorTechnologies,
    } = useQuery({
        queryKey: ["getAllTechnologies"],
        queryFn: getAllTechnologiesFn,
    });

    const technologies = useMemo(() => (technologiesData as any)?.data ?? [], [technologiesData]);

    const skillCategories = useMemo(() => {
        const categoryTechOptions = Object.values(CategoryTech).map((val) => ({
            value: val,
            label: val
                .replace(/_/g, " ")
                .toLowerCase()
                .replace(/\b\w/g, (c) => c.toUpperCase()),
        }));

        return categoryTechOptions.map((category) => {
            return {
                label: category.label,
                value: category.value,
                skills: technologies.filter((technology: Technologies) => {
                    return technology.category === category.value;
                }),
            };
        });
    }, [technologies]);

    const [selectedTechnologies, setSelectedTechnologies] = useState<Technologies[]>([]);

    const form = useForm<ExperienceFormDTO>({
        resolver: zodResolver(experienceFormSchema) as any,
        defaultValues: {
            companyName: "",
            position: "",
            location: "",
            type: "Full-time",
            startDate: new Date(),
            endDate: undefined,
            description: "",
            achievements: [""],
            notableProjects: [],
            technologies: [],
            logo: undefined,
        },
    });

    const {
        fields: achievementFields,
        append: appendAchievement,
        remove: removeAchievement,
    } = useFieldArray({
        control: form.control,
        name: "achievements" as never, // cast to never because primitive string array typing sometimes clashes
    });

    const {
        fields: projectFields,
        append: appendProject,
        remove: removeProject,
    } = useFieldArray({
        control: form.control,
        name: "notableProjects",
    });

    useEffect(() => {
        if (editExperience) {
            form.reset({
                companyName: editExperience.companyName,
                position: editExperience.position,
                location: editExperience.location,
                type: editExperience.type,
                startDate: new Date(editExperience.startDate),
                endDate: editExperience.endDate ? new Date(editExperience.endDate) : undefined,
                description: editExperience.description,
                achievements: editExperience.achievements.length > 0 ? editExperience.achievements : [""],
                notableProjects: editExperience.notableProjects || [],
                technologies: editExperience.technologies.map((t) => t.technology.id) || [],
            });
            setSelectedTechnologies(editExperience.technologies.map((t) => t.technology) || []);
            setPreview(editExperience.logoUrl || null);
        } else {
            form.reset({
                companyName: "",
                position: "",
                location: "",
                type: "Full-time",
                startDate: new Date(),
                endDate: undefined,
                description: "",
                achievements: [""],
                notableProjects: [],
                technologies: [],
            });
            setSelectedTechnologies([]);
            setPreview(null);
        }
    }, [editExperience, form]);

    const handleClose = () => {
        if (!editExperience) {
            form.reset();
            setSelectedTechnologies([]);
            setPreview(null);
        }
        setComboboxOpen(false);
        onOpenChange(false);
    };

    const handleFormSubmit = (data: ExperienceFormDTO) => {
        // Clean up empty achievements
        const cleanedAchievements = (data.achievements as unknown as string[]).filter(a => a.trim() !== "");

        onSubmit({
            experienceId: editExperience?.id,
            data: {
                ...data,
                achievements: cleanedAchievements as never,
                technologies: selectedTechnologies.map((t) => t.id),
            },
        });
    };

    const addTechnology = (tech: Technologies) => {
        if (tech && !selectedTechnologies.some((t: Technologies) => t.id === tech.id)) {
            const newTechs = [...selectedTechnologies, tech];
            setSelectedTechnologies(newTechs);
            form.setValue("technologies", newTechs.map((t: Technologies) => t.id));
        }
    };

    const removeTechnology = (tech: Technologies) => {
        const newTechs = selectedTechnologies.filter((t) => t.id !== tech.id);
        setSelectedTechnologies(newTechs);
        form.setValue("technologies", newTechs.map((t) => t.id));
    };


    if (isErrorTechnologies) return <ErrorDisplay error={errorTechnologies} />;

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>
                        {editExperience ? "Edit Experience" : "Add Experience"}
                    </DialogTitle>
                    <DialogDescription>
                        {editExperience
                            ? "Update your work experience details."
                            : "Add your work experience to your profile."}
                    </DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-6">
                        <div className="grid gap-4 md:grid-cols-2">
                            <FormField
                                control={form.control}
                                name="companyName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Company Name *</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Tech Solutions Inc." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="position"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Position / Role *</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Senior Full Stack Developer" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                            <FormField
                                control={form.control}
                                name="location"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Location *</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Jakarta, Indonesia (or Remote)" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="type"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Job Type *</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select type" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {experienceTypes.map((type) => (
                                                    <SelectItem key={type} value={type}>
                                                        {type}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                            <FormField
                                control={form.control}
                                name="startDate"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel>Start Date *</FormLabel>
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
                                                        {field.value ? format(field.value, "PPP") : <span>Pick a start date</span>}
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
                                        <FormLabel>End Date (Leave blank if currently working here)</FormLabel>
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
                                                        {field.value ? format(field.value, "PPP") : <span>Currently working here</span>}
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
                                                <div className="p-3 border-t">
                                                    <Button
                                                        variant="ghost"
                                                        className="w-full justify-start text-sm h-8"
                                                        onClick={() => form.setValue("endDate", undefined)}
                                                    >
                                                        Set as Present
                                                    </Button>
                                                </div>
                                            </PopoverContent>
                                        </Popover>
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
                                    <FormLabel>Description / Responsibilities *</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Describe your role and responsibilities..."
                                            className="min-h-[100px]"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Logo Upload */}
                        <div className="grid gap-4 md:grid-cols-1">
                            {preview && (
                                <div className="w-24 h-24 border rounded shadow-sm overflow-hidden flex items-center justify-center bg-white">
                                    <img src={preview} alt="Company Logo" className="max-w-full max-h-full object-contain" />
                                </div>
                            )}
                            <FormField
                                control={form.control}
                                name="logo"
                                render={({ field: { onChange, value, ...fieldProps } }) => (
                                    <FormItem>
                                        <FormLabel>Company Logo (Optional)</FormLabel>
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

                        {/* Achievements */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <FormLabel>Key Achievements</FormLabel>
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    onClick={() => appendAchievement("")}
                                >
                                    <Plus className="mr-2 h-4 w-4" /> Add Achievement
                                </Button>
                            </div>
                            <div className="space-y-3">
                                {achievementFields.map((field, index) => (
                                    <FormField
                                        key={field.id}
                                        control={form.control}
                                        name={`achievements.${index}` as never}
                                        render={({ field: inputField }) => (
                                            <FormItem className="flex items-center gap-2">
                                                <FormControl className="flex-1">
                                                    <Input placeholder="e.g., Reduced application load time by 60%..." {...inputField} />
                                                </FormControl>
                                                <Button
                                                    type="button"
                                                    variant="ghost"
                                                    size="icon"
                                                    onClick={() => removeAchievement(index)}
                                                    className="h-9 shrink-0 text-red-500 hover:text-red-700 hover:bg-red-50"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </FormItem>
                                        )}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Notable Projects */}
                        <div className="space-y-4 pt-4 border-t">
                            <div className="flex justify-between items-center">
                                <FormLabel>Notable Projects (Optional)</FormLabel>
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    onClick={() => appendProject({ name: "", description: "", impact: "" })}
                                >
                                    <Plus className="mr-2 h-4 w-4" /> Add Project
                                </Button>
                            </div>

                            <div className="space-y-4">
                                {projectFields.map((field, index) => (
                                    <div key={field.id} className="p-4 border rounded-md relative group bg-muted/20">
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => removeProject(index)}
                                            className="absolute top-2 right-2 h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>

                                        <div className="grid gap-3 mr-8">
                                            <FormField
                                                control={form.control}
                                                name={`notableProjects.${index}.name`}
                                                render={({ field: inputField }) => (
                                                    <FormItem>
                                                        <FormControl>
                                                            <Input placeholder="Project Name" className="bg-background" {...inputField} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name={`notableProjects.${index}.description`}
                                                render={({ field: inputField }) => (
                                                    <FormItem>
                                                        <FormControl>
                                                            <Textarea placeholder="Short description" className="min-h-[60px] bg-background" {...inputField} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name={`notableProjects.${index}.impact`}
                                                render={({ field: inputField }) => (
                                                    <FormItem>
                                                        <FormControl>
                                                            <Input placeholder="Impact (e.g., Increased sales by 35%)" className="bg-background" {...inputField} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </div>
                                ))}
                                {projectFields.length === 0 && (
                                    <p className="text-sm text-muted-foreground text-center py-4">No projects added yet.</p>
                                )}
                            </div>
                        </div>

                        {/* Technologies */}
                        <div className="space-y-4 pt-4 border-t">
                            <div className="space-y-3">
                                <FormLabel>Technologies Used</FormLabel>
                                <Popover open={comboboxOpen} onOpenChange={setComboboxOpen}>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            aria-expanded={comboboxOpen}
                                            className="w-full justify-between bg-transparent hover:bg-muted/50"
                                        >
                                            <span className="text-muted-foreground">
                                                Search and add technologies...
                                            </span>
                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-[500px] p-0" align="start">
                                        <Command>
                                            <CommandInput placeholder="Search technologies..." />
                                            <CommandList className="max-h-[300px]">
                                                <CommandEmpty>No technology found.</CommandEmpty>
                                                {skillCategories.map((cat) => (
                                                    <CommandGroup key={cat.value} heading={cat.label}>
                                                        {cat.skills
                                                            .filter((skill: Technologies) => !selectedTechnologies.some((t) => t.id === skill.id))
                                                            .map((skill: Technologies) => (
                                                                <CommandItem
                                                                    key={skill.id}
                                                                    onSelect={() => {
                                                                        addTechnology(skill);
                                                                        setComboboxOpen(false);
                                                                    }}
                                                                    className="cursor-pointer"
                                                                >
                                                                    <Check className="mr-2 h-4 w-4 opacity-0" />
                                                                    {skill.iconUrl && (
                                                                        <img src={skill.iconUrl} alt={skill.name} className="w-4 h-4 mr-2 object-contain" />
                                                                    )}
                                                                    <span>{skill.name}</span>
                                                                </CommandItem>
                                                            ))}
                                                    </CommandGroup>
                                                ))}
                                            </CommandList>
                                        </Command>
                                    </PopoverContent>
                                </Popover>

                                {/* Selected Technologies */}
                                <div className="flex flex-wrap gap-2 min-h-[60px] p-3 border rounded-md bg-muted/20">
                                    {selectedTechnologies.map((tech) => (
                                        <Badge
                                            key={tech.id}
                                            variant="outline"
                                            className="flex items-center gap-2 px-3 py-1 text-sm bg-primary/5 hover:bg-primary/10 transition-colors h-auto"
                                        >
                                            {tech.iconUrl && (
                                                <img src={tech.iconUrl} alt={tech.name} className="w-4 h-4 object-contain" />
                                            )}
                                            <span>{tech.name}</span>
                                            <X
                                                className="h-3 w-3 cursor-pointer hover:text-red-500 transition-colors ml-1"
                                                onClick={(e: React.MouseEvent) => {
                                                    e.preventDefault();
                                                    removeTechnology(tech);
                                                }}
                                            />
                                        </Badge>
                                    ))}
                                    {selectedTechnologies.length === 0 && (
                                        <span className="text-sm text-muted-foreground flex items-center justify-center w-full">
                                            No technologies added yet.
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-end gap-2 pt-4 border-t">
                            <Button type="button" variant="outline" onClick={handleClose}>
                                Cancel
                            </Button>
                            <Button type="submit" disabled={isLoading}>
                                {isLoading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Saving...
                                    </>
                                ) : (
                                    <>
                                        <Save className="mr-2 h-4 w-4" />
                                        {editExperience ? "Update Experience" : "Save Experience"}
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
