import { createFileRoute } from "@tanstack/react-router";

import { useEffect, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Textarea } from "@repo/ui/components/textarea";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@repo/ui/components/avatar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
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
import {
  Mail,
  Phone,
  Globe,
  Github,
  Linkedin,
  Save,
  Edit,
  Upload,
  X,
  Check,
  ChevronsUpDown,
  User,
  Code,
  Loader2,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../../store/auth";
import { getUserByIdFn } from "../../../api/user";
import { CategoryTech, Technologies } from "@repo/types/project";
import { getAllTechnologiesFn } from "../../../api/technology";
import { ProfileFormDTO, profileFormSchema } from "@repo/zod-schemas";
import useEditProfile from "../../../hooks/useEditProfile";

export const Route = createFileRoute("/_auth/profile/")({
  component: ProfilePage,
});

export function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [skillComboboxOpen, setSkillComboboxOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    Technologies[]
  >([]);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { authUser } = useAuth();
  const { mutateAsync: editProfile, isPending } = useEditProfile();

  const { data: profileData, isLoading } = useQuery({
    queryKey: ["getUserById", authUser?.id],
    queryFn: () => (authUser?.id ? getUserByIdFn(authUser?.id) : undefined),
    enabled: !!authUser?.id,
  });

  const form = useForm<ProfileFormDTO>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      description: "",
      email: "",
      github: "",
      linkedin: "",
      name: "",
      phoneNumber: "",
      website: "",
      resume: "",
      technologies: [],
      photo: undefined,
    },
  });

  useEffect(() => {
    if (profileData) {
      form.reset({
        description: profileData.description ?? "",
        email: profileData.email ?? "",
        github: profileData.github ?? "",
        linkedin: profileData.linkedin ?? "",
        name: profileData.name ?? "",
        phoneNumber: profileData.phoneNumber ?? "",
        website: profileData.website ?? "",
        resume: profileData.resume ?? "",
        technologies: profileData.userTechnologies.map((t) => t.technology.id),
      });
      setSelectedTechnologies(
        profileData.userTechnologies.map((t) => t.technology)
      );
    }
  }, [profileData, form]);

  const {
    data: technologiesData,
  } = useQuery({
    queryKey: ["getAllTechnologies"],
    queryFn: getAllTechnologiesFn,
  });

  const technologies = useMemo(() => technologiesData?.data ?? [], [technologiesData]);

  const skillCategories = useMemo(() => {
    return Object.values(CategoryTech).map((categoryValue) => {
      const skills = technologies.filter((tech: Technologies) => tech.category === categoryValue);
      const categoryLabel = skills.find((t: Technologies) => t.categoryLabel)?.categoryLabel ||
        categoryValue.replace(/_/g, " ").toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());

      return {
        label: categoryLabel,
        value: categoryValue,
        skills,
      };
    });
  }, [technologies]);

  const handleSave = async (data: ProfileFormDTO) => {
    if (!authUser?.id) return;

    try {
      const updatedData = {
        ...data,
        technologies: selectedTechnologies.map(
          (selectedTechnology: Technologies) => selectedTechnology.id
        ),
      };

      await editProfile({ data: updatedData, userId: authUser.id });
      setIsEditing(false);
    } catch (error) {
      // handled in hook
    }
  };

  const handleCancelEdit = () => {
    if (profileData) {
      setSelectedTechnologies(
        profileData?.userTechnologies.map((t) => t.technology)
      );
    }
    setPhotoPreview(null);
    form.setValue("photo", undefined);
    setIsEditing(false);
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      form.setValue("photo", file);
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

  const addTechnology = (techId: string) => {
    if (
      techId &&
      !selectedTechnologies.some((selectedTech) => selectedTech.id === techId) &&
      technologies
    ) {
      const techToAdd = technologies.find((technology) => technology.id === techId);
      if (techToAdd) {
        const newTechs = [...selectedTechnologies, techToAdd];
        setSelectedTechnologies(newTechs);
        form.setValue(
          "technologies",
          newTechs.map((newTech) => newTech.id)
        );
      }
    }
  };

  const removeTechnology = (techId: string) => {
    const newTechs = selectedTechnologies.filter((t) => t.id !== techId);

    setSelectedTechnologies(newTechs);
    form.setValue(
      "technologies",
      newTechs.map((newTech) => newTech.id)
    );
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Profile</h1>
          <p className="text-muted-foreground">
            Manage your personal and professional information
          </p>
        </div>
        {!isEditing ? (
          <Button onClick={() => setIsEditing(true)}>
            <Edit className="h-4 w-4 mr-2" />
            Edit Profile
          </Button>
        ) : (
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={handleCancelEdit}
            // disabled={isLoading}
            >
              Cancel
            </Button>
            <Button
              onClick={form.handleSubmit(handleSave)}
              disabled={isPending}
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </>
              )}
            </Button>
          </div>
        )}
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSave)} className="space-y-6">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Avatar Section */}
              <div className="flex items-center gap-6">
                <Avatar className="h-24 w-24 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-none">
                  <AvatarImage
                    src={photoPreview || profileData?.photoUrl || undefined}
                    alt="Profile"
                    className="object-cover"
                  />
                  <AvatarFallback className="text-lg rounded-none">
                    {profileData?.name
                      ?.split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                {isEditing && (
                  <div className="space-y-2">
                    <input
                      type="file"
                      ref={fileInputRef}
                      className="hidden"
                      accept="image/*"
                      onChange={handlePhotoChange}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Photo
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      JPG, PNG or GIF. Max size 2MB.
                    </p>
                  </div>
                )}
              </div>

              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name *</FormLabel>
                    <FormControl>
                      {isEditing ? (
                        <Input placeholder="John Doe" {...field} />
                      ) : (
                        <div className="p-2 text-sm font-medium">
                          {profileData?.name}
                        </div>
                      )}
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Description */}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      {isEditing ? (
                        <Textarea
                          placeholder="Tell us about yourself, your experience, and what you're passionate about..."
                          className="min-h-[100px]"
                          {...field}
                        />
                      ) : (
                        <div className="p-2 text-sm whitespace-pre-wrap">
                          {profileData?.description ??
                            "No description provided"}
                        </div>
                      )}
                    </FormControl>
                    {isEditing && (
                      <FormDescription>
                        {field.value?.length || 0}/1000 characters
                      </FormDescription>
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Contact Information */}
              <div className="grid gap-4 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        {isEditing ? (
                          <Input
                            type="email"
                            placeholder="john@example.com"
                            {...field}
                          />
                        ) : (
                          <div className="p-2 text-sm flex items-center gap-2">
                            <Mail className="h-4 w-4 text-muted-foreground" />
                            {profileData?.email ?? "Email not provided"}
                          </div>
                        )}
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        {isEditing ? (
                          <Input placeholder="+62 812 3456 7890" {...field} />
                        ) : (
                          <div className="p-2 text-sm flex items-center gap-2">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            {profileData?.phoneNumber ??
                              "Phone number not provided"}
                          </div>
                        )}
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Links & Resume */}
              <div className="space-y-4 pt-4 border-t">
                <div className="grid gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="website"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Globe className="h-4 w-4" />
                          Website
                        </FormLabel>
                        <FormControl>
                          {isEditing ? (
                            <Input placeholder="https://johndoe.dev" {...field} />
                          ) : (
                            <div className="p-2 text-sm">
                              {profileData?.website ? (
                                <a
                                  href={profileData?.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-600 hover:underline"
                                >
                                  {profileData?.website}
                                </a>
                              ) : (
                                <span className="text-muted-foreground">
                                  Not provided
                                </span>
                              )}
                            </div>
                          )}
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="resume"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Globe className="h-4 w-4 text-muted-foreground" />
                          Resume URL
                        </FormLabel>
                        <FormControl>
                          {isEditing ? (
                            <Input placeholder="https://drive.google.com/..." {...field} />
                          ) : (
                            <div className="p-2 text-sm border rounded-md min-h-10 flex items-center bg-background">
                              {profileData?.resume ? (
                                <a
                                  href={profileData?.resume}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-600 hover:underline"
                                >
                                  {profileData?.resume}
                                </a>
                              ) : (
                                <span className="text-muted-foreground">
                                  Not provided
                                </span>
                              )}
                            </div>
                          )}
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="github"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Github className="h-4 w-4" />
                          GitHub
                        </FormLabel>
                        <FormControl>
                          {isEditing ? (
                            <Input placeholder="Your GitHub link" {...field} />
                          ) : (
                            <div className="p-2 text-sm border rounded-md min-h-10 flex items-center bg-background">
                              {profileData?.github ? (
                                <a
                                  href={`${profileData?.github}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-600 hover:underline"
                                >
                                  {profileData?.github}
                                </a>
                              ) : (
                                <span className="text-muted-foreground">
                                  Not provided
                                </span>
                              )}
                            </div>
                          )}
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="linkedin"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Linkedin className="h-4 w-4" />
                          LinkedIn
                        </FormLabel>
                        <FormControl>
                          {isEditing ? (
                            <Input placeholder="Your LinkedIn link" {...field} />
                          ) : (
                            <div className="p-2 text-sm border rounded-md min-h-10 flex items-center bg-background">
                              {profileData?.linkedin ? (
                                <a
                                  href={`${profileData?.linkedin}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-600 hover:underline"
                                >
                                  {profileData?.linkedin}
                                </a>
                              ) : (
                                <span className="text-muted-foreground">
                                  Not provided
                                </span>
                              )}
                            </div>
                          )}
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technologies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Technologies
              </CardTitle>
              <CardDescription>
                Add your technical skills and technologies
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {isEditing && (
                <div className="space-y-3">
                  <FormLabel>Add Technology</FormLabel>
                  <Popover
                    open={skillComboboxOpen}
                    onOpenChange={setSkillComboboxOpen}
                  >
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={skillComboboxOpen}
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
                        <CommandInput
                          placeholder="Search technologies (e.g., React, Python, Docker)..."
                          value={searchQuery}
                          onValueChange={setSearchQuery}
                        />
                        <CommandList className="max-h-[400px]">
                          {searchQuery.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-6 text-center">
                              <div className="text-muted-foreground mb-2">
                                Start typing to search
                              </div>
                              <div className="text-xs text-muted-foreground">
                                Enter a technology name to see results
                              </div>
                            </div>
                          ) : (
                            <CommandEmpty>
                              <div className="flex flex-col items-center justify-center py-6 text-center">
                                <div className="text-muted-foreground mb-2">
                                  No technology found
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  Try searching for "React", "Python", or "Docker"
                                </div>
                              </div>
                            </CommandEmpty>
                          )}
                          {searchQuery.length > 0 && skillCategories.map((skillCategory: { label: string; value: string; skills: Technologies[] }) => (
                            <CommandGroup
                              key={skillCategory.value}
                              heading={`${skillCategory.label} (${skillCategory.skills?.length})`}
                            >
                              {skillCategory.skills
                                ?.filter(
                                  (skill: Technologies) =>
                                    !selectedTechnologies.some(
                                      (selectedTechnology: Technologies) =>
                                        selectedTechnology.id === skill.id
                                    )
                                )
                                .map((skill: Technologies) => (
                                  <CommandItem
                                    key={skill.id}
                                    value={skill.name}
                                    onSelect={() => {
                                      addTechnology(skill.id);
                                      setSkillComboboxOpen(false);
                                    }}
                                    className="cursor-pointer flex items-center gap-2"
                                  >
                                    <Check className="mr-2 h-4 w-4 opacity-0" />
                                    {skill.iconUrl && (
                                      <img
                                        src={skill.iconUrl}
                                        alt={skill.name}
                                        className="w-4 h-4 object-contain"
                                      />
                                    )}
                                    <span>{skill.name}</span>
                                    <Badge
                                      variant="outline"
                                      className="ml-auto text-xs"
                                    >
                                      {skillCategory.label}
                                    </Badge>
                                  </CommandItem>
                                ))}
                            </CommandGroup>
                          ))}
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <div className="text-xs text-muted-foreground">
                    Browse through{" "}
                    {Object.values(skillCategories).flat().length}+ technologies
                    across {Object.keys(skillCategories).length} categories
                  </div>
                </div>
              )}

              {/* Selected Technologies */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <FormLabel>Selected Technologies *</FormLabel>
                  {isEditing && (
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
                  {selectedTechnologies.length > 0 ? (
                    selectedTechnologies.map((tech: Technologies) => (
                      <Badge
                        key={tech.id}
                        variant="outline"
                        className="flex items-center gap-2 px-3 py-1 text-sm bg-primary/5 hover:bg-primary/10 transition-colors h-auto"
                      >
                        {tech.iconUrl && (
                          <img
                            src={tech.iconUrl}
                            alt={tech.name}
                            className="w-4 h-4 object-contain"
                          />
                        )}
                        <span>{tech.name}</span>
                        {isEditing && (
                          <button
                            type="button"
                            className="relative z-10 p-0.5 -mr-1 ml-1 rounded-sm hover:bg-red-100 hover:text-red-500 transition-colors pointer-events-auto"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              removeTechnology(tech.id);
                            }}
                          >
                            <X className="h-3 w-3 cursor-pointer" />
                          </button>
                        )}
                      </Badge>
                    ))
                  ) : (
                    <div className="flex items-center justify-center w-full h-full">
                      <span className="text-sm text-muted-foreground">
                        {isEditing
                          ? "No technologies selected. Use the search above to add technologies."
                          : "No technologies added yet."}
                      </span>
                    </div>
                  )}
                </div>

                {selectedTechnologies.length > 0 && (
                  <div className="text-xs text-muted-foreground">
                    {selectedTechnologies.length} technolog
                    {selectedTechnologies.length === 1 ? "y" : "ies"} selected
                  </div>
                )}
              </div>

              {selectedTechnologies.length === 0 && isEditing && (
                <div className="flex items-center gap-2 text-sm text-red-500">
                  <X className="h-4 w-4" />
                  At least one technology is required
                </div>
              )}
            </CardContent>
          </Card>
        </form>
      </Form>
    </div >
  );
}
