'use client';

import { PerkCard } from './PerkCard';

const animals = [
  { name: "Dragon", perkTitle: "Eligibility for Merch Bags", perk: "Dragon NFT holders qualify to apply for a limited number of official merch bags. Bags are allocated on a first-come, first-served basis, priced in $USDC with worldwide shipping available.", image: "/assets/perks/perk-dragon.png" },
  { name: "Tiger", perkTitle: "Special Event Shoutouts", perk: "Tiger NFT holders receive special recognition and shoutouts during IslandDAO events.", image: "/assets/perks/perk-tiger.png" },
  { name: "Ox", perkTitle: "DAO Governance Multiplier", perk: "Ox holders gain a 1% multiplier boost to their governance token voting power, with stackable benefits for holding multiple NFTs. This multiplier does not impact the perks leaderboard.", image: "/assets/perks/perk-ox.png" },
  { name: "Rabbit", perkTitle: "Complimentary Coffee & Early dApp Access", perk: "Rabbit NFT holders enjoy complimentary premium coffee at IRL events and exclusive early access to premium features within IslandDAO dApps.", image: "/assets/perks/perk-rabbit.png" },
  { name: "Snake", perkTitle: "IslandDAO Service Discounts", perk: "Snake NFT holders benefit from a 0.2% flat discount on all DAO products and services, with stackable discounts for multiple holdings.", image: "/assets/perks/perk-snake.png" },
  { name: "Horse", perkTitle: "Perks Leaderboard Boost", perk: "Horse NFT holders enjoy a 1% boost to their base Perks Leaderboard score, with stackable percentages for multiple holdings.", image: "/assets/perks/perk-horse.png" },
  { name: "Goat", perkTitle: "Special Bracelet at IslandDAO Events", perk: "Holders receive an exclusive event bracelet featuring their name, a QR code linked to their socials, and additional personalized details.", image: "/assets/perks/perk-goat.png" },
  { name: "Monkey", perkTitle: "Featured Extra in Event Videos", perk: "Monkey holders are prominently featured as extras in video content produced during real-life events sponsored or organized by IslandDAO.", image: "/assets/perks/perk-monkey.png" },
  { name: "Rooster", perkTitle: "Private Q&A with Core Contributors", perk: "Rooster holders gain access to private, recurring Q&A sessions with IslandDAO's core contributors, providing direct engagement opportunities.", image: "/assets/perks/perk-rooster.png" },
  { name: "Inu", perkTitle: "Priority Airdrops & Whitelist Access", perk: "Inu holders receive priority consideration for airdrops and whitelists from IslandDAO partner projects and communities.", image: "/assets/perks/perk-inu.png" },
  { name: "Pig", perkTitle: "Plus One at IslandDAO Events", perk: "Pig NFT holders receive the privilege of bringing a plus one guest to IslandDAO events.", image: "/assets/perks/perk-pig.png" },
  { name: "Mouse", perkTitle: "Cardboard Cutout Eligibility at Events", perk: "Mouse NFT holders can apply for limited spots for life-sized or tabletop cardboard cutouts to be displayed at IslandDAO events. A nominal fee in $USDC is required to cover production costs.", image: "/assets/perks/perk-mouse.png" },
];

export function PerksNFT() {
  return (
    <section id="perks" className="py-32 bg-white dark:bg-island-surface-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="mb-6">
              <span className="text-island-blue dark:text-island-sky-blue text-sm font-bold tracking-widest uppercase">
                — NFT COLLECTION —
              </span>
            </div>
            <h2 className="font-brand-heading text-4xl md:text-5xl mb-6 leading-tight text-island-blue dark:text-island-text-dark uppercase">
              Your Passport to the IslandDAO Experience
            </h2>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed text-island-text-light/70 dark:text-island-text-dark/70">
              Your NFT is your ticket. Each of our 12 animal types comes with its own perk. Hold any one to apply for IslandDAO events and unlock exclusive benefits.
            </p>
          </div>

          {/* NFT Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {animals.map((animal, index) => (
              <PerkCard
                key={index}
                name={animal.name}
                perkTitle={animal.perkTitle}
                perk={animal.perk}
                image={animal.image}
              />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="https://magiceden.io/marketplace/island_dao_perks"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-xl bg-island-blue dark:bg-island-sky-blue text-white dark:text-gray-900 font-bold hover:opacity-90 transition-opacity"
            >
              View Collection on Magic Eden
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
