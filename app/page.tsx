"use client";

import { Sidebar } from "@/components/sidebar";
import { MessageList } from "@/components/message-list";
import { ComposeButton } from "@/components/compose-button";
import { SearchDialog } from "@/components/search-dialog";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState } from "react";
import Layout from "./message-layut";

export default function Home() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
   <Layout> <MessageList /></Layout>
  );
}