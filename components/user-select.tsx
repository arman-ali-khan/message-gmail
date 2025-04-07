"use client";

import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
  role?: string;
  department?: string;
}

interface UserSelectProps {
  onSelect: (value: string) => void;
  placeholder?: string;
  users?: User[];
}

const defaultUsers: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@company.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&q=80&fit=crop",
    role: "Senior Developer",
    department: "Engineering"
  },
  {
    id: 2,
    name: "Alice Smith",
    email: "alice.smith@company.com",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&q=80&fit=crop",
    role: "Product Manager",
    department: "Product"
  },
  {
    id: 3,
    name: "Bob Wilson",
    email: "bob.wilson@company.com",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&q=80&fit=crop",
    role: "UX Designer",
    department: "Design"
  },
  {
    id: 4,
    name: "Emma Johnson",
    email: "emma.johnson@company.com",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&q=80&fit=crop",
    role: "Marketing Lead",
    department: "Marketing"
  },
  {
    id: 5,
    name: "Michael Chen",
    email: "michael.chen@company.com",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&q=80&fit=crop",
    role: "Data Scientist",
    department: "Analytics"
  },
  {
    id: 6,
    name: "Sarah Davis",
    email: "sarah.davis@company.com",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=32&h=32&q=80&fit=crop",
    role: "HR Manager",
    department: "Human Resources"
  },
  {
    id: 7,
    name: "David Brown",
    email: "david.brown@company.com",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=32&h=32&q=80&fit=crop",
    role: "Sales Director",
    department: "Sales"
  },
  {
    id: 8,
    name: "Lisa Taylor",
    email: "lisa.taylor@company.com",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=32&h=32&q=80&fit=crop",
    role: "Content Strategist",
    department: "Marketing"
  }
];

export function UserSelect({ onSelect, placeholder = "Select a recipient...", users = defaultUsers }: UserSelectProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [search, setSearch] = React.useState("");

  const filteredUsers = React.useMemo(() => {
    if (!search) return users;
    
    return users.filter(user => 
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.role?.toLowerCase().includes(search.toLowerCase()) ||
      user.department?.toLowerCase().includes(search.toLowerCase())
    );
  }, [users, search]);

  const selectedUser = users.find(user => user.email === value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {selectedUser ? (
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src={selectedUser.avatar} alt={selectedUser.name} />
                <AvatarFallback>
                  {selectedUser.name.split(" ").map((n) => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start">
                <span className="text-sm">{selectedUser.name}</span>
                <span className="text-xs text-muted-foreground">{selectedUser.email}</span>
              </div>
            </div>
          ) : (
            <span className="text-muted-foreground">{placeholder}</span>
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command shouldFilter={false}>
          <CommandInput 
            placeholder="Search users..." 
            value={search}
            onValueChange={setSearch}
          />
          <CommandEmpty>No users found.</CommandEmpty>
          <CommandGroup>
            {filteredUsers.map((user) => (
              <CommandItem
                key={user.email}
                value={user.email}
                onSelect={(currentValue) => {
                  setValue(currentValue);
                  onSelect(currentValue);
                  setOpen(false);
                }}
              >
                <div className="flex items-center gap-2 w-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>
                      {user.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col flex-1">
                    <span className="text-sm font-medium">{user.name}</span>
                    <span className="text-xs text-muted-foreground">{user.email}</span>
                    {user.role && (
                      <span className="text-xs text-muted-foreground">{user.role} • {user.department}</span>
                    )}
                  </div>
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === user.email ? "opacity-100" : "opacity-0"
                    )}
                  />
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}