"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Archive,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Flag,
  Folder,
  Inbox,
  Menu,
  MessageSquare,
  Settings,
  Star,
  Trash2,
  UserCircle,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";

const sidebarItems = [
  { icon: Inbox, label: "Inbox", href: "/" },
  { icon: MessageSquare, label: "Sent", href: "/sent" },
  { icon: Archive, label: "Archive", href: "/archive" },
  { icon: Star, label: "Favorites", href: "/favorites" },
  { icon: Flag, label: "Spam", href: "/spam" },
  { icon: Trash2, label: "Trash", href: "/trash" },
];

const folders = [
  { label: "Work", href: "/folders/work" },
  { label: "Personal", href: "/folders/personal" },
  { label: "Projects", href: "/folders/projects" },
];

export function Sidebar() {
  const pathname = usePathname();
  const [foldersExpanded, setFoldersExpanded] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div>
      <Button
        variant="ghost"
        size="icon"
        className="fixed left-4 z-[80] top-4 sm:hidden "
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        <Menu className="h-6 w-6" />
      </Button>

      <div
        className={cn(
          "fixed inset-y-0 left-0 z-30 flex flex-col border-r bg-background transition-transform lg:sticky lg:top-0",
          {
            "translate-x-0": isMobileOpen,
            "-translate-x-full lg:translate-x-0": !isMobileOpen,
            "w-64": !isCollapsed,
            "w-20": isCollapsed,
          }
        )}
      >
        <div  className={`fixed top-0 space-y-4 py-4 flex flex-col h-full ${isCollapsed?'w-24':'w-56'}`}>
          <div className="px-3 py-2">
            <div className={`flex mx-auto ${isCollapsed ? 'justify-center':'justify-between'}  items-center mb-8 relative`}>
              <Link
                href="/profile"
                className={cn("flex items-center", {
                  "justify-center": isCollapsed,
                })}
              >
                <UserCircle className="h-8 w-8" />
                {!isCollapsed && (
                  <h2 className="ml-2 text-lg font-semibold">Arman Khan</h2>
                )}
              </Link>
              {!isCollapsed && (
                <Link href="/settings">
                  <Button variant="ghost" size="icon">
                    <Settings className="h-4 w-4" />
                  </Button>
                </Link>
              )}
            </div>
            <ScrollArea
              className={cn("h-[calc(100vh-10rem)]", {
                "px-2": isCollapsed,
              })}
            >
              <div className="space-y-1 flex flex-col">
                {sidebarItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <Button
                      variant={pathname === item.href ? "secondary" : "ghost"}
                      className={cn("w-full", {
                        "justify-start": !isCollapsed,
                        "justify-center p-0 h-10 w-10": isCollapsed,
                        "bg-secondary": pathname === item.href,
                      })}
                      title={isCollapsed ? item.label : undefined}
                    >
                      <item.icon className={cn("h-4 w-4", !isCollapsed && "mr-2")} />
                      {!isCollapsed && item.label}
                    </Button>
                  </Link>
                ))}

                {!isCollapsed && (
                  <div className="pt-4">
                    <Button
                      variant="ghost"
                      className="w-full justify-between"
                      onClick={() => setFoldersExpanded(!foldersExpanded)}
                    >
                      <div className="flex items-center">
                        <Folder className="mr-2 h-4 w-4" />
                        Folders
                      </div>
                      <ChevronDown
                        className={cn("h-4 w-4 transition-transform", {
                          "transform rotate-180": foldersExpanded,
                        })}
                      />
                    </Button>
                    {foldersExpanded && (
                      <div className="mt-1 ml-4 space-y-1">
                        {folders.map((folder) => (
                          <Link key={folder.href} href={folder.href}>
                            <Button
                              variant={pathname === folder.href ? "secondary" : "ghost"}
                              className={cn("w-full justify-start", {
                                "bg-secondary": pathname === folder.href,
                              })}
                              size="sm"
                            >
                              <Folder className="mr-2 h-4 w-4" />
                              {folder.label}
                            </Button>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </ScrollArea>
          </div>
          <div className="mt-auto border-t p-2">
            <Button
              variant="ghost"
              className="w-full justify-center p-0 h-10"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              {isCollapsed ? (
                <ChevronRight className="h-4 w-4" />
              ) : (
                <ChevronLeft className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/80 sm:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </div>
  );
}