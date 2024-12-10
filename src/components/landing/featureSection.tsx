"use client";

import { Camera, Sliders, Share2, Layout } from "lucide-react";

const features = [
  {
    name: "Smart Photo Organization",
    description: "Automatically organize your photos with AI-powered tagging and intelligent albums.",
    icon: Layout,
  },
  {
    name: "Built-in Editor",
    description: "Enhance your photos with professional editing tools, filters, and adjustments.",
    icon: Sliders,
  },
  {
    name: "Easy Sharing",
    description: "Share your galleries with friends and family through secure, customizable links.",
    icon: Share2,
  },
  {
    name: "Pro Camera Features",
    description: "Take advantage of advanced camera controls for the perfect shot every time.",
    icon: Camera,
  },
];

export function FeaturesSection() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Everything you need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Powerful features for your photos
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Transform your photos with our comprehensive suite of tools and features designed for both beginners and professionals.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <feature.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}