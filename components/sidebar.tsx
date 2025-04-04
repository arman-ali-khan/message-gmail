"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Archive,
  Flag,
  Inbox,
  MessageSquare,
  Settings,
  Star,
  Trash2,
  UserCircle,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const sidebarItems = [
  { icon: Inbox, label: "Inbox", href: "/" },
  { icon: MessageSquare, label: "Sent", href: "/sent" },
  { icon: Archive, label: "Archive", href: "/archive" },
  { icon: Star, label: "Favorites", href: "/favorites" },
  { icon: Flag, label: "Spam", href: "/spam" },
  { icon: Trash2, label: "Trash", href: "/trash" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="pb-12 min-h-screen w-64 border-r">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="flex items-center justify-between mb-8">
            <Link href="/profile" className="flex items-center">
              <UserCircle className="h-8 w-8" />
              <h2 className="ml-2 text-lg font-semibold">Email App</h2>
            </Link>
            <Link href="/settings">
              <Button variant="ghost" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="space-y-1">
            {sidebarItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={pathname === item.href ? "secondary" : "ghost"}
                  className={cn("w-full justify-start", {
                    "bg-secondary": pathname === item.href,
                  })}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}