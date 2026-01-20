'use client';

import { useState } from 'react';
import {
  Eye,
  Users,
  Target,
  Code,
  Vote,
  Wallet,
  FileText,
  Lock,
  Handshake,
  Zap,
} from 'lucide-react';

// ============================================
// HERO SECTION - "What is it"
// ============================================
function HeroSection() {
  return (
    <section className="pt-8 pb-12 bg-white dark:bg-island-surface-dark relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="mb-6">
            <span className="text-island-blue dark:text-island-sky-blue text-sm font-bold tracking-widest uppercase">
              — DECENTRALIZED GOVERNANCE —
            </span>
          </div>

          {/* Title */}
          <h1 className="font-brand-heading text-3xl md:text-6xl mb-6 leading-tight uppercase">
            <span className="text-island-blue dark:text-island-text-dark">
              What is IslandDAO Governance?
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-island-tertiary dark:text-island-text-dark/90 max-w-3xl mx-auto font-medium leading-relaxed">
            IslandDAO is governed by its community through on-chain voting powered by Realms. Every
            $ISLAND token holder has a voice in decisions that shape our direction, from treasury
            allocation to event planning and strategic partnerships.
          </p>
        </div>
      </div>
    </section>
  );
}

// ============================================
// MEDIA SECTION - Single Image
// ============================================
function MediaCarousel() {
  return (
    <section className="py-8 bg-white dark:bg-island-surface-dark relative">
      <div className="container mx-auto px-4">
        <div className="relative max-w-5xl mx-auto">
          {/* Main image container */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10">
            <img
              src="/images/realms-v2-islanddao.png"
              alt="IslandDAO Governance on Realms"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          {/* Caption */}
          <p className="text-center text-sm text-island-tertiary dark:text-island-text-dark/60 mt-4">
            IslandDAO governance powered by Realms V2
          </p>
        </div>
      </div>
    </section>
  );
}

// ============================================
// DAO ETHOS SECTION
// ============================================
const daoEthosItems = [
  {
    icon: Eye,
    title: 'Transparency',
    description: 'Treasury and decisions visible to all.',
  },
  {
    icon: Users,
    title: 'Participation',
    description: 'Community members are the DAO.',
  },
  {
    icon: Target,
    title: 'Alignment',
    description: 'The DAO has a mission larger than profit.',
  },
  {
    icon: Code,
    title: 'Execution through trustless systems',
    description: 'Code enforces fairness, community enforces direction.',
  },
];

function DAOEthosSection() {
  return (
    <section className="py-24 bg-white dark:bg-island-surface-dark relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main content card */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-island-blue/15 via-island-secondary/15 to-island-light-blue/15 dark:from-island-sky-blue/10 dark:via-island-blue/10 dark:to-island-light-blue/10 rounded-3xl blur-2xl opacity-60"></div>

            <div className="relative p-8 md:p-12 rounded-2xl bg-island-bg-light dark:bg-island-bg-dark border border-gray-200 dark:border-gray-700">
              {/* Intro text */}
              <div className="max-w-4xl mx-auto text-center mb-12">
                <p className="text-lg md:text-xl text-island-tertiary dark:text-island-text-dark/90 leading-relaxed mb-6">
                  IslandDAO is a community-first DAO built to foster worldwide participation and
                  collaboration through on-chain tools.
                </p>
                <p className="text-island-tertiary dark:text-island-text-dark/80 leading-relaxed mb-6">
                  We are proud to be among the most active DAOs on Solana with countless
                  contributions to Solana&apos;s governance scene. We operate on a hybrid governance
                  structure, using token based governance, Sowellian Governance and Futarchy. All
                  decisions are powered by our native{' '}
                  <span className="text-island-blue dark:text-island-sky-blue font-semibold">
                    $ISLAND
                  </span>{' '}
                  token.
                </p>
              </div>

              {/* Ethos header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-island-blue dark:text-island-sky-blue">
                  Our DAO Ethos
                </h3>
              </div>

              {/* Ethos grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {daoEthosItems.map((item, index) => (
                  <div
                    key={index}
                    className="text-center p-6 rounded-xl bg-white dark:bg-island-surface-dark border border-gray-200 dark:border-gray-700"
                  >
                    <div className="w-12 h-12 rounded-xl bg-island-blue/10 dark:bg-island-sky-blue/20 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-6 h-6 text-island-blue dark:text-island-sky-blue" />
                    </div>
                    <h4 className="text-lg font-bold text-island-blue dark:text-island-sky-blue mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-island-tertiary dark:text-island-text-dark/80">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// WHY PARTICIPATE SECTION
// ============================================
const whyParticipateReasons = [
  {
    icon: Handshake,
    title: 'Become One of Us',
    description:
      'Taking part in governance is the easiest yet best way to become an IslandDAO member.',
  },
  {
    icon: Target,
    title: 'Shape the Future',
    description: 'Your vote directly influences the direction of IslandDAO and its initiatives.',
  },
  {
    icon: Wallet,
    title: 'Earn',
    description:
      "IslandDAO's open-participation model lets holders decide how our treasury is utilized.",
  },
  {
    icon: Zap,
    title: 'Learn',
    description: 'Use cutting edge on-chain tools and be a part of the future today.',
  },
];

function WhyParticipateSection() {
  return (
    <section className="py-24 bg-white dark:bg-island-surface-dark relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="text-island-blue dark:text-island-sky-blue text-sm font-bold tracking-widest uppercase">
              — YOUR VOICE MATTERS —
            </span>
          </div>
          <h2 className="font-brand-heading text-3xl md:text-5xl mb-6 uppercase">
            <span className="text-island-blue dark:text-island-text-dark">Why Participate?</span>
          </h2>
          <p className="text-lg text-island-tertiary dark:text-island-text-dark/90 max-w-2xl mx-auto">
            Become one of us • Shape the Future • Earn • Learn
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {whyParticipateReasons.map((reason, index) => (
            <div key={index} className="group relative">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-island-blue via-island-secondary to-island-light-blue dark:from-island-sky-blue dark:via-island-blue dark:to-island-light-blue rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

              {/* Card */}
              <div className="relative p-6 rounded-2xl bg-island-bg-light dark:bg-island-bg-dark border border-gray-200 dark:border-gray-700 hover:scale-[1.02] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-island-blue/10 dark:bg-island-sky-blue/20 flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-island-blue dark:text-island-sky-blue" />
                </div>
                <h3 className="text-lg font-bold text-island-blue dark:text-island-sky-blue mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-island-tertiary dark:text-island-text-dark/80">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// SUCCESSFUL PROPOSALS SECTION (Hackathon Winners equivalent)
// ============================================
const successfulProposals = [
  {
    title: 'Thailand 2026 Event Funding',
    type: 'Treasury',
    date: 'November 2024',
    votes: '95% Yes',
    description: 'Allocated funds for the upcoming Thailand coworking event.',
  },
  {
    title: 'NFT Holder Rewards Program',
    type: 'Initiative',
    date: 'October 2024',
    votes: '88% Yes',
    description: 'Established rewards for active community members.',
  },
  {
    title: 'Partnership with Solana Foundation',
    type: 'Partnership',
    date: 'September 2024',
    votes: '92% Yes',
    description: 'Approved strategic partnership for ecosystem growth.',
  },
];

function SuccessfulProposalsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % successfulProposals.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + successfulProposals.length) % successfulProposals.length);
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="text-island-blue dark:text-island-sky-blue text-sm font-bold tracking-widest uppercase">
              — COMMUNITY DECISIONS —
            </span>
          </div>
          <h2 className="font-brand-heading text-3xl md:text-5xl mb-6 uppercase">
            <span className="text-island-blue dark:text-island-text-dark">
              Successful Proposals
            </span>
          </h2>
          <p className="text-lg text-island-tertiary dark:text-island-text-dark/90 max-w-2xl mx-auto">
            Recent proposals that passed through community governance
          </p>
        </div>

        {/* Proposals carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative rounded-2xl bg-white/20 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 p-8 shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Proposal icon */}
              <div className="w-full md:w-1/3 aspect-square rounded-xl bg-gradient-to-br from-island-blue/20 to-island-secondary/20 dark:from-island-surface-variant-dark dark:to-island-surface-dark flex items-center justify-center">
                <span className="text-6xl">✅</span>
              </div>

              {/* Proposal details */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-block px-3 py-1 rounded-full bg-island-blue/10 dark:bg-island-sky-blue/20 text-island-blue dark:text-island-sky-blue text-sm font-semibold mb-3">
                  {successfulProposals[activeIndex].type} • {successfulProposals[activeIndex].votes}
                </div>
                <h3 className="text-2xl font-bold text-island-blue dark:text-island-sky-blue mb-2">
                  {successfulProposals[activeIndex].title}
                </h3>
                <p className="text-lg text-island-tertiary dark:text-island-text-dark/80 mb-1">
                  {successfulProposals[activeIndex].description}
                </p>
                <p className="text-sm text-island-tertiary/70 dark:text-island-text-dark/60">
                  Passed: {successfulProposals[activeIndex].date}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-white/20 dark:bg-white/10 hover:bg-white/30 transition-all"
              >
                <svg
                  className="w-5 h-5 text-island-blue dark:text-island-sky-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <div className="flex items-center gap-2">
                {successfulProposals.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === activeIndex
                        ? 'bg-island-blue dark:bg-island-sky-blue'
                        : 'bg-island-tertiary/30 dark:bg-white/20'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-white/20 dark:bg-white/10 hover:bg-white/30 transition-all"
              >
                <svg
                  className="w-5 h-5 text-island-blue dark:text-island-sky-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// HOW TO PARTICIPATE SECTION (Applying section equivalent)
// ============================================
const participationSteps = [
  {
    step: 1,
    title: 'Hold $ISLAND Tokens',
    description: 'Governance voting power is tied to your $ISLAND token holdings.',
  },
  {
    step: 2,
    title: 'Connect to Realms',
    description: 'Visit the Realms governance portal and connect your Solana wallet.',
  },
  {
    step: 3,
    title: 'Review Proposals',
    description: 'Read through active proposals and discussions before voting.',
  },
  {
    step: 4,
    title: "Vote and Shape IslandDAO's Future",
    description:
      'Cast your vote on proposals that matter to you and help guide the direction of the DAO.',
  },
];

function HowToParticipateSection() {
  return (
    <section className="py-24 bg-island-bg-light dark:bg-island-bg-dark relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="text-island-blue dark:text-island-sky-blue text-sm font-bold tracking-widest uppercase">
              — GET INVOLVED —
            </span>
          </div>
          <h2 className="font-brand-heading text-3xl md:text-5xl mb-6 uppercase">
            <span className="text-island-blue dark:text-island-text-dark">How to Participate</span>
          </h2>
          <p className="text-lg text-island-tertiary dark:text-island-text-dark/90 max-w-2xl mx-auto">
            Follow these steps to start participating in IslandDAO governance.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-6 top-[3.5rem] bottom-[5rem] w-0.5 bg-gradient-to-b from-island-blue via-island-secondary to-island-light-blue dark:from-island-sky-blue dark:via-island-blue dark:to-island-light-blue"></div>

            {participationSteps.map((step) => (
              <div key={step.step} className="relative flex items-center gap-6 mb-8">
                {/* Step number */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-island-blue dark:bg-island-sky-blue text-white dark:text-gray-900 flex items-center justify-center font-bold text-lg shadow-lg z-10">
                  {step.step}
                </div>

                {/* Step content */}
                <div className="flex-1 p-6 rounded-2xl bg-white dark:bg-island-surface-dark border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-bold text-island-blue dark:text-island-sky-blue mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-island-tertiary dark:text-island-text-dark/80">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="https://v2.realms.today/dao/F9V4Lwo49aUe8fFujMbU6uhdFyDRqKY54WpzdpncUSk9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-xl bg-island-blue dark:bg-island-sky-blue text-white dark:text-gray-900 font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Visit Governance Portal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// PAST & ACTIVE PROPOSALS SECTION
// ============================================
interface Proposal {
  id: number;
  title: string;
  type: string;
  status: 'active' | 'passed' | 'rejected';
  votes?: { yes: number; no: number };
  endDate?: string;
  description: string;
}

const allProposals: Proposal[] = [
  {
    id: 1,
    title: 'Q1 2025 Marketing Budget',
    type: 'Treasury',
    status: 'active',
    votes: { yes: 72, no: 18 },
    endDate: 'Dec 15, 2024',
    description: 'Allocate marketing budget for Q1 2025 community growth initiatives.',
  },
  {
    id: 2,
    title: 'New Partnership Program',
    type: 'Initiative',
    status: 'active',
    votes: { yes: 85, no: 5 },
    endDate: 'Dec 20, 2024',
    description: 'Establish a formal partnership program with ecosystem projects.',
  },
  {
    id: 3,
    title: 'Thailand 2026 Event Funding',
    type: 'Treasury',
    status: 'passed',
    votes: { yes: 95, no: 5 },
    description: 'Funding approved for the upcoming Thailand coworking event.',
  },
  {
    id: 4,
    title: 'NFT Holder Rewards v2',
    type: 'Initiative',
    status: 'passed',
    votes: { yes: 88, no: 12 },
    description: 'Enhanced rewards program for active community participants.',
  },
  {
    id: 5,
    title: 'Community Grant Program',
    type: 'Treasury',
    status: 'passed',
    votes: { yes: 91, no: 9 },
    description: 'Established grant pool for community-led projects.',
  },
];

function ProposalCard({ proposal }: { proposal: Proposal }) {
  const statusColors = {
    active: 'bg-green-500/90 text-white',
    passed: 'bg-island-blue/90 dark:bg-island-sky-blue/90 text-white dark:text-gray-900',
    rejected: 'bg-red-500/90 text-white',
  };

  const statusLabels = {
    active: 'Active',
    passed: 'Passed',
    rejected: 'Rejected',
  };

  return (
    <div className="group relative cursor-pointer">
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-br from-island-blue via-island-secondary to-island-light-blue dark:from-island-sky-blue dark:via-island-blue dark:to-island-light-blue rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

      {/* Card */}
      <div className="relative overflow-hidden rounded-2xl bg-white/30 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 transition-all duration-300 hover:scale-[1.02] shadow-xl p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <span className="px-3 py-1 rounded-full bg-white/30 dark:bg-white/10 text-island-tertiary dark:text-island-text-dark/80 text-xs font-semibold">
            {proposal.type}
          </span>
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[proposal.status]}`}
          >
            {statusLabels[proposal.status]}
          </span>
        </div>

        {/* Content */}
        <h3 className="text-lg font-bold text-island-blue dark:text-island-sky-blue mb-2 group-hover:translate-x-0.5 transition-transform">
          {proposal.title}
        </h3>
        <p className="text-sm text-island-tertiary dark:text-island-text-dark/80 mb-4">
          {proposal.description}
        </p>

        {/* Votes */}
        {proposal.votes && (
          <div className="mb-4">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-green-600 dark:text-green-400">Yes: {proposal.votes.yes}%</span>
              <span className="text-red-500 dark:text-red-400">No: {proposal.votes.no}%</span>
            </div>
            <div className="h-2 bg-white/30 dark:bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-500 dark:bg-green-400 rounded-full"
                style={{ width: `${proposal.votes.yes}%` }}
              />
            </div>
          </div>
        )}

        {/* End date for active */}
        {proposal.status === 'active' && proposal.endDate && (
          <p className="text-xs text-island-tertiary dark:text-island-text-dark/60">
            Voting ends: {proposal.endDate}
          </p>
        )}

        {/* View details link */}
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-white/10">
          <span className="text-sm font-semibold text-island-blue dark:text-island-sky-blue group-hover:underline flex items-center">
            View Proposal Details
            <svg
              className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

function ProposalsListSection() {
  const activeProposals = allProposals.filter((p) => p.status === 'active');
  const pastProposals = allProposals.filter((p) => p.status !== 'active');

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="text-island-blue dark:text-island-sky-blue text-sm font-bold tracking-widest uppercase">
              — ALL PROPOSALS —
            </span>
          </div>
          <h2 className="font-brand-heading text-3xl md:text-5xl mb-6 uppercase">
            <span className="text-island-blue dark:text-island-text-dark">
              Active & Past Proposals
            </span>
          </h2>
          <p className="text-lg text-island-tertiary dark:text-island-text-dark/90 max-w-2xl mx-auto">
            Click on proposals to view full details, discussion, and vote history.
          </p>
        </div>

        {/* Active Proposals */}
        {activeProposals.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-island-blue dark:text-island-sky-blue mb-8 text-center md:text-left">
              Active Proposals - Vote Now
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeProposals.map((proposal) => (
                <ProposalCard key={proposal.id} proposal={proposal} />
              ))}
            </div>
          </div>
        )}

        {/* Past Proposals */}
        {pastProposals.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-island-blue dark:text-island-sky-blue mb-8 text-center md:text-left">
              Past Proposals
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastProposals.map((proposal) => (
                <ProposalCard key={proposal.id} proposal={proposal} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// ============================================
// MAIN EXPORT
// ============================================
export function GovernancePageContent() {
  return (
    <>
      <HeroSection />
      <MediaCarousel />
      <DAOEthosSection />
      <WhyParticipateSection />
      {/* <SuccessfulProposalsSection /> */}
      <HowToParticipateSection />
      {/* <ProposalsListSection /> */}
    </>
  );
}
