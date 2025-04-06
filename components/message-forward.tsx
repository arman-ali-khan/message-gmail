"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Forward, X } from "lucide-react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { Input } from "./ui/input";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading editor...</p>,
});

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link"],
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
];

interface MessageForwardProps {
  originalMessage: {
    sender: string;
    subject: string;
    date: string;
    time: string;
    content: string;
  };
  onClose: () => void;
}

export function MessageForward({ originalMessage, onClose }: MessageForwardProps) {
  const [content, setContent] = useState(`\n\n\n-------- Forwarded Message --------\nFrom: ${originalMessage.sender}\nDate: ${originalMessage.date} ${originalMessage.time}\nSubject: ${originalMessage.subject}\n\n${originalMessage.content}`);

  const handleSend = () => {
    // Handle sending the forwarded message
    console.log("Sending forwarded message:", content);
    onClose();
  };

  return (
    <div className="fixed z-50 inset-x-0 z-40 bottom-0 bg-background border-t shadow-lg">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center justify-between p-2 border-b bg-muted/50">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Fwd:</span>
            <span className="text-sm font-medium truncate max-w-[300px] sm:max-w-[400px] md:max-w-[500px]">
              {originalMessage.subject}
            </span>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="p-4">
          <div className="mb-4">
            <Input 
              placeholder="Enter recipient email or username" 
              className="w-full"
            />
          </div>
          <div className="h-[40vh] min-h-[200px]">
            <ReactQuill
              theme="snow"
              value={content}
              onChange={setContent}
              modules={modules}
              formats={formats}
              className="h-[calc(100%-50px)]"
            />
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleSend}>
              <Forward className="mr-2 h-4 w-4" />
              Forward
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}