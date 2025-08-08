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
} from "lucide-react";

export const Route = createFileRoute("/_auth/experiences/")({
  component: RouteComponent,
});

const workExperience = [
  {
    id: 1,
    company: "Tech Solutions Inc.",
    logo: "/placeholder.svg?height=60&width=60",
    position: "Senior Full Stack Developer",
    location: "Jakarta, Indonesia",
    type: "Full-time",
    period: "Jan 2022 - Present",
    duration: "2 years 1 month",
    description:
      "Leading development of enterprise web applications using React, Node.js, and AWS. Mentoring junior developers and implementing CI/CD pipelines to improve deployment efficiency by 40%.",
    achievements: [
      "Led a team of 5 developers in building a microservices architecture",
      "Reduced application load time by 60% through optimization",
      "Implemented automated testing, increasing code coverage to 95%",
      "Mentored 3 junior developers who were promoted within 6 months",
    ],
    technologies: [
      "React",
      "Node.js",
      "AWS",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "TypeScript",
    ],
    projects: [
      {
        name: "Enterprise CRM System",
        description: "Built a comprehensive CRM system handling 10k+ users",
        impact: "Increased sales team productivity by 35%",
      },
      {
        name: "Real-time Analytics Dashboard",
        description: "Developed real-time data visualization platform",
        impact: "Reduced decision-making time by 50%",
      },
    ],
  },
  {
    id: 2,
    company: "Digital Agency Co.",
    logo: "/placeholder.svg?height=60&width=60",
    position: "Full Stack Developer",
    location: "Bandung, Indonesia",
    type: "Full-time",
    period: "Mar 2020 - Dec 2021",
    duration: "1 year 10 months",
    description:
      "Developed custom web applications for clients across various industries. Collaborated with design teams to create responsive and user-friendly interfaces.",
    achievements: [
      "Successfully delivered 15+ client projects on time and within budget",
      "Improved client satisfaction score from 4.2 to 4.8/5",
      "Reduced development time by 30% through code reusability",
      "Established best practices for the development team",
    ],
    technologies: ["Vue.js", "Express", "MongoDB", "Firebase", "Tailwind CSS"],
    projects: [
      {
        name: "E-commerce Platform",
        description: "Built scalable e-commerce solution for fashion brand",
        impact: "Generated $2M+ in online sales",
      },
      {
        name: "Learning Management System",
        description: "Developed LMS for educational institution",
        impact: "Served 5000+ students and teachers",
      },
    ],
  },
  {
    id: 3,
    company: "StartupXYZ",
    logo: "/placeholder.svg?height=60&width=60",
    position: "Frontend Developer",
    location: "Remote",
    type: "Contract",
    period: "Jun 2019 - Feb 2020",
    duration: "9 months",
    description:
      "Built responsive web applications and mobile apps using React and React Native. Worked closely with UX/UI designers to implement pixel-perfect designs.",
    achievements: [
      "Launched mobile app with 10k+ downloads in first month",
      "Achieved 99.9% uptime for web applications",
      "Implemented responsive design supporting 15+ device types",
      "Reduced bundle size by 45% through optimization",
    ],
    technologies: [
      "React",
      "React Native",
      "Redux",
      "Styled Components",
      "Jest",
    ],
    projects: [
      {
        name: "Food Delivery App",
        description: "Built cross-platform mobile app for food delivery",
        impact: "Acquired 50k+ active users",
      },
    ],
  },
];

const education = [
  {
    id: 1,
    institution: "University of Technology",
    logo: "/placeholder.svg?height=60&width=60",
    degree: "Bachelor of Computer Science",
    field: "Software Engineering",
    location: "Jakarta, Indonesia",
    period: "2015 - 2019",
    gpa: "3.85/4.00",
    status: "Magna Cum Laude",
    description:
      "Focused on Software Engineering and Database Systems. Active in programming competitions and tech communities.",
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Software Engineering",
      "Computer Networks",
      "Machine Learning",
      "Web Development",
    ],
    achievements: [
      "Dean's List for 6 consecutive semesters",
      "Winner of National Programming Competition 2018",
      "President of Computer Science Student Association",
      "Published research paper on Machine Learning applications",
    ],
  },
];

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
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Experience</h1>
        <p className="text-muted-foreground">
          My professional journey, education, and achievements
        </p>
      </div>

      <Tabs defaultValue="work" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="work">Work Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="certifications">Certifications</TabsTrigger>
          <TabsTrigger value="awards">Awards</TabsTrigger>
        </TabsList>

        <TabsContent value="work" className="space-y-6">
          <div className="space-y-6">
            {workExperience.map((job, index) => (
              <Card key={job.id} className="overflow-hidden">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage
                        src={job.logo || "/placeholder.svg"}
                        alt={job.company}
                      />
                      <AvatarFallback>
                        <Building className="h-8 w-8" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl">
                            {job.position}
                          </CardTitle>
                          <CardDescription className="text-base font-medium text-primary">
                            {job.company}
                          </CardDescription>
                          <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {job.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {job.period}
                            </div>
                            <Badge variant="secondary">{job.type}</Badge>
                          </div>
                        </div>
                        <Badge variant="outline">{job.duration}</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{job.description}</p>

                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, idx) => (
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

                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Code className="h-4 w-4" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Notable Projects</h4>
                    <div className="grid gap-3 md:grid-cols-2">
                      {job.projects.map((project, idx) => (
                        <div key={idx} className="border rounded-lg p-3">
                          <h5 className="font-medium text-sm">
                            {project.name}
                          </h5>
                          <p className="text-xs text-muted-foreground mb-2">
                            {project.description}
                          </p>
                          <p className="text-xs text-green-600 font-medium">
                            {project.impact}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="education" className="space-y-6">
          <div className="space-y-6">
            {education.map((edu) => (
              <Card key={edu.id}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage
                        src={edu.logo || "/placeholder.svg"}
                        alt={edu.institution}
                      />
                      <AvatarFallback>
                        <GraduationCap className="h-8 w-8" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="text-xl">{edu.degree}</CardTitle>
                      <CardDescription className="text-base font-medium text-primary">
                        {edu.institution}
                      </CardDescription>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {edu.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {edu.period}
                        </div>
                        <Badge variant="secondary">GPA: {edu.gpa}</Badge>
                        <Badge variant="default">{edu.status}</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{edu.description}</p>

                  <div>
                    <h4 className="font-semibold mb-3">Relevant Coursework</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <Badge key={course} variant="outline">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">
                      Academic Achievements
                    </h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, idx) => (
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
                </CardContent>
              </Card>
            ))}
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
