"use client";
import { createFileRoute } from "@tanstack/react-router";

import { useEffect, useState } from "react";
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
import { toast } from "sonner";
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
import { useMutation, useQuery } from "@tanstack/react-query";
import { useAuth } from "../../../store/auth";
import { editProfileFn, getUserByIdFn } from "../../../api/user";
import { CategoryTech, Technologies } from "@repo/types/project";
import { getAllTechnologiesFn } from "../../../api/technology";
import { ProfileFormDTO, profileFormSchema } from "@repo/zod-schemas";

export const Route = createFileRoute("/_auth/profile/")({
  component: ProfilePage,
});

export function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [skillComboboxOpen, setSkillComboboxOpen] = useState(false);
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    Technologies[]
  >([]);
  const [technologies, setTechnologies] = useState<Technologies[]>();
  const { authUser } = useAuth();

  const { data: profileData, isLoading } = useQuery({
    queryKey: ["getUserById", authUser?.id],
    queryFn: () => (authUser?.id ? getUserByIdFn(authUser?.id) : undefined),
  });

  const form = useForm<ProfileFormDTO>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      description: profileData?.description ? profileData.description : "",
      email: profileData?.email ? profileData.email : "",
      github: profileData?.github ? profileData.github : "",
      linkedin: profileData?.linkedin ? profileData.linkedin : "",
      name: profileData?.name ? profileData.name : "",
      phoneNumber: profileData?.phoneNumber ? profileData.phoneNumber : "",
      website: profileData?.website ? profileData.website : "",
      technologies: profileData?.userTechnologies
        ? profileData.userTechnologies.map((t) => t.technology.id)
        : [],
      photo: undefined,
    },
  });

  useEffect(() => {
    if (!profileData) return;
    setSelectedTechnologies(
      profileData.userTechnologies.map((t) => t.technology)
    );
    form.setValue("name", profileData.name);
    form.setValue(
      "description",
      profileData.description ? profileData.description : undefined
    );
    form.setValue("email", profileData.email ? profileData.email : undefined);
    form.setValue(
      "github",
      profileData.github ? profileData.github : undefined
    );
    form.setValue(
      "linkedin",
      profileData.linkedin ? profileData.linkedin : undefined
    );
    form.setValue(
      "phoneNumber",
      profileData.phoneNumber ? profileData.phoneNumber : undefined
    );
    form.setValue(
      "website",
      profileData.website ? profileData.website : undefined
    );
  }, [profileData, form]);

  const {
    data: technologiesData,
    isLoading: isLoadingTechnologies,
    // error: errorTechnologies,
    // isError: isErrorTechnologies,
  } = useQuery({
    queryKey: ["getAllTechnologies"],
    queryFn: getAllTechnologiesFn,
  });

  useEffect(() => {
    if (!technologiesData) return;
    setTechnologies(technologiesData.data);
  }, [technologiesData]);

  const categoryTechOptions = Object.values(CategoryTech).map((val) => ({
    value: val,
    label: val
      .replace(/_/g, " ")
      .toLowerCase()
      .replace(/\b\w/g, (c) => c.toUpperCase()),
  }));

  const skillCategories = categoryTechOptions.map((category) => {
    return {
      label: category.label,
      value: category.value,
      skills: technologies?.filter((technology) => {
        return technology.category === category.value;
      }),
    };
  });

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["editProfile"],
    mutationFn: editProfileFn,
    onMutate: () => {
      toast.loading("Loading...", { id: "update-profile" });
    },
    onSuccess: () => {
      toast.success("Profile updated successfully!", { id: "update-profile" });
    },
    onError: () => {
      toast.error("Update profile failed!", { id: "update-profile" });
    },
  });

  const handleSave = async (data: ProfileFormDTO) => {
    const updatedData = {
      ...data,
      technologies: selectedTechnologies.map(
        (selectedTechnology) => selectedTechnology.id
      ),
    };

    if (authUser?.id) {
      mutateAsync({ data: updatedData, userId: authUser.id });
    }

    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    if (profileData) {
      setSelectedTechnologies(
        profileData?.userTechnologies.map((t) => t.technology)
      );
    }
    setIsEditing(false);
  };

  const addTechnology = (tech: string) => {
    if (
      tech &&
      !selectedTechnologies.some((selectedTech) => selectedTech.id === tech) &&
      technologies
    ) {
      const newTechs = [
        ...selectedTechnologies,
        ...technologies.filter((technology) => technology.id === tech),
      ];

      setSelectedTechnologies(newTechs);
      form.setValue(
        "technologies",
        newTechs.map((newTech) => newTech.id)
      );
    }
  };

  const removeTechnology = (tech: string) => {
    const newTechs = selectedTechnologies.filter((t) => t.id !== tech);
    console.log("hit");

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
                <Avatar className="h-24 w-24">
                  <AvatarImage
                    src="/placeholder.svg?height=96&width=96"
                    alt="Profile"
                  />
                  <AvatarFallback className="text-lg">
                    {profileData?.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                {isEditing && (
                  <div className="space-y-2">
                    <Button type="button" variant="outline" size="sm">
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

              {/* Social Links */}
              <div className="grid gap-4 md:grid-cols-3">
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
                          <div className="p-2 text-sm">
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
                          <div className="p-2 text-sm">
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
                        <CommandInput placeholder="Search technologies (e.g., React, Python, Docker)..." />
                        <CommandList className="max-h-[400px]">
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
                          {skillCategories.map((skillCategory) => (
                            <CommandGroup
                              key={skillCategory.value}
                              heading={`${skillCategory.label} (${skillCategory.skills?.length})`}
                            >
                              {skillCategory.skills
                                ?.filter(
                                  (skill) =>
                                    !selectedTechnologies.some(
                                      (selectedTechnology) =>
                                        selectedTechnology.id === skill.id
                                    )
                                )
                                .map((skill) => (
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
                  {isEditing && isLoadingTechnologies && (
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
                    selectedTechnologies.map((tech) => (
                      <Badge
                        key={tech.id}
                        variant="outline"
                        className="flex items-center gap-1 px-3 py-1 text-sm bg-primary/5 hover:bg-primary/10 transition-colors"
                      >
                        <span>{tech.name}</span>
                        {isEditing && (
                          <div>
                            <X
                              className="h-3 w-3 cursor-pointer hover:text-red-500 transition-colors ml-1"
                              onClick={() => removeTechnology(tech.id)}
                            />
                          </div>
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
    </div>
  );
}
