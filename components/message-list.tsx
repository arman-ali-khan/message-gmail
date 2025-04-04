"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Archive, MoreVertical, Star, Trash2 } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const initialMessages = [
  {
    id: 1,
    sender: "John Doe",
    subject: "Meeting Tomorrow",
    preview: "Hi, let's discuss the project details...",
    time: "10:30 AM",
    date: "Mar 15",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&q=80&fit=crop",
    isStarred: false,
    folder: "inbox",
    unread: true,
  },
  {
    id: 2,
    sender: "Alice Smith",
    subject: "Project Update",
    preview: "Here's the latest progress report on...",
    time: "Yesterday",
    date: "Mar 14",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&q=80&fit=crop",
    isStarred: true,
    folder: "inbox",
    unread: false,
  },
  {
    id: 3,
    sender: "Bob Wilson",
    subject: "Quarterly Review",
    preview: "Please find attached the quarterly...",
    time: "Mar 13",
    date: "Mar 13",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&q=80&fit=crop",
    isStarred: false,
    folder: "sent",
    unread: false,
  },
  {
    id: 4,
    sender: "Marketing Team",
    subject: "Newsletter Draft",
    preview: "Review the latest newsletter draft...",
    time: "Mar 12",
    date: "Mar 12",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=32&h=32&q=80&fit=crop",
    isStarred: false,
    folder: "archive",
    unread: false,
  },
];

export function MessageList({ currentFolder = "inbox" }) {
  const [messages, setMessages] = useState(initialMessages);

  const filteredMessages = messages.filter((message) => {
    if (currentFolder === "favorites") {
      return message.isStarred;
    }
    return message.folder === currentFolder;
  });

  const handleStar = (id: number) => {
    setMessages(
      messages.map((message) =>
        message.id === id
          ? { ...message, isStarred: !message.isStarred }
          : message
      )
    );
  };

  const handleArchive = (id: number) => {
    setMessages(
      messages.map((message) =>
        message.id === id ? { ...message, folder: "archive" } : message
      )
    );
  };

  const handleSpam = (id: number) => {
    setMessages(
      messages.map((message) =>
        message.id === id ? { ...message, folder: "spam" } : message
      )
    );
  };

  const handleTrash = (id: number) => {
    setMessages(
      messages.map((message) =>
        message.id === id ? { ...message, folder: "trash" } : message
      )
    );
  };

  return (
    <ScrollArea className="flex-1">
      <div className="space-y-1 p-2">
        {filteredMessages.map((message) => (
          <Link href={`/message/${message.id}`} key={message.id}>
            <div
              className={`flex items-center gap-2 rounded-lg p-2 hover:bg-muted ${
                message.unread ? "font-semibold" : ""
              }`}
            >
              <Avatar className="h-9 w-9">
                <AvatarImage src={message.avatar} alt={message.sender} />
                <AvatarFallback>
                  {message.sender.split(" ").map((n) => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{message.sender}</p>
                  <span className="text-sm text-muted-foreground">
                    {message.time}
                  </span>
                </div>
                <p className={`line-clamp-1 text-sm ${message.unread ? "font-medium" : ""}`}>
                  {message.subject}
                </p>
                <p className="line-clamp-1 text-sm text-muted-foreground">
                  {message.preview}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.preventDefault();
                    handleStar(message.id);
                  }}
                >
                  <Star
                    className={`h-4 w-4 ${
                      message.isStarred ? "fill-yellow-400 text-yellow-400" : ""
                    }`}
                  />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.preventDefault();
                    handleArchive(message.id);
                  }}
                >
                  <Archive className="h-4 w-4" />
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild onClick={(e) => e.preventDefault()}>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" onClick={(e) => e.preventDefault()}>
                    <DropdownMenuItem>Mark as unread</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleSpam(message.id)}>
                      Mark as spam
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="text-destructive"
                      onClick={() => handleTrash(message.id)}
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </ScrollArea>
  );
}