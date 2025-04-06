"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { useState } from "react";

export default function SettingsPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Profile Settings</CardTitle>
            <Link href="/profile">
              <Button variant="outline">View Profile</Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Profile Photo */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Profile Photo</h3>
              <div className="flex items-center gap-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&q=80&fit=crop"
                    alt="User"
                  />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Button variant="outline">Change Photo</Button>
              </div>
            </div>

            <Separator />

            {/* Basic Information */}
            <div className="grid gap-4">
              <h3 className="text-lg font-medium">Basic Information</h3>
              
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" defaultValue="John Michael Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nickname">Nickname</Label>
                  <Input id="nickname" defaultValue="Johnny" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" defaultValue="johndoe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" defaultValue="+1234567890" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select defaultValue="male">
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" defaultValue="San Francisco" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" defaultValue="United States" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  defaultValue="Senior Software Engineer passionate about building great products"
                  className="min-h-[100px]"
                />
              </div>
            </div>

            <Separator />

            {/* Education */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Education</h3>
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>School/University</Label>
                    <Input defaultValue="Stanford University" />
                  </div>
                  <div className="space-y-2">
                    <Label>Degree</Label>
                    <Input defaultValue="Master's in Computer Science" />
                  </div>
                  <div className="space-y-2">
                    <Label>Year</Label>
                    <Input defaultValue="2018-2020" />
                  </div>
                </div>
                <Button variant="outline" type="button">Add Education</Button>
              </div>
            </div>

            <Separator />

            {/* Experience */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Experience</h3>
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Company</Label>
                    <Input defaultValue="Google" />
                  </div>
                  <div className="space-y-2">
                    <Label>Position</Label>
                    <Input defaultValue="Senior Software Engineer" />
                  </div>
                  <div className="space-y-2">
                    <Label>Duration</Label>
                    <Input defaultValue="2020 - Present" />
                  </div>
                </div>
                <Button variant="outline" type="button">Add Experience</Button>
              </div>
            </div>

            <Separator />

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Skills</h3>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {["JavaScript", "TypeScript", "React", "Node.js", "Python", "AWS"].map((skill) => (
                    <div key={skill} className="flex items-center gap-2 rounded-full bg-secondary px-3 py-1">
                      <span>{skill}</span>
                      <button className="text-muted-foreground hover:text-foreground">&times;</button>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input placeholder="Add a skill" />
                  <Button type="button">Add</Button>
                </div>
              </div>
            </div>

            <Separator />

            {/* Hobbies */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Hobbies</h3>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {["Photography", "Traveling", "Reading", "Hiking", "Gaming"].map((hobby) => (
                    <div key={hobby} className="flex items-center gap-2 rounded-full bg-secondary px-3 py-1">
                      <span>{hobby}</span>
                      <button className="text-muted-foreground hover:text-foreground">&times;</button>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input placeholder="Add a hobby" />
                  <Button type="button">Add</Button>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <Button variant="outline" type="button">Cancel</Button>
              <Button type="submit" disabled={loading}>
                {loading ? "Saving..." : "Save Changes"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}