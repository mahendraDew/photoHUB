"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

// Function to shuffle an array
function shuffleArray(arr: { url: string; name: string }[]): { url: string; name: string }[] {
  const shuffledArr = [...arr];
  for (let i = shuffledArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]]; // Swap elements
  }
  return shuffledArr;
}

export function InfiniteMovingCardsDemo() {
  const [shuffledImgs, setShuffledImgs] = useState<{ url: string; name: string }[]>([]);
  const [shuffledImgs2, setShuffledImgs2] = useState<{ url: string; name: string }[]>([]);
  const [shuffledImgs3, setShuffledImgs3] = useState<{ url: string; name: string }[]>([]);

  useEffect(() => {
    // Shuffle images when component mounts
    setShuffledImgs(shuffleArray(movingImgs));
    setShuffledImgs2(shuffleArray(movingImgs));
    setShuffledImgs3(shuffleArray(movingImgs));
  }, []);

  return (
    <div className="h-[40rem] rounded-md gap-5 flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={shuffledImgs}
        direction="right"
        speed="fast"
      />
      <InfiniteMovingCards
        items={shuffledImgs2}
        direction="left"
        speed="fast"
      />
      <InfiniteMovingCards
        items={shuffledImgs3}
        direction="right"
        speed="fast"
      />
    </div>
  );
}

const movingImgs = [
  {
    url: "https://images.unsplash.com/photo-1732058824460-d89cb7b4a38f",
    name: "img1"
  },
  {
    url: "https://images.unsplash.com/photo-1733176094174-0e06953c7700",
    name: "img2"
  },
  {
    url: "https://images.unsplash.com/photo-1733150728038-57d84c45f396",
    name: "img3"
  },
  {
    url: "https://images.unsplash.com/photo-1733356214560-be25f2df4714",
    name: "img4"
  },
  {
    url: "https://images.unsplash.com/photo-1733234976328-f77f08f4379d",
    name: "img5"
  },
  {
    url: "https://images.unsplash.com/photo-1733077151689-5aa813706c08",
    name: "img6"
  },
  {
    url: "https://images.unsplash.com/photo-1733077151631-93a7e457b97f",
    name: "img7"
  },
  {
    url: "https://images.unsplash.com/photo-1732352744915-03c26b9bf149",
    name: "img9"
  },
  {
    url: "https://images.unsplash.com/photo-1733348924853-e8b956994a10",
    name: "img10"
  },
  {
    url: "https://images.unsplash.com/photo-1733334463453-77ce96cf23a6",
    name: "img11"
  },
  {
    url: "https://images.unsplash.com/photo-1733252284977-0d70fc34c341",
    name: "img12"
  },
  {
    url: "https://images.unsplash.com/photo-1732373558548-ccc9f9e83af0",
    name: "img13"
  },
  {
    url: "https://images.unsplash.com/photo-1732468053948-bade8f3270cc",
    name: "img14"
  },
  {
    url: "https://images.unsplash.com/photo-1732965750714-a97cdbbd7ed1",
    name: "img15"
  },
];
