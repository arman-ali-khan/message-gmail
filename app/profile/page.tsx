"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Camera, ChevronRight, MapPin, Building2, GraduationCap, Briefcase, Heart } from "lucide-react";
import Link from "next/link";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Profile Header */}
      <div className="relative h-[200px] bg-primary">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        </div>
        <div className="container mx-auto px-4">
          <div className="relative pt-8">
            <Link href="/" className="text-white">
              <ChevronRight className="h-6 w-6 rotate-180" />
            </Link>
            <div className="flex items-center gap-4 pt-4">
              <div className="relative">
                <Avatar className="h-24 w-24 border-4 border-background">
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&q=80&fit=crop"
                    alt="User"
                  />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Button
                  size="icon"
                  className="absolute bottom-0 right-0 rounded-full"
                  variant="secondary"
                >
                  <Camera className="h-4 w-4" />
                </Button>
              </div>
              <div className="text-white">
                <h1 className="text-2xl font-bold">John Doe</h1>
                <p className="text-sm opacity-80">@johndoe</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="container mx-auto px-4 py-6">
        <div className="space-y-6">
          {/* Basic Info */}
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Basic Information</h2>
                <Link href="/settings">
                  <Button variant="outline" size="sm">Edit Profile</Button>
                </Link>
              </div>
              <div className="grid gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Full Name</p>
                  <p>John Michael Doe</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Nickname</p>
                  <p>Johnny</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Gender</p>
                  <p>Male</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Bio</p>
                  <p>Senior Software Engineer passionate about building great products</p>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <p>San Francisco, United States</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Education */}
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                <h2 className="text-lg font-semibold">Education</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">Stanford University</p>
                  <p className="text-sm text-muted-foreground">Master's in Computer Science • 2018-2020</p>
                </div>
                <div>
                  <p className="font-medium">MIT</p>
                  <p className="text-sm text-muted-foreground">Bachelor's in Computer Science • 2014-2018</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Experience */}
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                <h2 className="text-lg font-semibold">Experience</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">Senior Software Engineer at Google</p>
                  <p className="text-sm text-muted-foreground">2020 - Present</p>
                </div>
                <div>
                  <p className="font-medium">Software Engineer at Facebook</p>
                  <p className="text-sm text-muted-foreground">2018 - 2020</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Skills */}
          <Card className="p-6">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {["JavaScript", "TypeScript", "React", "Node.js", "Python", "AWS"].map((skill) => (
                  <div key={skill} className="rounded-full bg-secondary px-3 py-1 text-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Hobbies */}
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                <h2 className="text-lg font-semibold">Hobbies</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Photography", "Traveling", "Reading", "Hiking", "Gaming"].map((hobby) => (
                  <div key={hobby} className="rounded-full bg-secondary px-3 py-1 text-sm">
                    {hobby}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}