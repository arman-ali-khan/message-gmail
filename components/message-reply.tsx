"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Reply, X } from "lucide-react";
import dynamic from "next/dynamic";
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

interface MessageReplyProps {
  originalMessage: {
    sender: string;
    subject: string;
    date: string;
    time: string;
    content: string;
  };
  onClose: () => void;
}

export function MessageReply({ originalMessage, onClose }: MessageReplyProps) {
  const [content, setContent] = useState("");

  const handleSend = () => {
    // Handle sending the reply
    console.log("Sending reply:", content);
    onClose();
  };

  return (
    <div className="fixed inset-x-0 bottom-0 bg-background border-t shadow-lg">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center justify-between p-2 border-b bg-muted/50">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Re:</span>
            <span className="text-sm font-medium truncate max-w-[300px] sm:max-w-[400px] md:max-w-[500px]">
              {originalMessage.subject}
            </span>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="p-4">
          <div className="h-[40vh] min-h-[200px]">
            <ReactQuill
              theme="snow"
              value={content}
              onChange={setContent}
              modules={modules}
              formats={formats}
              className="h-[calc(100%-50px)]"
              placeholder={`Reply to ${originalMessage.sender}...`}
            />
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleSend}>
              <Reply className="mr-2 h-4 w-4" />
              Send Reply
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}