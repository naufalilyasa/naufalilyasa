import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@repo/ui/components/avatar";
import { Button } from "@repo/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/card";
import { Input } from "@repo/ui/components/input";
import { Separator } from "@repo/ui/components/separator";
import { Textarea } from "@repo/ui/components/textarea";
import { createFileRoute } from "@tanstack/react-router";
import { Trash2, Upload, User } from "lucide-react";
import { useState } from "react";
import { Label } from "recharts";

export const Route = createFileRoute("/_auth/profile/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "Passionate full-stack developer with 5+ years of experience building scalable web applications.",
    location: "Jakarta, Indonesia",
    website: "https://johndoe.dev",
    github: "johndoe",
    linkedin: "johndoe",
    twitter: "johndoe",
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Profile</h1>
        <p className="text-muted-foreground">
          Professional information and background
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-1">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Profile Information
            </CardTitle>
            <CardDescription>
              Update your personal information and social links
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-6">
              <Avatar className="h-24 w-24">
                <AvatarImage
                  src="/placeholder.svg?height=96&width=96"
                  alt="Profile"
                />
                <AvatarFallback className="text-lg">JD</AvatarFallback>
              </Avatar>
              <div className="space-y-2">
                <Button variant="outline" size="sm">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Photo
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="ml-2 bg-transparent"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Remove
                </Button>
                <p className="text-xs text-muted-foreground">
                  JPG, PNG or GIF. Max size 2MB.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label>Full Name</Label>
                <Input
                  id="name"
                  value={profileData.name}
                  onChange={(e) =>
                    setProfileData({ ...profileData, name: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label>Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={profileData.email}
                  onChange={(e) =>
                    setProfileData({ ...profileData, email: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Bio</Label>
              <Textarea
                id="bio"
                value={profileData.bio}
                onChange={(e) =>
                  setProfileData({ ...profileData, bio: e.target.value })
                }
                className="min-h-[100px]"
              />
              <p className="text-xs text-muted-foreground">
                {profileData.bio.length}/500 characters
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label>Location</Label>
                <Input
                  id="location"
                  value={profileData.location}
                  onChange={(e) =>
                    setProfileData({ ...profileData, location: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label>Website</Label>
                <Input
                  id="website"
                  value={profileData.website}
                  onChange={(e) =>
                    setProfileData({ ...profileData, website: e.target.value })
                  }
                />
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-4">Social Links</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>GitHub Username</Label>
                  <Input
                    id="github"
                    value={profileData.github}
                    onChange={(e) =>
                      setProfileData({ ...profileData, github: e.target.value })
                    }
                    placeholder="username"
                  />
                </div>
                <div className="space-y-2">
                  <Label>LinkedIn Username</Label>
                  <Input
                    id="linkedin"
                    value={profileData.linkedin}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        linkedin: e.target.value,
                      })
                    }
                    placeholder="username"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Twitter Username</Label>
                  <Input
                    id="twitter"
                    value={profileData.twitter}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        twitter: e.target.value,
                      })
                    }
                    placeholder="username"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
