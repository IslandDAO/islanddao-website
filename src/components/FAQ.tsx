'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "What's IslandDAO?",
    answer:
      "IslandDAO is a Network State of Web3 power users where community comes first and decisions are made together. Originally founded as Dean's List in 2022, we evolved from providing feedback services into one of Solana's most active DAOs. Today we focus on four pillars: Events (month-long coworking experiences in paradise locations), Governance (hybrid decision-making), Community (a global network of builders), and Mission (fostering worldwide participation in decentralized organizations).",
  },
  {
    question: "How can I join the community?",
    answer:
      "Start by getting an IslandDAO NFT - it's your gateway to the community and events. You can purchase one on Magic Eden or other Solana NFT marketplaces. Once you have your NFT, join our Discord to connect with fellow citizens, and follow us on Twitter/X to stay updated with the latest news and event announcements.",
  },
  {
    question: "What are the benefits of joining the community?",
    answer:
      "As an IslandDAO citizen, you gain access to exclusive month-long coworking events in stunning locations worldwide. You can participate in governance and help shape the DAO's future. You'll join a global network of Web3 builders and connect with regional communities including IslandDAO NG (Nigeria) and IslandDAO BR (Brazil). Members also enjoy unique perks tied to their NFT animals and opportunities to learn, collaborate, and grow in the Web3 space.",
  },
  {
    question: "How do I participate in governance?",
    answer:
      "IslandDAO uses a hybrid governance structure combining token-based voting and Sowellian Governance. To participate, connect your wallet on our Realms governance portal where you can vote on proposals, create new initiatives, and help shape IslandDAO's future. By participating, you become one of us, earn rewards, and learn about innovative governance models.",
  },
  {
    question: "What is the IslandDAO NFT?",
    answer:
      "Your IslandDAO NFT is your gateway to the community and events. It unlocks access to our exclusive coworking experiences, governance participation, and member-only perks. Each NFT features a unique animal with its own traits and benefits. To attend events, simply hold your NFT and submit an application telling us how you would like to spend your time on the island.",
  },
  {
    question: "When are the upcoming events?",
    answer:
      "We have two events planned for 2026: IslandDAO v4 Thailand in Ko Samui (June 2026) and IslandDAO v5 Brazil in Florianópolis (Oct-Nov 2026). Our past events include IslandDAO v3 Mykonos (September 2025), IslandDAO v2 Ko Samui (October 2024), and IslandDAO v1 Crete (June 2024). Check our Events page for details and follow our socials to be the first to know when applications open.",
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex justify-between items-center text-left group"
      >
        <span className={`text-lg font-semibold pr-8 transition-colors ${
          isOpen
            ? 'text-island-blue dark:text-island-sky-blue'
            : 'text-island-text-light dark:text-island-text-dark group-hover:text-island-blue dark:group-hover:text-island-sky-blue'
        }`}>
          {question}
        </span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
          isOpen
            ? 'bg-island-blue/20 dark:bg-island-sky-blue/20 rotate-180'
            : 'bg-island-blue/10 dark:bg-island-sky-blue/10'
        }`}>
          <svg
            className={`w-4 h-4 text-island-blue dark:text-island-sky-blue`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-island-text-light/80 dark:text-island-text-dark/80 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="pt-8 pb-12 bg-island-bg-light dark:bg-island-bg-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="mb-6">
              <span className="text-island-blue dark:text-island-sky-blue text-sm font-bold tracking-widest uppercase">
                — FAQ —
              </span>
            </div>

            <h2 className="font-brand-heading text-4xl md:text-5xl mb-6 leading-tight text-island-blue dark:text-island-text-dark uppercase">
              Frequently Asked Questions
            </h2>

            <p className="text-lg text-island-text-light/70 dark:text-island-text-dark/70">
              Everything you need to know about IslandDAO
            </p>
          </div>

          {/* FAQ items */}
          <div className="bg-white dark:bg-island-surface-dark rounded-2xl border border-gray-200 dark:border-gray-700 p-6 md:p-8">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-lg text-island-text-light dark:text-island-text-dark mb-6">
              Still have questions?
            </p>
            <a
              href="https://discord.gg/dvHrj9SXQS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-xl bg-island-blue dark:bg-island-sky-blue text-white dark:text-gray-900 font-bold hover:opacity-90 transition-opacity"
            >
              Join Our Discord
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
