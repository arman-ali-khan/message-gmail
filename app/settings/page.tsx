"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Moon, Sun, UserCircle } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Settings</CardTitle>
            <Link href="/">
              <Button variant="outline">Back to Messages</Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList>
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="appearance">Appearance</TabsTrigger>
              <TabsTrigger value="blocked">Blocked Users</TabsTrigger>
              <TabsTrigger value="folders">Folders</TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-6">
              <div className="flex items-start gap-8">
                <div className="flex flex-col items-center space-y-4">
                  <Avatar className="h-32 w-32">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=128&h=128&q=80&fit=crop"
                      alt="User"
                    />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Button variant="outline" size="sm">
                    Change Photo
                  </Button>
                </div>
                <div className="flex-1 space-y-6">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" defaultValue="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" defaultValue="+1234567890" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="john@example.com" />
                    </div>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline">Cancel</Button>
                    <Button>Save Changes</Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="appearance" className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">Theme</h4>
                    <p className="text-sm text-muted-foreground">
                      Select your preferred theme
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Sun className="h-4 w-4" />
                    <Switch
                      checked={theme === "dark"}
                      onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                    />
                    <Moon className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="blocked" className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Input placeholder="Add user to block list..." />
                  <Button>Add</Button>
                </div>
                <div className="space-y-4">
                  {["user1", "user2", "user3"].map((user) => (
                    <div key={user} className="flex items-center justify-between rounded-lg border p-4">
                      <div className="flex items-center gap-4">
                        <UserCircle className="h-8 w-8" />
                        <div>
                          <p className="font-medium">@{user}</p>
                          <p className="text-sm text-muted-foreground">Blocked on 01/01/2024</p>
                        </div>
                      </div>
                      <Button variant="destructive" size="sm">Unblock</Button>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="folders" className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Input placeholder="New folder name..." />
                  <Button>Add Folder</Button>
                </div>
                <div className="space-y-4">
                  {["Work", "Personal", "Projects"].map((folder) => (
                    <div key={folder} className="flex items-center justify-between rounded-lg border p-4">
                      <p className="font-medium">{folder}</p>
                      <Button variant="destructive" size="sm">Delete</Button>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}