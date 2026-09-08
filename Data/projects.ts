//
// projects.ts
//
// Created by Arshad_iOS_Developer on 08/09/2026.
//

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  accent: string;
  featured?: boolean;
  reverse?: boolean;
  appStoreUrl?: string;
  assets: {
    icon: string;
    screenshots: string[];
  };
};

export const projects: Project[] = [
  {
    slug: "picx",
    title: "PicX",
    category: "AI Photo Tools",
    description:
      "An all-in-one photo utility app focused on AI-powered background removal and practical media editing tools.",
    technologies: ["Swift", "SwiftUI", "AI", "Image Processing"],
    accent: "#6366F1",
    featured: true,
    appStoreUrl:
      "https://apps.apple.com/us/app/bg-remover-media-compressor/id6759575933",
    assets: {
      icon: "/Apps Assets/bg remover/icon.webp",
      screenshots: [
        "/Apps Assets/bg remover/s1.webp",
        "/Apps Assets/bg remover/s2.webp",
        "/Apps Assets/bg remover/s3.webp",
      ],
    },
  },

  {
    slug: "photo-recovery",
    title: "Photo Recovery",
    category: "Photo & Video",
    description:
      "A recovery-focused iOS application designed to help users find and restore recoverable photos and videos.",
    technologies: ["Swift", "SwiftUI", "Core ML", "Photos"],
    accent: "#596ADE",
    featured: true,
    reverse: true,
    assets: {
      icon: "/Apps Assets/PhotoRecovery/icon.webp",
      screenshots: [
        "/Apps Assets/PhotoRecovery/s1.webp",
        "/Apps Assets/PhotoRecovery/s2.webp",
        "/Apps Assets/PhotoRecovery/s3.webp",
      ],
    },
  },

  {
    slug: "swipepix",
    title: "SwipePix",
    category: "Photo Management",
    description:
      "A smart photo organization and cleaning experience built around fast media review and simple swipe-based interactions.",
    technologies: ["Swift", "SwiftUI", "Photos", "AI"],
    accent: "#BFDCB3",
    featured: true,
    appStoreUrl:
      "https://apps.apple.com/us/app/swipepix-ai-organize-clean/id6784569710",
    assets: {
      icon: "/Apps Assets/swipepix/icon.webp",
      screenshots: [
        "/Apps Assets/swipepix/s1.webp",
        "/Apps Assets/swipepix/s2.webp",
        "/Apps Assets/swipepix/s3.webp",
      ],
    },
  },

  {
    slug: "app-blocker",
    title: "App Blocker",
    category: "Productivity",
    description:
      "A focus and productivity application designed to help users manage distracting apps and improve their digital habits.",
    technologies: ["Swift", "SwiftUI", "Screen Time"],
    accent: "#596ADE",
    appStoreUrl:
      "https://apps.apple.com/us/app/app-blocker-focus-lock/id6760183478",
    assets: {
      icon: "/Apps Assets/App Blocker/icon.webp",
      screenshots: [
        "/Apps Assets/App Blocker/s1.webp",
        "/Apps Assets/App Blocker/s2.webp",
        "/Apps Assets/App Blocker/s3.webp",
      ],
    },
  },

  {
    slug: "skincare-ai",
    title: "Skincare AI",
    category: "AI & Wellness",
    description:
      "An AI-powered skincare companion designed to help users manage and follow personalized skincare routines.",
    technologies: ["Swift", "SwiftUI", "AI"],
    accent: "#BFDCB3",
    appStoreUrl:
      "https://apps.apple.com/us/app/skincare-ai-routine-tracker/id6764529712",
    assets: {
      icon: "/Apps Assets/skin care/icon.webp",
      screenshots: [
        "/Apps Assets/skin care/s1.webp",
        "/Apps Assets/skin care/s2.webp",
        "/Apps Assets/skin care/s3.webp",
      ],
    },
  },

  {
    slug: "caller-id-spam-blocker",
    title: "Caller ID & Spam Blocker",
    category: "Communication",
    description:
      "A caller identification and spam protection application focused on helping users identify unwanted calls.",
    technologies: ["Swift", "UIKit", "CallKit"],
    accent: "#6366F1",
    appStoreUrl:
      "https://apps.apple.com/us/app/caller-id-spam-call-blocker/id6502348779",
    assets: {
      icon: "/Apps Assets/caller id/icon.webp",
      screenshots: [
        "/Apps Assets/caller id/s1.webp",
        "/Apps Assets/caller id/s2.webp",
        "/Apps Assets/caller id/s3.webp",
      ],
    },
  },

  {
    slug: "phone-cleaner",
    title: "Phone Cleaner",
    category: "Photo & Storage",
    description:
      "A cleaning utility designed to help users manage unnecessary media and keep their device storage organized.",
    technologies: ["Swift", "SwiftUI", "Photos", "Media Processing"],
    accent: "#596ADE",
    appStoreUrl:
      "https://apps.apple.com/pk/app/phone-cleaner-clean-ai/id6749749353",
    assets: {
      icon: "/Apps Assets/cleaner/icon.webp",
      screenshots: [
        "/Apps Assets/cleaner/s1.webp",
        "/Apps Assets/cleaner/s2.webp",
        "/Apps Assets/cleaner/s3.webp",
      ],
    },
  },

  {
    slug: "route-planner",
    title: "Route Planner",
    category: "Navigation",
    description:
      "A GPS-based route planning application designed to help users plan journeys and navigate between destinations.",
    technologies: ["Swift", "SwiftUI", "MapKit", "Core Location"],
    accent: "#BFDCB3",
    appStoreUrl:
      "https://apps.apple.com/pk/app/route-planner-gps-maps/id6756566984",
    assets: {
      icon: "/Apps Assets/route/icon.webp",
      screenshots: [
        "/Apps Assets/route/s1.webp",
        "/Apps Assets/route/s2.webp",
        "/Apps Assets/route/s3.webp",
      ],
    },
  },

  {
    slug: "app-blocker-pro",
    title: "App Blocker Pro",
    category: "Productivity",
    description:
      "A premium app-blocking experience focused on helping users reduce distractions and maintain better focus.",
    technologies: ["Swift", "SwiftUI", "Screen Time"],
    accent: "#6366F1",
    appStoreUrl:
      "https://apps.apple.com/us/app/app-blocker-focus-lock-pro/id6790365613",
    assets: {
      icon: "/Apps Assets/App Blocker Pro/icon.webp",
      screenshots: [
        "/Apps Assets/App Blocker Pro/s1.webp",
        "/Apps Assets/App Blocker Pro/s2.webp",
        "/Apps Assets/App Blocker Pro/s3.webp",
      ],
    },
  },

  {
    slug: "plantify",
    title: "Plantify",
    category: "AI & Plants",
    description:
      "A plant identification application designed to help users recognize and explore different plants.",
    technologies: ["Swift", "SwiftUI", "AI", "Image Recognition"],
    accent: "#BFDCB3",
    appStoreUrl:
      "https://apps.apple.com/us/app/plantify-plant-identifier/id6753703915",
    assets: {
      icon: "/Apps Assets/plantify/icon.webp",
      screenshots: [
        "/Apps Assets/plantify/s1.webp",
        "/Apps Assets/plantify/s2.webp",
        "/Apps Assets/plantify/s3.webp",
      ],
    },
  },

  {
    slug: "swipe-wipe",
    title: "Swipe Wipe",
    category: "Photo Cleaner",
    description:
      "A swipe-based photo cleaning experience designed to make reviewing and removing unwanted media simple and fast.",
    technologies: ["Swift", "SwiftUI", "Photos", "Gestures"],
    accent: "#596ADE",
    appStoreUrl:
      "https://apps.apple.com/us/app/swipe-wipe-photo-cleaner/id6745936005",
    assets: {
      icon: "/Apps Assets/swipe wipe/icon.webp",
      screenshots: [
        "/Apps Assets/swipe wipe/s1.webp",
        "/Apps Assets/swipe wipe/s2.webp",
        "/Apps Assets/swipe wipe/s3.webp",
      ],
    },
  },

  {
    slug: "story-saver",
    title: "Story Saver",
    category: "Social Media Tools",
    description:
      "A social media utility combining story saving and media editing features in a simple iOS experience.",
    technologies: ["Swift", "SwiftUI", "Media Processing"],
    accent: "#6366F1",
    appStoreUrl:
      "https://apps.apple.com/us/app/story-saver-insta-saver-editor/id6759295159",
    assets: {
      icon: "/Apps Assets/Insta saver/icon.webp",
      screenshots: [
        "/Apps Assets/Insta saver/s1.webp",
        "/Apps Assets/Insta saver/s2.webp",
        "/Apps Assets/Insta saver/s3.webp",
      ],
    },
  },

  {
    slug: "find-my-phone",
    title: "Find My Phone",
    category: "Utilities",
    description:
      "A location-focused utility designed to help users find and keep track of their phone location.",
    technologies: ["Swift", "SwiftUI", "Core Location", "MapKit"],
    accent: "#BFDCB3",
    appStoreUrl:
      "https://apps.apple.com/us/app/find-my-phone-location-finder/id6762567300",
    assets: {
      icon: "/Apps Assets/phone finder/icon.webp",
      screenshots: [
        "/Apps Assets/phone finder/s1.webp",
        "/Apps Assets/phone finder/s2.webp",
        "/Apps Assets/phone finder/s3.webp",
      ],
    },
  },

  {
    slug: "scando",
    title: "Scando",
    category: "Document Tools",
    description:
      "A document scanning application for capturing, processing, and working with documents directly from an iPhone or iPad.",
    technologies: ["Swift", "SwiftUI", "Vision", "PDF"],
    accent: "#596ADE",
    appStoreUrl:
      "https://apps.apple.com/us/app/scando-pdf-document-scanner/id6803100158",
    assets: {
      icon: "/Apps Assets/scando/icon.webp",
      screenshots: [
        "/Apps Assets/scando/s1.webp",
        "/Apps Assets/scando/s2.webp",
        "/Apps Assets/scando/s3.webp",
      ],
    },
  },

  {
    slug: "gps-speedometer",
    title: "GPS Speedometer",
    category: "Navigation & Utilities",
    description:
      "A GPS-based utility combining speed tracking and compass functionality for location-aware use.",
    technologies: ["Swift", "SwiftUI", "Core Location", "MapKit"],
    accent: "#6366F1",
    appStoreUrl:
      "https://apps.apple.com/us/app/gps-speedometer-compass/id6755144230",
    assets: {
      icon: "/Apps Assets/speedo meter/icon.webp",
      screenshots: [
        "/Apps Assets/speedo meter/s1.webp",
        "/Apps Assets/speedo meter/s2.webp",
        "/Apps Assets/speedo meter/s3.webp",
      ],
    },
  },

  {
    slug: "popsticker",
    title: "PopSticker",
    category: "Creative Tools",
    description:
      "A creative sticker-making application for creating and exploring custom stickers from personal media.",
    technologies: ["Swift", "SwiftUI", "Image Processing", "Media"],
    accent: "#BFDCB3",
    appStoreUrl:
      "https://apps.apple.com/us/app/popsticker-create-explore/id6779978353",
    assets: {
      icon: "/Apps Assets/Popsticker/icon.webp",
      screenshots: [
        "/Apps Assets/Popsticker/s1.webp",
        "/Apps Assets/Popsticker/s2.webp",
        "/Apps Assets/Popsticker/s3.webp",
      ],
    },
  },
];
