'use client';

import { PerkCard } from './PerkCard';

const animals = [
  {
    name: 'Dragon',
    perkTitle: 'Upgraded Merch Pack',
    perk: 'Receive upgraded welcome merch, including an NFC bracelet.',
    image: '/assets/perks/perk-dragon.png',
  },
  {
    name: 'Tiger',
    perkTitle: 'Reserved Fitness Slot',
    perk: 'Secure a spot in daily fitness sessions with advance registration.',
    image: '/assets/perks/perk-tiger.png',
  },
  {
    name: 'Ox',
    perkTitle: 'Exclusive Wellness Access',
    perk: 'Get access to special wellness or fitness sessions during the event.',
    image: '/assets/perks/perk-ox.png',
  },
  {
    name: 'Rabbit',
    perkTitle: 'Weekly Reward Token',
    perk: 'Receive a weekly token redeemable for snacks, merch, or other perks.',
    image: '/assets/perks/perk-rabbit.png',
  },
  {
    name: 'Snake',
    perkTitle: 'Reserved Yoga Slot',
    perk: 'Secure a spot in daily yoga sessions with advance registration.',
    image: '/assets/perks/perk-snake.png',
  },
  {
    name: 'Horse',
    perkTitle: 'Token Boost',
    perk: 'Earn a 10% token boost from event app check-ins.',
    image: '/assets/perks/perk-horse.png',
  },
  {
    name: 'Goat',
    perkTitle: 'Video Spotlight',
    perk: 'Get featured in short-form content or a project highlight promoted by IslandDAO.',
    image: '/assets/perks/perk-goat.png',
  },
  {
    name: 'Monkey',
    perkTitle: 'Priority Recap Feature',
    perk: 'Get prominent inclusion in IslandDAO event recap videos.',
    image: '/assets/perks/perk-monkey.png',
  },
  {
    name: 'Rooster',
    perkTitle: 'Reserved Villa Seating',
    perk: 'Claim priority seating for workshops and talks (must check-in 5 min prior).',
    image: '/assets/perks/perk-rooster.png',
  },
  {
    name: 'Inu',
    perkTitle: 'Priority Side Event Access',
    perk: 'Receive priority access to capped side event extras like jetskis or ATVs.',
    image: '/assets/perks/perk-inu.png',
  },
  {
    name: 'Pig',
    perkTitle: 'Bonus PERKS NFT',
    perk: 'Receive an extra PERKS NFT upon event check-in (one per event).',
    image: '/assets/perks/perk-pig.png',
  },
  {
    name: 'Mouse',
    perkTitle: 'Professional Photo Pack',
    perk: 'Receive a personal digital photo shoot at the villa.',
    image: '/assets/perks/perk-mouse.png',
  },
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
              Your NFT is your ticket. Each of our 12 animal types comes with its own perk. Hold any
              one to apply for IslandDAO events and unlock exclusive benefits.
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
