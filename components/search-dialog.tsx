"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search } from "lucide-react";
import { useState } from "react";

export function SearchDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [search, setSearch] = useState("");

  const messages = [
    {
      id: 1,
      subject: "Meeting Tomorrow",
      preview: "Hi, let's discuss the project details...",
      sender: "John Doe",
      date: "10:30 AM",
    },
    // Add more messages for search results
  ];

  const filteredMessages = messages.filter(
    (message) =>
      message.subject.toLowerCase().includes(search.toLowerCase()) ||
      message.preview.toLowerCase().includes(search.toLowerCase()) ||
      message.sender.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <div className="flex items-center border-b pb-4">
          <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
          <Input
            placeholder="Search messages..."
            className="border-0 focus-visible:ring-0"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <ScrollArea className="max-h-[400px] overflow-y-auto">
          <div className="space-y-4">
            {filteredMessages.map((message) => (
              <div
                key={message.id}
                className="cursor-pointer rounded-lg p-4 hover:bg-muted"
                onClick={() => {
                  // Handle message selection
                  onOpenChange(false);
                }}
              >
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {message.subject}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {message.preview}
                  </p>
                  <div className="flex items-center pt-2">
                    <span className="text-xs text-muted-foreground">
                      {message.sender} · {message.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}