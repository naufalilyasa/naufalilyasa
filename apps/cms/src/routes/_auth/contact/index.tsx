import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/card";
import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";
import { Textarea } from "@repo/ui/components/textarea";
import { Alert, AlertDescription } from "@repo/ui/components/alert";
import { Separator } from "@repo/ui/components/separator";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/ui/components/form";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Github,
  Linkedin,
  Twitter,
  Globe,
  Loader2,
} from "lucide-react";

export const Route = createFileRoute("/_auth/contact/")({
  component: RouteComponent,
});

const contactInfo = {
  email: "john.doe@example.com",
  phone: "+62 812 3456 7890",
  location: "Jakarta, Indonesia",
  timezone: "GMT+7 (WIB)",
  availability: "Monday - Friday, 9 AM - 6 PM",
  responseTime: "Within 24 hours",
};

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/johndoe",
    icon: Github,
    username: "@johndoe",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/johndoe",
    icon: Linkedin,
    username: "John Doe",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/johndoe",
    icon: Twitter,
    username: "@johndoe",
  },
  {
    name: "Website",
    url: "https://johndoe.dev",
    icon: Globe,
    username: "johndoe.dev",
  },
];

function RouteComponent() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const form = useForm<any>({
    // resolver: zodResolver(),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      company: "",
      phone: "",
    },
  });

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    setSubmitResult(null);

    // try {
    //   const result = await sendContactEmail(data);
    //   setSubmitResult(result);

    //   if (result.success) {
    //     form.reset();
    //   }
    // } catch (error) {
    //   setSubmitResult({
    //     success: false,
    //     message: "An unexpected error occurred. Please try again.",
    //   });
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Contact Me</h1>
        <p className="text-muted-foreground">
          Let's discuss your project or just say hello. I'd love to hear from
          you!
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="h-5 w-5" />
                Send Message
              </CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as
                possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {submitResult && (
                <Alert
                  className={`mb-6 ${submitResult.success ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}`}
                >
                  {submitResult.success ? (
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  ) : (
                    <AlertCircle className="h-4 w-4 text-red-600" />
                  )}
                  <AlertDescription
                    className={
                      submitResult.success ? "text-green-800" : "text-red-800"
                    }
                  >
                    {submitResult.message}
                  </AlertDescription>
                </Alert>
              )}

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid gap-4 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="john@example.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Company" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="+62 812 3456 7890" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Project Discussion / Collaboration Opportunity"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me about your project, requirements, or any questions you have..."
                            className="min-h-[120px] resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          {field.value?.length || 0}/1000 characters
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          {/* Contact Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">{contactInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">{contactInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">
                      {contactInfo.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <div>
                    <p className="font-medium">Availability</p>
                    <p className="text-muted-foreground">
                      {contactInfo.availability}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {contactInfo.timezone}
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="text-center">
                <p className="text-sm font-medium mb-1">Response Time</p>
                <p className="text-sm text-muted-foreground">
                  {contactInfo.responseTime}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card>
            <CardHeader>
              <CardTitle>Connect With Me</CardTitle>
              <CardDescription>
                Find me on social media and other platforms
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors"
                  >
                    <link.icon className="h-5 w-5 text-muted-foreground" />
                    <div className="flex-1">
                      <p className="font-medium text-sm">{link.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {link.username}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Contact */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Contact</CardTitle>
              <CardDescription>Prefer a direct approach?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                variant="outline"
                className="w-full justify-start bg-transparent"
                asChild
              >
                <a href={`mailto:${contactInfo.email}`}>
                  <Mail className="mr-2 h-4 w-4" />
                  Send Email
                </a>
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start bg-transparent"
                asChild
              >
                <a href={`tel:${contactInfo.phone}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  Call Me
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
