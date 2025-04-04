"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search } from "lucide-react";
import { useState } from "react";
import { searchData } from "@/lib/data";
import Link from "next/link";

export function SearchDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [search, setSearch] = useState("");

  const filteredMessages = searchData.filter(
    (message) =>
      message.subject.toLowerCase().includes(search.toLowerCase()) ||
      message.preview.toLowerCase().includes(search.toLowerCase()) ||
      message.sender.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] p-0">
        <div className="flex items-center border-b p-4">
          <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
          <Input
            placeholder="Search messages..."
            className="border-0 mr-6 focus-visible:ring-0"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <ScrollArea className="max-h-[400px] overflow-y-auto p-4">
          <div className="space-y-4">
            {filteredMessages.map((message) => (
              <Link href={`/message/${message.id}`} key={message.id}>
                <div
                  className="cursor-pointer rounded-lg p-4 hover:bg-muted"
                  onClick={() => {
                    onOpenChange(false);
                  }}
                >
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <p className={`text-sm font-medium leading-none ${!message.read ? "font-semibold" : ""}`}>
                        {message.subject}
                      </p>
                      <span className="text-xs text-muted-foreground">{message.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-1">
                      {message.preview}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium">{message.sender}</span>
                      {!message.read && (
                        <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            {filteredMessages.length === 0 && (
              <div className="text-center text-sm text-muted-foreground py-6">
                No messages found
              </div>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}