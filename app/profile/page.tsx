"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Camera, Globe2, MapPin, MessageCircle, PenSquare, Phone, Plus, Share2, User2 } from "lucide-react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-muted/20">
      {/* Cover Photo Section */}
      <div className="relative h-[350px] bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1707343843437-caacff5cfa74"
            alt="Cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 right-4">
            <Button variant="secondary" size="sm">
              <Camera className="w-4 h-4 mr-2" />
              Change Cover
            </Button>
          </div>
        </div>
      </div>

      {/* Profile Info Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-[96px]">
        <div className="relative flex flex-col sm:flex-row items-start sm:items-end gap-4 sm:gap-8 mb-6">
          {/* Profile Picture */}
          <div className="relative">
            <Avatar className="w-[180px] h-[180px] border-4 border-background">
              <AvatarImage
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=180&h=180&q=80&fit=crop"
                alt="User"
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Button
              size="icon"
              className="absolute bottom-2 right-2 rounded-full"
              variant="secondary"
            >
              <Camera className="w-4 h-4" />
            </Button>
          </div>

          {/* Profile Info */}
          <div className="flex-1 mb-4">
            <h1 className="text-3xl font-bold text-foreground">John Doe</h1>
            <p className="text-muted-foreground">Software Developer</p>
            <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              San Francisco, CA
              <Globe2 className="w-4 h-4 ml-2" />
              Public
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 mb-4 sm:mb-6">
            <Button>
              <MessageCircle className="w-4 h-4 mr-2" />
              Message
            </Button>
            <Button variant="secondary">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </div>

        {/* Tabs and Content */}
        <Tabs defaultValue="about" className="space-y-4">
          <TabsList className="bg-background w-full justify-start h-12 space-x-4 px-4 border-b rounded-none">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="friends">Friends</TabsTrigger>
            <TabsTrigger value="photos">Photos</TabsTrigger>
          </TabsList>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Intro</h2>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <User2 className="w-4 h-4" />
                      Software Developer at Tech Corp
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      Lives in San Francisco, CA
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Phone className="w-4 h-4" />
                      +1 (555) 123-4567
                    </div>
                    <Button className="w-full" variant="outline">
                      Edit Details
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold">Photos</h2>
                    <Button variant="ghost" className="text-sm text-blue-500">
                      See All
                    </Button>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                      <div
                        key={i}
                        className="aspect-square rounded-md overflow-hidden"
                      >
                        <img
                          src={`https://picsum.photos/200?random=${i}`}
                          alt={`Photo ${i}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&q=80&fit=crop"
                        alt="User"
                      />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <Button variant="outline" className="w-full justify-start text-muted-foreground">
                      What's on your mind, John?
                    </Button>
                  </div>
                  <Separator className="my-4" />
                  <div className="flex justify-between">
                    <Button variant="ghost">
                      <Camera className="w-4 h-4 mr-2" />
                      Photo/Video
                    </Button>
                    <Button variant="ghost">
                      <MapPin className="w-4 h-4 mr-2" />
                      Location
                    </Button>
                    <Button variant="ghost">
                      <Plus className="w-4 h-4 mr-2" />
                      Tag Friends
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Sample Posts */}
              {[1, 2].map((post) => (
                <Card key={post}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Avatar>
                        <AvatarImage
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&q=80&fit=crop"
                          alt="User"
                        />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">John Doe</h3>
                        <p className="text-sm text-muted-foreground">2 hours ago · Public</p>
                      </div>
                    </div>
                    <p className="mb-4">Had an amazing time at the tech conference today! 🚀</p>
                    <img
                      src={`https://picsum.photos/800/400?random=${post}`}
                      alt="Post"
                      className="w-full rounded-lg mb-4"
                    />
                    <div className="flex gap-2">
                      <Button variant="ghost">Like</Button>
                      <Button variant="ghost">Comment</Button>
                      <Button variant="ghost">Share</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
}