import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GovernancePageContent } from "@/components/GovernancePageContent";

export const metadata: Metadata = {
  title: "Governance",
  description: "Participate in IslandDAO's on-chain governance. Vote on proposals, shape community decisions, and help guide the future of our network state through transparent, token-based voting.",
  openGraph: {
    title: "Governance | IslandDAO",
    description: "Participate in IslandDAO's on-chain governance. Vote on proposals, shape community decisions, and help guide the future of our network state.",
  },
  twitter: {
    title: "Governance | IslandDAO",
    description: "Participate in IslandDAO's on-chain governance and help shape the future of our network state.",
  },
};

export default function GovernancePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-20">
        <GovernancePageContent />
      </main>

      <Footer />
    </div>
  );
}
