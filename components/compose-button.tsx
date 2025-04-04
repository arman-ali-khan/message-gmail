"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PenSquare } from "lucide-react";
import dynamic from "next/dynamic";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading editor...</p>,
});

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "image",
];

export function ComposeButton() {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");

  const handleSend = () => {
    // Handle sending message
    setOpen(false);
  };

  const handleSaveDraft = () => {
    // Handle saving draft
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className=" fixed z-40 bottom-4 right-4" asChild>
        <Button className="px-6">
          <PenSquare className="mr-2 h-4 w-4" />
          Compose
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[725px]">
        <DialogHeader>
          <DialogTitle>New Message</DialogTitle>
          <DialogDescription>
            Compose and send your message to multiple recipients
          </DialogDescription>
        </DialogHeader>
         <ScrollArea className={cn("h-[calc(100vh-10rem)]")}
            >
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="recipients">To</Label>
            <Input
              id="recipients"
              placeholder="Enter usernames (#user) or phone numbers"
              className="col-span-3"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" placeholder="Enter message subject" />
          </div>
          <div className="grid gap-2">
            <Label>Message</Label>
            <div className="min-h-[300px]">
              <ReactQuill
                theme="snow"
                value={content}
                onChange={setContent}
                modules={modules}
                formats={formats}
                className="h-[250px]"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-start gap-2">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="secondary" onClick={handleSaveDraft}>
            Save Draft
          </Button>
          <Button onClick={handleSend}>Send</Button>
        </div>
           </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}