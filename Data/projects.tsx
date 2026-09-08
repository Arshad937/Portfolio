//
//  projects.ts
//  
//
//  Created by Arshad_iOS_Developer  on 08/09/2026.
//

export type Project = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  accent: string;
  featured?: boolean;
  reverse?: boolean;
  appStoreUrl?: string;
};

export const projects: Project[] = [
  {
    title: "PicX",
    category: "AI Photo Tools",
    description:
      "An all-in-one photo utility app featuring AI background removal, image conversion, compression, watermarking, and media tools.",
    technologies: ["Swift", "SwiftUI", "AI", "Image Processing"],
    accent: "#6366F1",
    featured: true,
    appStoreUrl:
      "https://apps.apple.com/us/app/picx-ai-bg-remover-tools/id6759575933",
  },

  {
    title: "Photo Recovery",
    category: "Photo & Video",
    description:
      "A recovery-focused iOS application designed to help users find and restore recoverable photos and videos.",
    technologies: ["Swift", "SwiftUI", "Core ML", "Photos"],
    accent: "#596ADE",
    featured: true,
    reverse: true,
  },

  {
    title: "SwipePix",
    category: "Photo Management",
    description:
      "A smart photo organization and cleaning experience built around fast media review, useful detection tools, and simple gestures.",
    technologies: ["Swift", "SwiftUI", "Vision", "Photos"],
    accent: "#BFDCB3",
    featured: true,
  },

  {
    title: "App Blocker",
    category: "Productivity",
    description:
      "A focus and productivity application designed to help users manage distracting apps and build healthier screen-time habits.",
    technologies: ["Swift", "SwiftUI", "Screen Time"],
    accent: "#596ADE",
    appStoreUrl:
      "https://apps.apple.com/us/app/app-blocker-focus-lock/id6760183478",
  },

  {
    title: "Skincare AI",
    category: "AI & Wellness",
    description:
      "An AI-powered skincare companion that helps users build and manage personalized skincare routines.",
    technologies: ["Swift", "SwiftUI", "AI"],
    accent: "#BFDCB3",
    appStoreUrl:
      "https://apps.apple.com/us/app/skincare-ai-routine-tracker/id6764529712",
  },

  {
    title: "Caller ID & Spam Call Blocker",
    category: "Communication",
    description:
      "A caller identification and spam protection application focused on helping users identify unwanted calls.",
    technologies: ["Swift", "UIKit", "CallKit"],
    accent: "#6366F1",
    appStoreUrl:
      "https://apps.apple.com/us/app/caller-id-spam-call-blocker/id6502348779",
  },

  {
    title: "PhotoVault",
    category: "Privacy & Media",
    description:
      "A privacy-focused media utility designed around managing, cleaning, and recovering personal photos.",
    technologies: ["Swift", "SwiftUI", "Photos", "Privacy"],
    accent: "#596ADE",
    appStoreUrl:
      "https://apps.apple.com/pk/app/photovault-cleaner-recover/id6789089365",
  },

  {
    title: "Scando",
    category: "Document Tools",
    description:
      "A document scanning application for capturing and working with documents directly from an iPhone or iPad.",
    technologies: ["Swift", "SwiftUI", "Vision", "PDF"],
    accent: "#BFDCB3",
    appStoreUrl:
      "https://apps.apple.com/us/app/scando-pdf-document-scanner/id6803100158",
  },
];
