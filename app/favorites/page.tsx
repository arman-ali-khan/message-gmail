"use client";

import { Sidebar } from "@/components/sidebar";
import { MessageList } from "@/components/message-list";
import { ComposeButton } from "@/components/compose-button";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Layout from "../message-layout";

export default function FavoritesPage() {
  return (
    <Layout> <MessageList currentFolder="favorites" /></Layout>
  );
}