'use client';

const EFFECTIVE_DATE = 'June 5, 2025';
const ENTITY = 'IslandDAO LLC';
const CONTACT_EMAIL = 'hello@islanddao.org';

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-10">
      <h2 className="font-brand-heading text-xl md:text-2xl uppercase mb-4 text-island-blue dark:text-island-sky-blue">
        {title}
      </h2>
      <div className="space-y-4 text-island-tertiary dark:text-island-text-dark/90 leading-relaxed">
        {children}
      </div>
    </section>
  );
}

export function TermsPageContent() {
  return (
    <div className="pt-8 pb-20">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="mb-12">
          <span className="text-island-blue dark:text-island-sky-blue text-sm font-bold tracking-widest uppercase">
            — LEGAL —
          </span>
          <h1 className="font-brand-heading text-3xl md:text-5xl mt-4 mb-4 uppercase text-island-blue dark:text-island-text-dark">
            Terms of Service
          </h1>
          <p className="text-sm text-island-tertiary dark:text-island-text-dark/70">
            Effective date: {EFFECTIVE_DATE}
          </p>
        </div>

        <p className="mb-10 text-island-tertiary dark:text-island-text-dark/90 leading-relaxed">
          These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the websites,
          mobile applications, and services operated by <strong>{ENTITY}</strong> (&ldquo;IslandDAO&rdquo;,
          &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). By accessing or using any of our
          services you agree to be bound by these Terms. If you do not agree, please do not use our
          services.
        </p>

        <Section id="services" title="1. Our Services">
          <p>
            IslandDAO provides a website (islanddao.org), a mobile application, and related community
            tools (collectively, the &ldquo;Services&rdquo;) that allow members to participate in
            on-chain governance, register for events, and engage with the IslandDAO community.
          </p>
          <p>
            We reserve the right to modify, suspend, or discontinue any part of the Services at any
            time without prior notice.
          </p>
        </Section>

        <Section id="eligibility" title="2. Eligibility">
          <p>
            You must be at least 18 years of age and legally capable of entering into binding
            contracts to use the Services. By using the Services you represent that you meet these
            requirements.
          </p>
        </Section>

        <Section id="accounts" title="3. Accounts & Wallets">
          <p>
            Certain features of the Services require you to connect a compatible blockchain wallet
            (e.g. a Solana wallet). You are solely responsible for maintaining the security of your
            wallet and private keys. IslandDAO will never ask for your seed phrase or private key.
          </p>
          <p>
            If you create an account, you agree to provide accurate information and to keep it
            up to date. You are responsible for all activity that occurs under your account.
          </p>
        </Section>

        <Section id="conduct" title="4. Acceptable Use">
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use the Services for any unlawful purpose or in violation of any applicable laws.</li>
            <li>
              Harass, threaten, or harm other community members or IslandDAO personnel.
            </li>
            <li>
              Attempt to gain unauthorised access to any part of the Services or related systems.
            </li>
            <li>
              Transmit viruses, malware, or any other harmful code.
            </li>
            <li>
              Scrape or harvest data from the Services without our prior written consent.
            </li>
            <li>
              Impersonate IslandDAO, its team, or other community members.
            </li>
          </ul>
        </Section>

        <Section id="nfts" title="5. NFTs & On-Chain Assets">
          <p>
            IslandDAO may offer or reference non-fungible tokens (&ldquo;NFTs&rdquo;) including PERKS
            NFTs that grant access to community benefits. These digital assets exist on the Solana
            blockchain and their transfer, ownership, and value are governed by applicable smart
            contracts and blockchain rules, not solely by these Terms.
          </p>
          <p>
            We make no warranties regarding the future value of any NFT or digital asset. Purchasing
            or holding an NFT does not constitute an investment contract or security.
          </p>
          <p>
            Benefits associated with NFTs may change over time. We will endeavour to communicate
            material changes to holders in advance.
          </p>
        </Section>

        <Section id="events" title="6. Events">
          <p>
            IslandDAO organises in-person and virtual events. Event-specific terms (including
            registration, cancellation, and refund policies) may supplement these Terms and will be
            provided at the time of registration.
          </p>
          <p>
            Attendance at events is subject to a code of conduct. We reserve the right to remove
            any participant who violates our community standards without refund.
          </p>
        </Section>

        <Section id="ip" title="7. Intellectual Property">
          <p>
            All content, logos, branding, and software associated with the Services are owned by
            or licensed to IslandDAO LLC. You may not reproduce, distribute, or create derivative
            works without our prior written permission, except as expressly permitted by our Brand
            Guidelines.
          </p>
          <p>
            By submitting content (e.g. forum posts, proposals, media) to the Services, you grant
            IslandDAO a non-exclusive, royalty-free, worldwide licence to use, display, and
            distribute that content in connection with operating the Services.
          </p>
        </Section>

        <Section id="thirdparty" title="8. Third-Party Services">
          <p>
            The Services may integrate with or link to third-party platforms (e.g. Solana RPC
            providers, wallet adapters, analytics tools). We are not responsible for the content,
            policies, or practices of any third party. Your use of third-party services is at your
            own risk and subject to their own terms.
          </p>
        </Section>

        <Section id="disclaimers" title="9. Disclaimers">
          <p>
            THE SERVICES ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT
            WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
          </p>
          <p>
            We do not warrant that the Services will be uninterrupted, error-free, or free of
            harmful components. Blockchain networks are inherently experimental and we cannot
            guarantee their availability or security.
          </p>
        </Section>

        <Section id="liability" title="10. Limitation of Liability">
          <p>
            TO THE FULLEST EXTENT PERMITTED BY LAW, ISLANDDAO LLC AND ITS OFFICERS, DIRECTORS,
            EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
            CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR GOODWILL,
            ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICES.
          </p>
          <p>
            OUR TOTAL AGGREGATE LIABILITY TO YOU FOR ANY CLAIMS ARISING FROM THESE TERMS OR THE
            SERVICES SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID TO ISLANDDAO IN THE
            TWELVE MONTHS PRECEDING THE CLAIM, OR (B) ONE HUNDRED US DOLLARS (USD $100).
          </p>
        </Section>

        <Section id="indemnification" title="11. Indemnification">
          <p>
            You agree to indemnify and hold harmless IslandDAO LLC and its officers, directors,
            employees, and agents from any claims, damages, losses, and expenses (including
            reasonable legal fees) arising from your use of the Services, your violation of these
            Terms, or your infringement of any third-party rights.
          </p>
        </Section>

        <Section id="changes" title="12. Changes to These Terms">
          <p>
            We may update these Terms from time to time. When we make material changes we will
            update the effective date above and, where practicable, notify you via the Services or
            email. Your continued use of the Services after changes are posted constitutes your
            acceptance of the updated Terms.
          </p>
        </Section>

        <Section id="termination" title="13. Termination">
          <p>
            We may suspend or terminate your access to the Services at any time for any reason,
            including violation of these Terms. Sections relating to intellectual property,
            disclaimers, limitation of liability, and indemnification survive termination.
          </p>
        </Section>

        <Section id="contact" title="14. Contact">
          <p>
            If you have questions about these Terms, please contact us at{' '}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-island-blue dark:text-island-sky-blue underline hover:opacity-80 transition-opacity"
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </Section>
      </div>
    </div>
  );
}
