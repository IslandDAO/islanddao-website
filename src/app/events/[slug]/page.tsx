import type { Metadata } from "next";
import { notFound } from 'next/navigation';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PastEventPageContent } from "@/components/PastEventPageContent";

// Event data for past events
const pastEvents: Record<string, {
  title: string;
  subtitle: string;
  date: string;
  location: string;
  country: string;
  heroImage: string;
  description: string;
  highlights: string[];
  stats: { label: string; value: string }[];
  galleryImages: string[];
}> = {
  '2024-crete': {
    title: 'IslandDAO Crete',
    subtitle: 'IslandDAO v1',
    date: 'May-June 2024',
    location: 'Crete',
    country: 'Greece',
    heroImage: '/images/hero-images/v1-001.jpg',
    description: 'IslandDAO v1 was the first official gathering, bringing builders, founders, and creators from around the world to Crete for a month of co-working and community. Weekly schedules mixed citizen-led workshops with group adventures like jet skiing and beach days, building connections on-chain and IRL.',
    highlights: [
      'First-ever month-long IslandDAO event',
      'Global group of builders and ecosystem contributors',
      'Full days of citizen-led workshops and programming',
      'Supported by the Solana Foundation and Solana ecosystem sponsors',
      'Described as "life-changing" by multiple attendees',
    ],
    stats: [
      { label: 'Duration', value: '1 Month' },
      { label: 'Workshops', value: '20+' },
      { label: 'Citizens', value: '50+' },
    ],
    galleryImages: [
      'https://gateway.irys.xyz/2K8YqNEfXJkaDDN9tgV4qJkYSZHwYhJwyZSNRyzSPBfp',
      'https://gateway.irys.xyz/FZBPU1M5P6YBn32shHD5tZPvwPxWX9taUoPGZGR1rC3f',
      'https://gateway.irys.xyz/HAFKUFP4gzPZwkVhF64H91p8ZsGAnYvabor6cm5Qr4ps',
      'https://gateway.irys.xyz/3mwKXfVw13uQc7bSYmjwe2h8jrDJ2iNeMUVeBretLVGf',
      'https://gateway.irys.xyz/J3ZsC71aMUXxcVaZLj8rFhPfkJ2UgaADKig77iJhXfCs',
      'https://gateway.irys.xyz/Ch17sPiThbseuz4Hd1Ri4AupEH3tbKu91WCzHG4o3PF7',
      'https://gateway.irys.xyz/973tKL46BB6eqSNqQszBPxthtC8Rwsdt91mUaoXcqti2',
      'https://gateway.irys.xyz/322TT4Z6FjUEYQ6KAqZaZnsqrXmkbsk5wSSiXqt54MQQ',
      'https://gateway.irys.xyz/5ivL6LLjgrTJEAB7UhFyrktK3xUoPiD5TBhyiG5frqM4',
      'https://gateway.irys.xyz/CoB2N1ymZZ93rJqZZxkxNLUF45t1iXDq1ayUSf2UYFcn',
      'https://gateway.irys.xyz/q6mZDNNR2Wq2nBKp8WAyGrxirxfCZHVzqdv3REhn8Bb',
      'https://gateway.irys.xyz/DM2WtwCXW7VJDPnE8tdkG4rmvPNA3Bi8bviyiqupQAjF',
      'https://gateway.irys.xyz/CUhRsg7LsohR95S57JdyHd9QFq2idPoE5JHMCVfSypLR',
      'https://gateway.irys.xyz/2DwFKwBsffAScNzyZc76pWYjbVj59MyEX5PBEgWBw68Y',
      'https://gateway.irys.xyz/BgMcw84cNiRisfNuRPqUfG9eUAWP6jazXf5wypyesP3i',
      'https://gateway.irys.xyz/8trfE5DEYLMBn46fF45S7DHZJE6b3fCjWzAShySUrNNS',
      'https://gateway.irys.xyz/Fw83e5igivfpbVEahJhXzuH6VntbCHev6AuYrhnz7kVf',
      'https://gateway.irys.xyz/5Xfc7T19zakYF8TkryZ9vRTHPZevH3upvgM5pSsV4hrM',
      'https://gateway.irys.xyz/CqHKtUKsN9SjStWPUA3gukGbnzcxVWuwszU1xuHDbZ6x',
      'https://gateway.irys.xyz/9TFbWgnDmh7zH6zG3KP9t5vnpCBGTeYynWECkxMSxHdq',
      'https://gateway.irys.xyz/HSbX9a1ucxSmk4i68zHbnVK858kNWkZ2eFDnRWZ1B3bd',
      'https://gateway.irys.xyz/92GEtZi7C3MtX8cUcos5RJBbr9bbRKvqNQkniEXkv4yc',
      'https://gateway.irys.xyz/7pu3K9iDmTpn6Q8LZTCbqrZ8n9Q2igmYJLDuL4mG6EjT',
      'https://gateway.irys.xyz/6Wt3E4RPbaaLtT2ygGh7UHXHYDrD9qGntHFsX6F9Dq1x',
      'https://gateway.irys.xyz/DvvVf4S4GUQtC19oheqZMp19XqVweZLECjetwY2ZGGvv',
      'https://gateway.irys.xyz/6wLY1pkqsPZSK2oR3Hz9fQcYSNjxAFZU7Uovz6BkovzH',
      'https://gateway.irys.xyz/8G73SXkioMAs6oYuCDce8kshGL7VW1K2HPDiidMg4PKZ',
      'https://gateway.irys.xyz/Eg6HJAYkoFZ1N3xsdBXBshp35rCJsPuLAxsaeqfWHTFy',
      'https://gateway.irys.xyz/A84y15WZGMny6NYuXZo7Z1zoNhyzcFuF34qBwZH8rcjR',
      'https://gateway.irys.xyz/FzrRacLdWMV5SGPxTXPEAGBpXWhTLwggNcxzGW9Pyqub',
      'https://gateway.irys.xyz/2AgCHsAayqAZSuzm5BBuzKnK7SSnrSa4NvA2ErpV38d1',
    ],
  },
  '2024-thailand': {
    title: 'IslandDAO Koh Samui',
    subtitle: 'IslandDAO v2',
    date: 'September-October 2024',
    location: 'Koh Samui',
    country: 'Thailand',
    heroImage: '/images/hero-images/v2-group.jpg',
    description: 'Hosted right after Breakpoint 2024, IslandDAO v2 brought Solana contributors to a branded villa overlooking the ocean for a month of hardcore building. Structured feedback sessions and office hours kept projects moving, while happy hours, boat trips, and ATV rides kept the vibes right.',
    highlights: [
      'Largest IslandDAO gathering to date, with a broad cross-section of Solana ecosystem contributors',
      'Produced multiple hackathon-winning projects',
      'Live-streamed, citizen-led Feedback Sessions for active projects',
      'Expert-led Office Hours supporting individual contributors and teams',
      'Introduced distinct workspaces for builders, shippers, and explorers',
    ],
    stats: [
      { label: 'Duration', value: '1 Month' },
      { label: 'Workshops', value: '25+' },
      { label: 'Citizens', value: '100+' },
    ],
    galleryImages: [
      'https://gateway.irys.xyz/DZGUd6GsKCPVqaqF3b8NGmo8Hw1WoYy3j1qcfsRe1dPg',
      'https://gateway.irys.xyz/BfX6dAft1ZEjaiDmWoUKwzbaQXMKFS4dJSmbqn9MBSNZ',
      'https://gateway.irys.xyz/DuBGcm2RJNDUZFvPTRfz2cjFUHv5AkPjF9d7hUG7T9fn',
      'https://gateway.irys.xyz/7Zwe1wP3EZ1zjDiyzcJtd8qGiuUcgCCuaMmYxGNqwCQh',
      'https://gateway.irys.xyz/F1HdKigk83NRuqeX77zmSouMC58cMHrvJLe2ZFMivYWL',
      'https://gateway.irys.xyz/HDjNLHJsjM2GAqS2w1HPg4PGhLJieQRbDu2PQoJZwvZB',
      'https://gateway.irys.xyz/2PxchRg2bt73PCB4UpGdcuo9xRnPSVq6j4KWMNiyZ698',
      'https://gateway.irys.xyz/9DvPiAftqGREPnxqLQzbLVEZEhJ7fdgBr7tJwXFke1Uq',
      'https://gateway.irys.xyz/H6Bz1qNiEFEuvHR3ECUEHUgxsfxZ4pdYBc2pWyDwNKuk',
      'https://gateway.irys.xyz/DBzkBprJenQ7VCYpc9BQUujWxp9nsPS2tHjFQqWq4B4u',
      'https://gateway.irys.xyz/BmKi9J3S7rcQuKouGFJRfu78uBvntL5hC7LLsQHh53CB',
      'https://gateway.irys.xyz/6u514J5kubc8q3shCUzF1RDspfgF6fxs2396J45EPiEp',
      'https://gateway.irys.xyz/Fn7zNknYhiGraQu75ykCbrusMx7TwXoRSm6AFPSyKzK9',
      'https://gateway.irys.xyz/5wZqqb6jfoJVT33GRe2DFmu6G8uP3wfMKi2XjTMVfAD8',
      'https://gateway.irys.xyz/7B8fLWFh873NWyQcfhRubQyRRqvR8ggFyaos5LA3gnpM',
      'https://gateway.irys.xyz/4vqDD4hx2fwoj5qD2DdTFsyEVDi5a8RLVjvkN96wSfTT',
      'https://gateway.irys.xyz/G719HszwN6AGC1SzKNm7yL7p87h7JjKuW7PNJ3mpuiw8',
      'https://gateway.irys.xyz/7yHogeuLN47jUfyPEDJ3evJ8erp5SkVrfQxcLJmk4boF',
      'https://gateway.irys.xyz/9CeQoLLipFvMy9sTKb761BiUmjDsgiWjJFeztrK8W8Wi',
      'https://gateway.irys.xyz/4iqZF4xQ9MQESNtXbNa7Y6RSmoN1kYomWJoJHEV91HEN',
      'https://gateway.irys.xyz/3JSR9yAEi2bQPMvWg9qMcrT31D5gHzVEoM8PtpfLZPiF',
      'https://gateway.irys.xyz/CJ5FdjGKwu4PwqT1W5s8WpFXjViaG1Kihbn8Qkywh85H',
      'https://gateway.irys.xyz/47uXTtHyqAvZwhXbem4wgSCBzi48XFd88dzvERDcEhHx',
      'https://gateway.irys.xyz/EQx98kEZdzWxfDrTNRQjK6K1ieVdaEvWnNbYJff6f3Ru',
      'https://gateway.irys.xyz/51TKsQgjxAcAtaPZ9xPPYtgdQLvCbrCeLMWLFDZUqo6N',
      'https://gateway.irys.xyz/G8ABf8VZquE2adF3piHwL8kuQyLaa6oJCNqzJUz6ciWW',
      'https://gateway.irys.xyz/7wjV7NNDUoRgYMwmGcWox1u9QJ9dAd6Ynja2xGLC3UYN',
      'https://gateway.irys.xyz/642VZuALvt5F5fZbDz1EggCe7SGregs1WqRnKDCcsd6q',
      'https://gateway.irys.xyz/BrER3R7xMhT7bxpotoYrDH5UznS7C72nE9Kdu2D2JtJW',
      'https://gateway.irys.xyz/5CN7VzajMe8ggrKc9PrEri2Tog5DJ9wbV5kyVdetPjGj',
      'https://gateway.irys.xyz/HKbMVZesVBdPmzehMW2bvgQG5L1oRx9NgB2zDBqpY85U',
      'https://gateway.irys.xyz/HgZnHp4LgLa1ov3XRaRuoSiR5xjxcTwAWcTTqdJiJAvs',
      'https://gateway.irys.xyz/9KiF3ab1h4xbsjebqYCuq6xbaCiuop45tNFviFHgWrTm',
    ],
  },
  '2025-mykonos': {
    title: 'IslandDAO Mykonos',
    subtitle: 'IslandDAO v3',
    date: 'September-October 2025',
    location: 'Mykonos',
    country: 'Greece',
    heroImage: '/images/hero-images/v3-003.jpg',
    description: 'IslandDAO v3 brought the event on-chain. Citizens used the IslandDAO app and PERKS NFT to check into workshops, earn rewards, and vote on decisions throughout the month. Programming included a hackathon with Metaplex, a weekly Launchathon that produced 4 token launches, and daily wellness sessions, plus barbecues and beach days.',
    highlights: [
      'Hosted a hackathon with prizes in partnership with Metaplex',
      'Utilized the IslandDAO app for on-chain voting, activity check-ins, and rewards',
      'Introduced the Launchathon, resulting in 4 token launches',
      'Daily hour-long wellness sessions led by an onsite personal trainer',
      'Continued citizen-led workshops alongside social and "touch sand" side events',
    ],
    stats: [
      { label: 'Duration', value: '1 Month' },
      { label: 'Workshops', value: '30+' },
      { label: 'Citizens', value: '75+' },
    ],
    galleryImages: [
      // Sorted by image number (5, 18, 22, 39, 53, 56, 60, 81, 96, 101, ...)
      'https://gateway.irys.xyz/84HeuZhre1ncpdGDwvncMdknBiCa4WCPQt5i3qDXj4yy', // 5
      'https://gateway.irys.xyz/BUCmPg4Km9SgQhR1VYobMCkNzjzviPkChkPvSALeBL97', // 18
      'https://gateway.irys.xyz/4yNMJBdtQpC6MfmfXAubompdL8NiZAzMfrAtr19CmjmX', // 22
      'https://gateway.irys.xyz/CvjNyPCCXm3BWtdpCdfK7zDGh5wgh8LqGxDWGJmt8dKY', // 39
      'https://gateway.irys.xyz/5vtadQMfuGsZcekwWwziLHcyBAGEpwKUapxysdQ7dnGc', // 53
      'https://gateway.irys.xyz/3wdSWcF5Q3giWM7M9A6GaBb7gSFtKSxv2T1aK27Vgmfr', // 56
      'https://gateway.irys.xyz/8cD4QTHJ3yJjjfDe5fXif2vaKydgcfPPudEUPF93W3mZ', // 60
      'https://gateway.irys.xyz/673bkxJLnfck4ochdnJTdJAAgtx6LraejvSVXy3m8Zgc', // 81
      'https://gateway.irys.xyz/3GDN4HYBdPouhEoVuvg5yzMgbEvBV9yTeekCtAUcjWCq', // 96
      'https://gateway.irys.xyz/DKK9raUj4wnGjQ5gkC3NpxKEWnxV8asWAgASenf5qHdp', // 101
      'https://gateway.irys.xyz/CFouUZwZVJ4ZS6FzuyeYwwiavXXxTwBkjNLsuyJD2Wyh', // 106
      'https://gateway.irys.xyz/8D5QB3ACyEyDR5C5fN3VjXRBpRgAZeor87CqZ7dQqmwy', // 108
      'https://gateway.irys.xyz/HMHRt7ndoUr5xoUkjnXxCZCtmvcN8qvJWWrk1MCTW3fK', // 117
      'https://gateway.irys.xyz/ATFxr31Mr5TcXHeNxhYG7NDhhrE9XzSWag8pkjnZxwou', // 118
      'https://gateway.irys.xyz/Dxw481LLD2EjvNHS9eqnEQof3XAqh9J63HwtU61ce9id', // 123
      'https://gateway.irys.xyz/23T7DowDb2Wb4smiZ6ziqngYnew1qX1dWccmp28fatBb', // 127
      'https://gateway.irys.xyz/A8yoGVJq7WpG4SF9Qhhxa4LuK4hMNcZTrsiBbuVyugRW', // 134
      'https://gateway.irys.xyz/GoEf84dHv7DD2sRgjwcUSYTbi3vD27yD2K26JGg1ismZ', // 137
      'https://gateway.irys.xyz/D4fvv3pwg5ypH9MKVs9jWwCznmUnfaDt3Pb7tH1Sygdr', // 140
      'https://gateway.irys.xyz/9agpYnwV3prCQknf2DHmAqtSnQ5ET1fDhMZezjo4iKRg', // 142
      'https://gateway.irys.xyz/74MHabX9iee3pxa8EiYY2EXAaLAcjbBEudkCoRakd3XT', // 148
      'https://gateway.irys.xyz/J1jMqGH3WvThkM7vZNrcpFCPivSVW3xmE32yJGX82rJM', // 151
      'https://gateway.irys.xyz/6XMd6wJKgbwfp3c1jvKNLR62ET5LpdUpoNHrCTCTr96r', // 152
      'https://gateway.irys.xyz/EtFbVNQRCJLoqthBE988RmJsrDiWAJh3eVQa6Cyperdp', // 158
      'https://gateway.irys.xyz/4vKFw1qJjmPT6FDXVJ8XfzuL53MnkJ6gQSziijYUU8sd', // 165
      'https://gateway.irys.xyz/CFXZSDG2DqKWT6PLhPjju9Ez37bm6Byad5MCJTKNZ1Ma', // 171
      'https://gateway.irys.xyz/ATUdQfRqwVFjy8JPCLd1KUSKCwUzhppDR2QfpTpJHTBE', // 178
      'https://gateway.irys.xyz/7zcZYg8Z2hYzT339HHF8SexPvF7ovNfnGivz8WFenFhi', // 182
      'https://gateway.irys.xyz/An6TiWFLJCHD1SB8uEb9xwejeGLgPdiQXBNeKxLZaBSh', // 184
      'https://gateway.irys.xyz/AcjwhAJNttWfJs8SFt6d4tDRnCqofTmUVs9DB58zqpnr', // 235
      'https://gateway.irys.xyz/CNC3hh3ATe4enuGBEedhwBNvL2sn8i8az3HuS8XXzXZo', // 236
      'https://gateway.irys.xyz/6b3xsei8g3uF4uTdfdFchUed373FczhHVLjJfhC6Bpow', // 240
      'https://gateway.irys.xyz/CrLm7t3mn3ibxEhMY2ZqsLSpDjfG4gATg82mcQmCkVhV', // 243
      'https://gateway.irys.xyz/4AoLMgvxqRxvgQJ2sXk4bA8pRN2K5Q7YudNxyVvN5gAh', // 252
      'https://gateway.irys.xyz/8cqWHppMEGSULuCosnzmyT44avXy12CjhjHq2KZDNS5V', // 257
      'https://gateway.irys.xyz/3DBj5s9G4LTyiw3r1fEEzZjwrFipwUfGrfC5JQt9qHuY', // 279
      'https://gateway.irys.xyz/GGgb8iHtKXRF5hAgWbz7aQCov2ii6FhUrHheta1NoM5k', // 281
      'https://gateway.irys.xyz/87wevnVcNysqgLLr8E2gHawJqRAU6nQqMjmu6QH7nX1q', // 284
      'https://gateway.irys.xyz/EHuUFvYk4GAB8asPyRUjU62PTzhboqnaBRpmuge3jmAf', // 285
      'https://gateway.irys.xyz/6eYfCQcdmQCQPG2EfJTv5SiXwe2HNNZTJGCbPgA8YYDE', // 294
      'https://gateway.irys.xyz/Efs8Pytk2cVw4xiUe9haekjdJeRsxib1HbWBTJJ17Tgm', // 296
      'https://gateway.irys.xyz/2X7nGyTJxSFGH5cXTVXMZBwSoTwpAbmTr3a9SfGjxijr', // 314
      'https://gateway.irys.xyz/G59Vnj9NFefWJXZNMuPP4Lha9BnqjfgQ7i1NtF25emPd', // 323
      'https://gateway.irys.xyz/3eywuSdkDKV23FAg2uXNVgBW7YY48auRNTf5byzuL62A', // 330
    ],
  },
};

// Generate static params for all known events
export function generateStaticParams() {
  return Object.keys(pastEvents).map((slug) => ({
    slug,
  }));
}

// Generate dynamic metadata based on the event
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const event = pastEvents[slug];

  if (!event) {
    return {
      title: 'Event Not Found',
    };
  }

  return {
    title: event.title,
    description: event.description,
    openGraph: {
      title: `${event.title} | IslandDAO`,
      description: event.description,
      type: 'article',
    },
    twitter: {
      title: `${event.title} | IslandDAO`,
      description: `${event.subtitle} - ${event.date} in ${event.location}, ${event.country}`,
    },
  };
}

export default async function PastEventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = pastEvents[slug];

  if (!event) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-20">
        <PastEventPageContent event={event} />
      </main>

      <Footer />
    </div>
  );
}
