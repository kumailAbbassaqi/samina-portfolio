"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Modal } from "./Modal";
import { cn } from "@/lib/utils";

interface ImageGalleryProps {
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  columns = 3,
  className,
}) => {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    caption?: string;
  } | null>(null);

  if (!images || images.length === 0) {
    return (
      <div className="py-6 text-center text-xs text-text-muted">
        No gallery items currently available.
      </div>
    );
  }

  const columnClasses = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
  };

  return (
    <>
      <div className={cn("grid gap-4", columnClasses[columns], className)}>
        {images.map((img, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedImage(img)}
            className="group relative aspect-video cursor-pointer overflow-hidden rounded-lg border border-surface-border bg-background-subtle focus-within:ring-2 focus-within:ring-accent"
            tabIndex={0}
            role="button"
            onKeyDown={(e) => e.key === "Enter" && setSelectedImage(img)}
            aria-label={`View image: ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {img.caption && (
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                {img.caption}
              </div>
            )}
          </div>
        ))}
      </div>

      <Modal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        title={selectedImage?.caption || selectedImage?.alt}
        size="xl"
      >
        {selectedImage && (
          <div className="relative aspect-video w-full overflow-hidden rounded-md bg-black/10">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
        )}
      </Modal>
    </>
  );
};
