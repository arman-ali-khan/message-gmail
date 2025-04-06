"use client";

import { Sidebar } from "@/components/sidebar";
import { MessageList } from "@/components/message-list";
import { ComposeButton } from "@/components/compose-button";
import { SearchDialog } from "@/components/search-dialog";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState } from "react";

export default function Layout({children}: {children: React.ReactNode}) {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="flex h-screen bg-background">
       
      <Sidebar />
      <main className="flex-1 flex flex-col">
        <div className="sm:flex justify-end w-full items-center sm:justify-between p-4 border-b">
          <Button
            variant="outline"
            className="w-full pl-12 sm:pl-4 justify-start text-muted-foreground"
            onClick={() => setSearchOpen(true)}
          >
            <Search className="mr-2 h-4 w-4" />
            Search messages...
          </Button>
          <ComposeButton />
        </div>
        {children}
        <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
      </main>
    </div>
  );
}