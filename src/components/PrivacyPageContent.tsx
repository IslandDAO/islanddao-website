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

export function PrivacyPageContent() {
  return (
    <div className="pt-8 pb-20">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="mb-12">
          <span className="text-island-blue dark:text-island-sky-blue text-sm font-bold tracking-widest uppercase">
            — LEGAL —
          </span>
          <h1 className="font-brand-heading text-3xl md:text-5xl mt-4 mb-4 uppercase text-island-blue dark:text-island-text-dark">
            Privacy Policy
          </h1>
          <p className="text-sm text-island-tertiary dark:text-island-text-dark/70">
            Effective date: {EFFECTIVE_DATE}
          </p>
        </div>

        <p className="mb-10 text-island-tertiary dark:text-island-text-dark/90 leading-relaxed">
          <strong>{ENTITY}</strong> (&ldquo;IslandDAO&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;,
          or &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy explains
          how we collect, use, share, and protect information when you use our website
          (islanddao.org), our mobile application, and related services (collectively, the
          &ldquo;Services&rdquo;).
        </p>

        <Section id="information-collected" title="1. Information We Collect">
          <p>
            <strong className="text-island-blue dark:text-island-sky-blue">
              Information you provide directly
            </strong>
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Account & profile data</strong> — name, email address, display name, and any
              other information you choose to provide when creating a profile or registering for an
              event.
            </li>
            <li>
              <strong>Event registration data</strong> — travel information, dietary requirements,
              emergency contacts, and other details submitted during event sign-up.
            </li>
            <li>
              <strong>Communications</strong> — messages, feedback, support requests, or other
              content you send to us.
            </li>
            <li>
              <strong>Newsletter subscriptions</strong> — your email address and subscription
              preferences.
            </li>
          </ul>

          <p className="mt-2">
            <strong className="text-island-blue dark:text-island-sky-blue">
              Information collected automatically
            </strong>
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Wallet addresses</strong> — public blockchain wallet addresses you connect to
              our Services. Wallet addresses and transaction histories are publicly visible on the
              Solana blockchain.
            </li>
            <li>
              <strong>Usage data</strong> — pages visited, features used, time spent, clicks, and
              interactions within the Services.
            </li>
            <li>
              <strong>Device & technical data</strong> — IP address, browser type and version,
              operating system, device identifiers, and crash reports.
            </li>
            <li>
              <strong>Mobile app data</strong> — device model, OS version, push notification tokens
              (if you opt in), and app performance metrics.
            </li>
          </ul>

          <p className="mt-2">
            <strong className="text-island-blue dark:text-island-sky-blue">
              Information from third parties
            </strong>
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Blockchain data</strong> — publicly available on-chain data associated with
              your connected wallet, including NFT ownership and governance participation.
            </li>
            <li>
              <strong>Social / OAuth providers</strong> — if you sign in via a third-party provider,
              we receive basic profile information as permitted by your settings on that platform.
            </li>
          </ul>
        </Section>

        <Section id="how-we-use" title="2. How We Use Your Information">
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide, operate, and improve the Services.</li>
            <li>Process event registrations and manage attendee logistics.</li>
            <li>Enable on-chain governance participation and display governance activity.</li>
            <li>Send transactional communications (e.g. registration confirmations, event updates).</li>
            <li>Send marketing and community newsletters, where you have opted in.</li>
            <li>Respond to your questions and support requests.</li>
            <li>Monitor and analyse usage to improve performance and user experience.</li>
            <li>Detect, investigate, and prevent fraud, abuse, and security incidents.</li>
            <li>Comply with legal obligations.</li>
          </ul>
        </Section>

        <Section id="sharing" title="3. How We Share Your Information">
          <p>We do not sell your personal information. We may share it with:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Service providers</strong> — third-party vendors who help us operate the
              Services (e.g. email delivery, cloud hosting, analytics, payment processors). These
              parties process data only on our behalf and under appropriate data protection
              agreements.
            </li>
            <li>
              <strong>Event co-organisers and venues</strong> — where required to facilitate your
              attendance at an event. We will inform you of relevant sharing at registration.
            </li>
            <li>
              <strong>Blockchain networks</strong> — governance votes, NFT interactions, and wallet
              activity are recorded publicly on the Solana blockchain and visible to anyone.
            </li>
            <li>
              <strong>Legal requirements</strong> — if we are required to disclose information by
              law, court order, or governmental authority.
            </li>
            <li>
              <strong>Business transfers</strong> — in the event of a merger, acquisition, or sale
              of assets, your information may transfer to the successor entity.
            </li>
          </ul>
        </Section>

        <Section id="mobile-app" title="4. Mobile Application">
          <p>
            In addition to the information collected generally, our mobile application may:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Request permission to send <strong>push notifications</strong> for governance
              proposals, event announcements, and community updates. You can opt out at any time
              in your device settings.
            </li>
            <li>
              Access your device&apos;s <strong>camera or photo library</strong> if you choose to
              upload a profile photo (permission is requested before use).
            </li>
            <li>
              Collect <strong>crash and performance data</strong> to help us diagnose and fix issues.
            </li>
          </ul>
          <p>
            We do not collect your precise location without your explicit permission. Any
            location-based features (e.g. event check-in) will request permission separately and
            only at the point of use.
          </p>
        </Section>

        <Section id="cookies" title="5. Cookies & Tracking Technologies">
          <p>
            We use cookies and similar technologies to remember your preferences, keep you signed
            in, and analyse how the Services are used. You can control cookies through your browser
            settings; however, disabling certain cookies may affect functionality.
          </p>
          <p>We may use third-party analytics services (such as privacy-respecting analytics tools)
            that collect usage data in aggregated or pseudonymised form.</p>
        </Section>

        <Section id="retention" title="6. Data Retention">
          <p>
            We retain personal information for as long as necessary to provide the Services and
            comply with our legal obligations. When information is no longer needed, we delete or
            anonymise it. Wallet addresses and on-chain activity are retained indefinitely on the
            blockchain and are outside our control to delete.
          </p>
        </Section>

        <Section id="rights" title="7. Your Rights & Choices">
          <p>Depending on where you are located, you may have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access the personal information we hold about you.</li>
            <li>Request correction of inaccurate data.</li>
            <li>Request deletion of your personal information (subject to legal obligations).</li>
            <li>Opt out of marketing emails at any time via the unsubscribe link in our emails.</li>
            <li>Object to or restrict certain processing of your data.</li>
            <li>Withdraw consent where processing is based on consent.</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at{' '}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-island-blue dark:text-island-sky-blue underline hover:opacity-80 transition-opacity"
            >
              {CONTACT_EMAIL}
            </a>
            . We will respond within a reasonable timeframe.
          </p>
        </Section>

        <Section id="security" title="8. Security">
          <p>
            We implement reasonable technical and organisational measures to protect your
            information against unauthorised access, loss, or misuse. However, no method of
            transmission over the internet or electronic storage is completely secure, and we
            cannot guarantee absolute security.
          </p>
          <p>
            You are responsible for keeping your wallet credentials and any account passwords
            secure. Please notify us immediately if you suspect unauthorised access to your account.
          </p>
        </Section>

        <Section id="children" title="9. Children's Privacy">
          <p>
            The Services are not directed at children under 18 years of age. We do not knowingly
            collect personal information from children. If you believe a child has provided us
            with personal information, please contact us and we will delete it promptly.
          </p>
        </Section>

        <Section id="international" title="10. International Data Transfers">
          <p>
            IslandDAO operates globally and your information may be processed in countries other
            than the one in which you reside. We take appropriate steps to ensure that transfers
            of personal data are protected in accordance with applicable law.
          </p>
        </Section>

        <Section id="updates" title="11. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. We will notify you of material
            changes by updating the effective date above and, where appropriate, by sending a
            notification via the Services or email. We encourage you to review this policy
            periodically.
          </p>
        </Section>

        <Section id="contact" title="12. Contact Us">
          <p>
            If you have questions, concerns, or requests regarding this Privacy Policy or our data
            practices, please contact us at{' '}
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
