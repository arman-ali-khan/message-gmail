"use client";

import { Sidebar } from "@/components/sidebar";
import { MessageList } from "@/components/message-list";
import { ComposeButton } from "@/components/compose-button";
import { SearchDialog } from "@/components/search-dialog";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState } from "react";

export default function Home() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        <div className="flex items-center justify-between p-4 border-b">
          <Button
            variant="outline"
            className="w-[300px] justify-start text-muted-foreground"
            onClick={() => {}}
          >
            <Search className="mr-2 h-4 w-4" />
            Search messages...
          </Button>
          <ComposeButton />
        </div>
        <MessageList />
      </main>
    </div>
  );
}