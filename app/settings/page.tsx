"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Layout from "../message-layout";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";

export default function SettingsPage() {
  const [loading, setLoading] = useState(false);
  const { theme, setTheme } = useTheme();
  const [blockedUsers] = useState([
    { id: 1, name: "Jane Smith", email: "jane@example.com" },
    { id: 2, name: "Bob Johnson", email: "bob@example.com" },
  ]);
  const [deletedMessages] = useState([
    { id: 1, subject: "Old Project Files", date: "2024-03-01" },
    { id: 2, subject: "Meeting Notes 2023", date: "2024-02-15" },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const handleDeleteAccount = () => {
    // Handle account deletion
    console.log("Account deletion requested");
  };

  const handleUnblockUser = (userId: number) => {
    // Handle unblocking user
    console.log("Unblock user:", userId);
  };

  return (
  <Layout>  <div className="container mx-auto py-10">
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

            {/* Theme & Language */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Appearance & Language</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Theme</Label>
                  <Select value={theme} onValueChange={setTheme}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Español</SelectItem>
                      <SelectItem value="fr">Français</SelectItem>
                      <SelectItem value="de">Deutsch</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
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

            {/* Blocked Users */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Blocked Users</h3>
              <div className="rounded-md border">
                {blockedUsers.length > 0 ? (
                  <div className="divide-y">
                    {blockedUsers.map((user) => (
                      <div
                        key={user.id}
                        className="flex items-center justify-between p-4"
                      >
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {user.email}
                          </p>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleUnblockUser(user.id)}
                        >
                          Unblock
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="p-4 text-center text-muted-foreground">
                    No blocked users
                  </p>
                )}
              </div>
            </div>

            <Separator />

            {/* Permanently Deleted Messages */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Permanently Deleted Messages</h3>
              <p className="text-sm text-muted-foreground">
                These messages cannot be recovered
              </p>
              <div className="rounded-md border">
                {deletedMessages.length > 0 ? (
                  <div className="divide-y">
                    {deletedMessages.map((message) => (
                      <div
                        key={message.id}
                        className="flex items-center justify-between p-4"
                      >
                        <div>
                          <p className="font-medium">{message.subject}</p>
                          <p className="text-sm text-muted-foreground">
                            Deleted on: {message.date}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="p-4 text-center text-muted-foreground">
                    No permanently deleted messages
                  </p>
                )}
              </div>
            </div>

            <Separator />

            {/* Account Management */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Account Management</h3>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive">Delete Account</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete your
                      account and remove all your data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={handleDeleteAccount}
                      className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                    >
                      Delete Account
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>

            <div className="flex justify-end gap-4">
              <Button variant="outline" type="button">
                Cancel
              </Button>
              <Button type="submit" disabled={loading}>
                {loading ? "Saving..." : "Save Changes"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div></Layout>
  );
}