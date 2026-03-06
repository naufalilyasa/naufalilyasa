import { createFileRoute } from "@tanstack/react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/card";
import { Badge } from "@repo/ui/components/badge";
import { Button } from "@repo/ui/components/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@repo/ui/components/tabs";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@repo/ui/components/avatar";
import {
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  ExternalLink,
  TrendingUp,
  Code,
  Star,
  Building,
  Plus,
  Trash2,
  Edit,
  MoreHorizontal
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@repo/ui/components/dropdown-menu";
import { format } from "date-fns";
import { useState } from "react";
import {
  useCreateExperience,
  useDeleteExperience,
  useGetExperiences,
  useUpdateExperience,
} from "../../../hooks/useExperience";
import {
  useCreateEducation,
  useDeleteEducation,
  useGetEducations,
  useUpdateEducation,
} from "../../../hooks/useEducation";
import ExperienceForm from "../../../components/dashboard/experiences/ExperienceForm";
import DeleteExperienceDialog from "../../../components/dashboard/experiences/DeleteExperienceDialog";
import EducationForm from "../../../components/dashboard/education/EducationForm";
import DeleteEducationDialog from "../../../components/dashboard/education/DeleteEducationDialog";
import { ExperienceResponse, EducationResponse } from "@repo/types";
import { ExperienceFormDTO, EducationFormDTO } from "@repo/zod-schemas";

export const Route = createFileRoute("/_auth/experiences/")({
  component: RouteComponent,
});

// Removed static workExperience array


const certifications = [
  {
    id: 1,
    name: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services",
    logo: "/placeholder.svg?height=40&width=40",
    date: "Dec 2023",
    expiry: "Dec 2026",
    credentialId: "AWS-SA-2023-001",
    verificationUrl: "#",
    skills: [
      "Cloud Architecture",
      "AWS Services",
      "Security",
      "Cost Optimization",
    ],
  },
  {
    id: 2,
    name: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    logo: "/placeholder.svg?height=40&width=40",
    date: "Aug 2022",
    expiry: "Aug 2024",
    credentialId: "GCP-PD-2022-001",
    verificationUrl: "#",
    skills: ["GCP Services", "Kubernetes", "DevOps", "Microservices"],
  },
  {
    id: 3,
    name: "MongoDB Certified Developer",
    issuer: "MongoDB Inc.",
    logo: "/placeholder.svg?height=40&width=40",
    date: "May 2021",
    expiry: "May 2024",
    credentialId: "MDB-DEV-2021-001",
    verificationUrl: "#",
    skills: ["MongoDB", "Database Design", "Aggregation", "Performance Tuning"],
  },
  {
    id: 4,
    name: "React Developer Certification",
    issuer: "Meta",
    logo: "/placeholder.svg?height=40&width=40",
    date: "Jan 2021",
    expiry: "Never",
    credentialId: "META-REACT-2021-001",
    verificationUrl: "#",
    skills: ["React", "JSX", "Hooks", "State Management"],
  },
];

const awards = [
  {
    id: 1,
    title: "Employee of the Year 2023",
    organization: "Tech Solutions Inc.",
    date: "Dec 2023",
    description:
      "Recognized for outstanding performance and leadership in driving technical excellence.",
    icon: Award,
  },
  {
    id: 2,
    title: "Best Innovation Award",
    organization: "Digital Agency Co.",
    date: "Nov 2021",
    description:
      "Awarded for developing an innovative solution that improved client satisfaction by 40%.",
    icon: Star,
  },
  {
    id: 3,
    title: "National Programming Competition Winner",
    organization: "Indonesian Computer Society",
    date: "Oct 2018",
    description:
      "First place in national-level programming competition with 500+ participants.",
    icon: Code,
  },
];

function RouteComponent() {
  const [activeTab, setActiveTab] = useState("work");

  const { data: experiencesResult, isLoading: isLoadingExperiences } = useGetExperiences();
  const experiences = experiencesResult?.data || [];

  const { data: educationsResult, isLoading: isLoadingEducations } = useGetEducations();
  const educations = educationsResult?.data || [];

  const { mutateAsync: mutateCreateExperience, isPending: isPendingCreate } = useCreateExperience();
  const { mutateAsync: mutateUpdateExperience, isPending: isPendingUpdate } = useUpdateExperience();
  const { mutateAsync: mutateDeleteExperience, isPending: isPendingDelete } = useDeleteExperience();

  const { mutateAsync: mutateCreateEducation, isPending: isPendingCreateEdu } = useCreateEducation();
  const { mutateAsync: mutateUpdateEducation, isPending: isPendingUpdateEdu } = useUpdateEducation();
  const { mutateAsync: mutateDeleteEducation, isPending: isPendingDeleteEdu } = useDeleteEducation();

  const [showExperienceForm, setShowExperienceForm] = useState(false);
  const [editingExperience, setEditingExperience] = useState<ExperienceResponse | null>(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [deletingExperience, setDeletingExperience] = useState<ExperienceResponse | null>(null);

  const [showEducationForm, setShowEducationForm] = useState(false);
  const [editingEducation, setEditingEducation] = useState<EducationResponse | null>(null);
  const [showDeleteEduDialog, setShowDeleteEduDialog] = useState(false);
  const [deletingEducation, setDeletingEducation] = useState<EducationResponse | null>(null);

  const handleCreateExperience = async (payload: { data: ExperienceFormDTO }) => {
    try {
      await mutateCreateExperience(payload.data);
      setShowExperienceForm(false);
    } catch (error) {
      // toast is handled in hook
    }
  };

  const handleEditExperience = async (payload: { experienceId?: string; data: ExperienceFormDTO }) => {
    if (!payload.experienceId) return;
    try {
      await mutateUpdateExperience({ id: payload.experienceId, data: payload.data });
      setEditingExperience(null);
      setShowExperienceForm(false);
    } catch (error) {
      // toast is handled in hook
    }
  };

  const handleDeleteExperience = async (experienceId: string) => {
    try {
      await mutateDeleteExperience(experienceId);
      setShowDeleteDialog(false);
      setDeletingExperience(null);
    } catch (error) {
      // toast is handled in hook
    }
  };

  const handleCreateEducation = async (payload: { data: EducationFormDTO }) => {
    try {
      await mutateCreateEducation(payload.data);
      setShowEducationForm(false);
    } catch (error) { }
  };

  const handleEditEducation = async (payload: { educationId?: string; data: EducationFormDTO }) => {
    if (!payload.educationId) return;
    try {
      await mutateUpdateEducation({ id: payload.educationId, data: payload.data });
      setEditingEducation(null);
      setShowEducationForm(false);
    } catch (error) { }
  };

  const handleDeleteEducation = async (educationId: string) => {
    try {
      await mutateDeleteEducation(educationId);
      setShowDeleteEduDialog(false);
      setDeletingEducation(null);
    } catch (error) { }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold">Experience</h1>
          <p className="text-muted-foreground">
            My professional journey, education, and achievements
          </p>
        </div>
        <Button onClick={() => activeTab === "education" ? setShowEducationForm(true) : setShowExperienceForm(true)}>
          <Plus className="mr-2 h-4 w-4" /> Add {activeTab === "education" ? "Education" : "Experience"}
        </Button>
      </div>

      <ExperienceForm
        open={showExperienceForm}
        onOpenChange={(open) => {
          setShowExperienceForm(open);
          if (!open) setEditingExperience(null);
        }}
        editExperience={editingExperience}
        onSubmit={editingExperience ? handleEditExperience : handleCreateExperience}
        isLoading={isPendingCreate || isPendingUpdate}
      />

      <EducationForm
        open={showEducationForm}
        onOpenChange={(open) => {
          setShowEducationForm(open);
          if (!open) setEditingEducation(null);
        }}
        editEducation={editingEducation}
        onSubmit={editingEducation ? handleEditEducation : handleCreateEducation}
        isLoading={isPendingCreateEdu || isPendingUpdateEdu}
      />

      <DeleteExperienceDialog
        open={showDeleteDialog}
        onOpenChange={setShowDeleteDialog}
        experience={deletingExperience}
        onConfirm={handleDeleteExperience}
        isLoading={isPendingDelete}
      />

      <DeleteEducationDialog
        open={showDeleteEduDialog}
        onOpenChange={setShowDeleteEduDialog}
        education={deletingEducation}
        onConfirm={handleDeleteEducation}
        isLoading={isPendingDeleteEdu}
      />

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="work">Work Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="certifications">Certifications</TabsTrigger>
          <TabsTrigger value="awards">Awards</TabsTrigger>
        </TabsList>

        <TabsContent value="work" className="space-y-6">
          <div className="space-y-6">
            {isLoadingExperiences ? (
              <div className="flex justify-center p-8">Loading...</div>
            ) : experiences.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground bg-muted/20 border rounded-lg border-dashed">
                <Building className="mx-auto h-12 w-12 opacity-20 mb-4" />
                No work experiences found. Click "Add Experience" to create your first one.
              </div>
            ) : (
              experiences.map((job) => (
                <Card key={job.id} className="overflow-hidden relative group">
                  <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() => {
                            setEditingExperience(job);
                            setShowExperienceForm(true);
                          }}
                        >
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => {
                            setDeletingExperience(job);
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
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <Avatar className="h-16 w-16 border rounded">
                        <AvatarImage
                          src={job.logoUrl || "/placeholder.svg"}
                          alt={job.companyName}
                          className="object-contain"
                        />
                        <AvatarFallback>
                          <Building className="h-8 w-8" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 pr-10">
                        <div className="flex items-start justify-between flex-wrap gap-2">
                          <div>
                            <CardTitle className="text-xl">
                              {job.position}
                            </CardTitle>
                            <CardDescription className="text-base font-medium text-primary">
                              {job.companyName}
                            </CardDescription>
                            <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {job.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {format(new Date(job.startDate), "MMM yyyy")} - {job.endDate ? format(new Date(job.endDate), "MMM yyyy") : "Present"}
                              </div>
                              <Badge variant="secondary">{job.type}</Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground whitespace-pre-wrap">{job.description}</p>

                    {job.achievements && job.achievements.length > 0 && (
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <TrendingUp className="h-4 w-4" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2 text-muted-foreground">
                          {job.achievements.map((achievement: string, idx: number) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-sm"
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {job.technologies && job.technologies.length > 0 && (
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Code className="h-4 w-4" />
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech: any) => (
                            <Badge key={tech.technology.id} variant="outline" className="flex gap-1 items-center">
                              {tech.technology.iconUrl && (
                                <img src={tech.technology.iconUrl} alt={tech.technology.name} className="w-3 h-3 object-contain" />
                              )}
                              {tech.technology.name}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {job.notableProjects && job.notableProjects.length > 0 && (
                      <div>
                        <h4 className="font-semibold mb-3">Notable Projects</h4>
                        <div className="grid gap-3 md:grid-cols-2">
                          {job.notableProjects.map((project: { name: string; description: string; impact: string; }, idx: number) => (
                            <div key={idx} className="border rounded-lg p-3 bg-muted/10">
                              <h5 className="font-medium text-sm">
                                {project.name}
                              </h5>
                              <p className="text-xs text-muted-foreground mb-2 whitespace-pre-wrap">
                                {project.description}
                              </p>
                              <p className="text-xs text-green-600 font-medium">
                                {project.impact}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )))}
          </div>
        </TabsContent>

        <TabsContent value="education" className="space-y-6">
          <div className="space-y-6">
            {isLoadingEducations ? (
              <div className="flex justify-center p-8">Loading...</div>
            ) : educations.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground bg-muted/20 border rounded-lg border-dashed">
                <GraduationCap className="mx-auto h-12 w-12 opacity-20 mb-4" />
                No education history found. Click "Add Education" to create your first one.
              </div>
            ) : (
              educations.map((edu) => (
                <Card key={edu.id} className="overflow-hidden relative group">
                  <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() => {
                            setEditingEducation(edu);
                            setShowEducationForm(true);
                          }}
                        >
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => {
                            setDeletingEducation(edu);
                            setShowDeleteEduDialog(true);
                          }}
                          className="text-red-600"
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarFallback>
                          <GraduationCap className="h-8 w-8" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 pr-10">
                        <CardTitle className="text-xl">
                          {edu.degree ? `${edu.degree} ${edu.fieldOfStudy ? `in ${edu.fieldOfStudy}` : ''}` : edu.category === "FORMAL" ? "Formal Education" : "Informal Education"}
                        </CardTitle>
                        <CardDescription className="text-base font-medium text-primary">
                          {edu.institution}
                        </CardDescription>
                        <div className="flex items-center gap-4 mt-2 mb-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {edu.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {format(new Date(edu.startDate), "MMM yyyy")} - {edu.endDate ? format(new Date(edu.endDate), "MMM yyyy") : "Present"}
                          </div>
                          <Badge variant="secondary">{edu.category}</Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {edu.description && <p className="text-muted-foreground whitespace-pre-wrap">{edu.description}</p>}

                    {edu.achievements && edu.achievements.length > 0 && (
                      <div>
                        {edu.category === "INFORMAL" ? (
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <TrendingUp className="h-4 w-4" />
                            Key Achievements / Learning Points
                          </h4>
                        ) : (
                          <h4 className="font-semibold mb-3">Academic Achievements</h4>
                        )}
                        <ul className="space-y-2 text-muted-foreground">
                          {edu.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </TabsContent>

        <TabsContent value="certifications" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {certifications.map((cert) => (
              <Card key={cert.id}>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src={cert.logo || "/placeholder.svg"}
                        alt={cert.issuer}
                      />
                      <AvatarFallback>
                        <Award className="h-6 w-6" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="text-lg leading-tight">
                        {cert.name}
                      </CardTitle>
                      <CardDescription className="text-primary font-medium">
                        {cert.issuer}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <div>
                      <p className="text-muted-foreground">
                        Issued: {cert.date}
                      </p>
                      <p className="text-muted-foreground">
                        Expires:{" "}
                        {cert.expiry === "Never" ? "Never" : cert.expiry}
                      </p>
                    </div>
                    <Badge
                      variant={
                        cert.expiry === "Never" ? "default" : "secondary"
                      }
                    >
                      {cert.expiry === "Never" ? "Lifetime" : "Valid"}
                    </Badge>
                  </div>

                  <div>
                    <p className="text-xs text-muted-foreground mb-2">
                      Credential ID: {cert.credentialId}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {cert.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full bg-transparent"
                      asChild
                    >
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Verify Certificate
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="awards" className="space-y-6">
          <div className="space-y-4">
            {awards.map((award) => (
              <Card key={award.id}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <award.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-lg">
                            {award.title}
                          </h3>
                          <p className="text-primary font-medium">
                            {award.organization}
                          </p>
                          <p className="text-sm text-muted-foreground mt-2">
                            {award.description}
                          </p>
                        </div>
                        <Badge variant="outline">{award.date}</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
