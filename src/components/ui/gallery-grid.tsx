"use client";

interface GalleryImage {
  url: string;
  alt: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
}

export function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {images.map((image, index) => {
        // Determine the grid layout for each image
        let gridClass = "";
        if (index === 0) gridClass = "col-span-1 row-span-1"; // First image: small, landscape
        if (index === 1 || index === 2) gridClass = "col-span-1 row-span-2"; // Second and third: vertical
        if (index === 3) gridClass = "col-span-1 row-span-1"; // Fourth: landscape

        return (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg ${gridClass}`}
          >
            <img
              src={`${image.url}?auto=format&fit=crop&w=800&q=80`}
              alt={image.alt}
              className="h-full w-full object-cover transition-transform hover:scale-105"
            />
          </div>
        );
      })}
    </div>
  );
}
