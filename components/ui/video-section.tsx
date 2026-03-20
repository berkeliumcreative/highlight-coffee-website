// @ts-nocheck
"use client";

import { cn } from "@/lib/utils";

interface VideoSectionProps {
  videoSrc?: string;
  youtubeId?: string;
  title?: string;
  className?: string;
}

export function VideoSection({ videoSrc, youtubeId, title, className }: VideoSectionProps) {
  return (
    <div className={cn("overflow-hidden rounded-xl shadow-lg", className)}>
      {youtubeId ? (
        <iframe
          title={title || "Video"}
          width="100%"
          className="aspect-video"
          src={`https://www.youtube.com/embed/${youtubeId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : videoSrc ? (
        <video
          controls
          className="w-full aspect-video object-cover"
          src={videoSrc}
        />
      ) : (
        <div className="w-full aspect-video bg-muted flex items-center justify-center">
          <span className="text-muted-foreground">Video placeholder</span>
        </div>
      )}
    </div>
  );
}
