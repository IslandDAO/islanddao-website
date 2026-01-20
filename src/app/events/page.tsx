import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EventsPageContent } from "@/components/EventsPageContent";

export const metadata: Metadata = {
  title: "Events",
  description: "Join IslandDAO's month-long coworking events in paradise locations around the world. Connect with Web3 builders, participate in workshops, and experience the future of decentralized collaboration.",
  openGraph: {
    title: "Events | IslandDAO",
    description: "Join IslandDAO's month-long coworking events in paradise locations around the world. Connect with Web3 builders, participate in workshops, and experience the future of decentralized collaboration.",
  },
  twitter: {
    title: "Events | IslandDAO",
    description: "Join IslandDAO's month-long coworking events in paradise locations around the world.",
  },
};

export default function EventsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-20">
        <EventsPageContent />
      </main>

      <Footer />
    </div>
  );
}
