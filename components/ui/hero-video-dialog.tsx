/* eslint-disable @next/next/no-img-element */

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroVideoDialogProps {
  className?: string;
  animationStyle?: "from-bottom" | "from-center" | "from-top" | "from-left" | "from-right" | "fade" | "top-in-bottom-out" | "left-in-right-out";
  videoSrc: string;
  thumbnailSrc: string;
  thumbnailAlt?: string;
  trigger?: React.ReactNode;
}

export default function HeroVideoDialog({
  trigger,
  className,
  videoSrc,
  thumbnailSrc,
  thumbnailAlt = "Video thumbnail",
}: HeroVideoDialogProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={cn("relative", className)}>
      <div
        className="relative cursor-pointer group"
        onClick={() => setIsVideoOpen(true)}
      >
        <img
          src={thumbnailSrc}
          alt={thumbnailAlt}
          className="w-full rounded-2xl shadow-2xl border border-border"
        />
        <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
          {trigger}
        </div>
      </div>
      {mounted && createPortal(
          <>
              {isVideoOpen && (
                  <div
                      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
                      onClick={() => setIsVideoOpen(false)}
                  >
                      <div
                          className="relative w-full max-w-4xl aspect-video mx-4"
                          onClick={(e) => e.stopPropagation()}
                      >
                          <button
                              className="absolute -top-16 right-0 text-white text-xl bg-neutral-900/50 ring-1 backdrop-blur-md rounded-full p-2 dark:bg-neutral-100/50 dark:text-black"
                              onClick={() => setIsVideoOpen(false)}
                          >
                              <X className="size-5" />
                          </button>
                          <div className="size-full border-2 border-white rounded-2xl overflow-hidden isolate">
                              <iframe
                                  src={videoSrc}
                                  className="size-full rounded-2xl"
                                  allowFullScreen
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              ></iframe>
                          </div>
                      </div>
                  </div>
              )}
          </>,
        document.body
      )}
    </div>
  );
}
