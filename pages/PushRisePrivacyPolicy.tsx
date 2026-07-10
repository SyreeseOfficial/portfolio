import React from 'react';

const sections = [
  {
    title: 'Overview',
    body: 'PushRise is designed to work entirely on your device. We do not collect, store, or sell your personal data. No account is required to use the app.',
  },
  {
    title: 'Camera',
    body: 'PushRise uses your camera to count push-ups using on-device pose detection. Camera frames are processed locally in real time and are never stored, transmitted, or shared with anyone.',
  },
  {
    title: 'Data stored on your device',
    body: 'Your alarms, rep count, streaks, rewards, and settings are stored locally on your device using on-device storage. This data never leaves your phone unless you uninstall the app.',
  },
  {
    title: 'Subscriptions and purchases',
    body: (
      <>
        PushRise uses RevenueCat to process subscriptions and in-app purchases. RevenueCat may
        collect anonymous device identifiers and purchase history to manage your subscription.
        RevenueCat&apos;s privacy policy is available at{' '}
        <a
          href="https://www.revenuecat.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-electricBlue hover:underline"
        >
          revenuecat.com/privacy
        </a>
        .
      </>
    ),
  },
  {
    title: 'Notifications',
    body: 'PushRise sends local alarm notifications and optional reminder notifications. These are generated on-device and are not routed through any external server.',
  },
  {
    title: 'Children',
    body: 'PushRise is not directed at children under 13 and does not knowingly collect information from them.',
  },
  {
    title: 'Contact',
    body: (
      <>
        Questions? Email{' '}
        <a href="mailto:syreeseofficial@gmail.com" className="text-electricBlue hover:underline">
          syreeseofficial@gmail.com
        </a>
        .
      </>
    ),
  },
];

const PushRisePrivacyPolicy: React.FC = () => (
  <div className="max-w-2xl mx-auto px-6 md:px-12 py-16 animate-fade-in">
    <p className="font-mono text-xs text-grey uppercase tracking-widest mb-6">PushRise</p>
    <h1 className="font-serif text-5xl md:text-6xl text-white mb-4 leading-tight">
      Privacy Policy
    </h1>
    <p className="font-mono text-xs text-grey mb-16">Last updated: July 10, 2026</p>

    <div className="space-y-12">
      {sections.map(({ title, body }) => (
        <section key={title}>
          <h2 className="font-serif text-2xl text-white mb-3">{title}</h2>
          <p className="font-sans text-grey leading-relaxed">{body}</p>
        </section>
      ))}
    </div>
  </div>
);

export default PushRisePrivacyPolicy;
