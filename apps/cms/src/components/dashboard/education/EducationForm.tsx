import { useEffect } from "react";
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
import { Calendar } from "@repo/ui/components/calendar";
import { Plus, Trash2, Save, Loader2, CalendarIcon } from "lucide-react";
import { cn } from "@repo/ui/lib/utils";
import { EducationFormDTO, educationFormSchema } from "@repo/zod-schemas";
import { EducationResponse } from "@repo/types";
import { format } from "date-fns";

interface EducationFormProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    editEducation?: EducationResponse | null;
    onSubmit: (payload: { educationId?: string; data: EducationFormDTO }) => void;
    isLoading?: boolean;
}

export default function EducationForm({
    open,
    onOpenChange,
    editEducation,
    onSubmit,
    isLoading = false,
}: EducationFormProps) {
    const form = useForm<EducationFormDTO>({
        resolver: zodResolver(educationFormSchema) as any,
        defaultValues: {
            institution: "",
            location: "",
            category: "FORMAL",
            degree: "",
            fieldOfStudy: "",
            startDate: new Date(),
            endDate: undefined,
            description: "",
            achievements: [""],
        },
    });

    const category = form.watch("category");

    const {
        fields: achievementFields,
        append: appendAchievement,
        remove: removeAchievement,
    } = useFieldArray({
        control: form.control,
        name: "achievements" as never,
    });

    useEffect(() => {
        if (editEducation) {
            form.reset({
                institution: editEducation.institution,
                location: editEducation.location,
                category: editEducation.category,
                degree: editEducation.degree || "",
                fieldOfStudy: editEducation.fieldOfStudy || "",
                startDate: new Date(editEducation.startDate),
                endDate: editEducation.endDate ? new Date(editEducation.endDate) : undefined,
                description: editEducation.description || "",
                achievements: editEducation.achievements.length > 0 ? editEducation.achievements : [""],
            });
        } else {
            form.reset({
                institution: "",
                location: "",
                category: "FORMAL",
                degree: "",
                fieldOfStudy: "",
                startDate: new Date(),
                endDate: undefined,
                description: "",
                achievements: [""],
            });
        }
    }, [editEducation, form]);

    const handleClose = () => {
        if (!editEducation) {
            form.reset();
        }
        onOpenChange(false);
    };

    const handleFormSubmit = (data: EducationFormDTO) => {
        const cleanedAchievements = (data.achievements as unknown as string[]).filter(
            (a) => a.trim() !== ""
        );

        // If Informal, clear out degree and field of study just in case
        if (data.category === "INFORMAL") {
            data.degree = null;
            data.fieldOfStudy = null;
        }

        onSubmit({
            educationId: editEducation?.id,
            data: {
                ...data,
                achievements: cleanedAchievements as never,
            },
        });
    };

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>
                        {editEducation ? "Edit Education" : "Add Education"}
                    </DialogTitle>
                    <DialogDescription>
                        {editEducation
                            ? "Update your educational background."
                            : "Add your educational background to your profile."}
                    </DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(handleFormSubmit)}
                        className="space-y-6"
                    >
                        <div className="grid gap-4 md:grid-cols-2">
                            <FormField
                                control={form.control}
                                name="institution"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Institution / Bootcamp Name *</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Universitas Kalbis" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="location"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Location *</FormLabel>
                                        <FormControl>
                                            <Input placeholder="East Jakarta, Indonesia" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Education Category *</FormLabel>
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
                                            <SelectItem value="FORMAL">Formal Education</SelectItem>
                                            <SelectItem value="INFORMAL">
                                                Informal Education (Bootcamp, Course)
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {category === "FORMAL" && (
                            <div className="grid gap-4 md:grid-cols-2">
                                <FormField
                                    control={form.control}
                                    name="degree"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Degree</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Bachelor of Informatics"
                                                    {...field}
                                                    value={field.value || ""}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="fieldOfStudy"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Field of Study (Jurusan)</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Soft Computing / Science"
                                                    {...field}
                                                    value={field.value || ""}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        )}

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
                                                        {field.value ? (
                                                            format(field.value, "PPP")
                                                        ) : (
                                                            <span>Pick a start date</span>
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
                                        <FormLabel>
                                            End Date (Leave blank if currently studying)
                                        </FormLabel>
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
                                                            <span>Currently studying here</span>
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
                                    <FormLabel>Description / Thesis / GPA (Optional)</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Cumulative GPA: 3.62/4.0&#10;Thesis: Development of..."
                                            className="min-h-[80px]"
                                            {...field}
                                            value={field.value || ""}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {category === "INFORMAL" && (
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <FormLabel>Key Achievements / Learning Points</FormLabel>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        size="sm"
                                        onClick={() => appendAchievement("")}
                                    >
                                        <Plus className="mr-2 h-4 w-4" /> Add Item
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
                                                        <Input
                                                            placeholder="e.g., Completed intensive full-stack web development training..."
                                                            {...inputField}
                                                        />
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
                        )}

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
                                        {editEducation ? "Update Education" : "Save Education"}
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
