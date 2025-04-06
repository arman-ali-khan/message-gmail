"use client";

import { Sidebar } from "@/components/sidebar";
import { MessageList } from "@/components/message-list";
import { ComposeButton } from "@/components/compose-button";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Layout from "../message-layut";

export default function TrashPage() {
  return (
    <Layout> <MessageList currentFolder="trash" /></Layout>
  );
}