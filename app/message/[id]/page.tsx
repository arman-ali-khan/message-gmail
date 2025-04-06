"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Archive, ArrowLeft, Forward, MoreVertical, Reply, Share2, Smile, Star, Trash2 } from "lucide-react";
import Link from "next/link";
import { Sidebar } from "@/components/sidebar";
import { MessageList } from "@/components/message-list";
import { ComposeButton } from "@/components/compose-button";
import { Search } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MessageReply } from "@/components/message-reply";
import { useState } from "react";
import Layout from "@/app/message-layut";

const messages = [
  {
    id: 1,
    sender: "John Doe",
    email: "john@example.com",
    subject: "Meeting Tomorrow",
    content: `<p>Hi there,</p>
    <p>I hope this email finds you well. I wanted to discuss the project details for our upcoming meeting tomorrow.</p>
    <p>Here are the key points we need to cover:</p>
    <ul>
      <li>Project timeline and milestones</li>
      <li>Resource allocation</li>
      <li>Budget considerations</li>
    </ul>
    <p>Please let me know if you need any additional information before the meeting.</p>
    <p>Best regards,<br>John</p>`,
    time: "10:30 AM",
    date: "Mar 15, 2024",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&q=80&fit=crop",
    attachments: [
      { name: "presentation.pdf", size: "2.4 MB" },
      { name: "budget.xlsx", size: "1.2 MB" },
    ],
  },
];

export default function MessagePage({ params }: { params: { id: string } }) {
  const message = messages.find((m) => m.id.toString() === params.id) || messages[0];
  const [showReply, setShowReply] = useState(false);

  return (
    <Layout>
        <div className="container mx-auto m-0 py-8 w-full">
      <Card className="mb-6 px-3 py-2 sticky z-40 top-[73px] w-full flex items-center justify-between">
        <Link href="/">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="pr-2 h-4 w-4" />
            Back to Inbox
          </Button>
        </Link>
        <div className="flex items-center gap-0">
          <Button variant="ghost" size="icon">
            <Archive className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Star className="h-4 w-4" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Mark as unread</DropdownMenuItem>
              <DropdownMenuItem>Mark as spam</DropdownMenuItem>
              <DropdownMenuItem className="text-destructive">
                <Trash2 className="pr-2 h-4 w-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </Card>

      <Card className="p-6 mt-12">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-4">{message.subject}</h1>
          <div className="flex items-start">
            <Avatar className="h-12 w-12">
              <AvatarImage src={message.avatar} alt={message.sender} />
              <AvatarFallback>
                {message.sender.split(" ").map((n) => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
            <div className="ml-4">
              <div className="flex items-center gap-2">
                <p className="font-medium">{message.sender}</p>
                <span className="text-sm text-muted-foreground">
                  &lt;{message.email}&gt;
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                {message.date} at {message.time}
              </p>
            </div>
          </div>
        </div>

        <div className="prose prose-sm max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: message.content }} />

        {message.attachments.length > 0 && (
          <div className="mt-6 border-t pt-6">
            <h2 className="text-sm font-semibold mb-3">Attachments</h2>
            <div className="grid gap-2">
              {message.attachments.map((attachment) => (
                <div
                  key={attachment.name}
                  className="flex items-center justify-between rounded-lg border p-3"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{attachment.name}</span>
                    <span className="text-sm text-muted-foreground">
                      ({attachment.size})
                    </span>
                  </div>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-6 border-t pt-6">
          <div className="flex items-center gap-2">
            <Button variant="outline" className="gap-2" onClick={() => setShowReply(true)}>
              <Reply className="h-4 w-4" />
              Reply
            </Button>
            <Button variant="outline" className="gap-2">
              <Forward className="h-4 w-4" />
              Forward
            </Button>
            <Button variant="outline" className="gap-2">
              <Smile className="h-4 w-4" />
              React
            </Button>
            <Button variant="outline" className="gap-2">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
          </div>
        </div>
      </Card>

      {showReply && (
        <MessageReply
          originalMessage={{
            sender: message.sender,
            subject: message.subject,
            date: message.date,
            time: message.time,
            content: message.content,
          }}
          onClose={() => setShowReply(false)}
        />
      )}
    </div>
    </Layout>
  
  );
}