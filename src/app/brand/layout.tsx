import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Guidelines",
  description: "IslandDAO brand identity guidelines including logos, colors, typography, and visual assets. Download official brand materials.",
  openGraph: {
    title: "Brand Guidelines | IslandDAO",
    description: "IslandDAO brand identity guidelines including logos, colors, typography, and visual assets.",
  },
  twitter: {
    title: "Brand Guidelines | IslandDAO",
    description: "Official IslandDAO brand guidelines and visual identity system.",
  },
};

export default function BrandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
