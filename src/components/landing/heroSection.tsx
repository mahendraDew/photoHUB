"use client";

import { Button } from "@/components/ui/button";
import { GalleryGrid } from "@/components/ui/gallery-grid";
import { Camera, Image, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";


const GALLERY_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1732058824460-d89cb7b4a38f",
    alt: "Landscape mountain view"
  },
  {
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    alt: "Mountain peaks at sunset"
  },
  {
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    alt: "Aerial view of forest"
  },
  {
    url: "https://images.unsplash.com/photo-1431794062232-2a99a5431c6c",
    alt: "Starry night sky"
  },
];


export function HeroSection() {
  const router = useRouter();

  const photoNavigate = () => {
    router.push('/photos'); // Navigate to another route
  };

  return (
    <div className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40 ">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <div className="inline-flex space-x-6">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold leading-6 text-primary ring-1 ring-inset ring-primary/20">
                What&apos;s new
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-primary">
                <span>Just shipped v1.0</span>
                <Sparkles className="h-4 w-4" />
              </span>
            </div>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight sm:text-6xl">
          Transform Your Photos with Ease
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Experience the perfect blend of simplicity and power with our photo gallery app. Organize and enhance your photos with professional tools designed for everyone.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Button size="lg" className="gap-2 hover:bg-blue-400">
              <Camera className="h-4 w-4" />
              Start creating
            </Button>
            <Button variant="outline" size="lg" className="gap-2" onClick={photoNavigate}>
              <Image className="h-4 w-4" />
              View gallery
            </Button>
          </div>
        </div>
        <div className="mx-auto flex max-w-2xl mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none xl:ml-32 ">
          {/* <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <img
              src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
              alt="App screenshot"
              className="w-[76rem] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            />
          </div> */}
          <GalleryGrid images={GALLERY_IMAGES} />

        </div>
      </div>
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-blue-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>
    </div>
  );
}