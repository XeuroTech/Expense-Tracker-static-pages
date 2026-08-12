const lastUpdated = 'August 12, 2026';

const privacyPolicySections = [
  {
    title: 'Introduction',
    body: [
      'Expense-Tracker ("the App") is developed and operated by XeuroTech ("we", "our", or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains what information we collect, how we use it, and what rights you have in relation to it.',
      'By using the Expense-Tracker application, you agree to the collection and use of information in accordance with this policy.',
    ],
  },
  {
    title: 'Information We Collect',
    intro: 'We may collect the following types of information when you use Expense-Tracker:',
    bullets: true,
    body: [
      'Account information such as your name, email address, password, and optional profile photo.',
      'Financial data you enter, including wallets, income, expenses, budgets, recurring bills, and categories.',
      'Device information such as device type, operating system, and app version.',
      'Usage data such as feature interactions and crash reports, used to improve the app.',
      "If you choose to connect Google Drive Backup (available on the Free plan), your Google account email address, used only to identify the connected account.",
    ],
  },
  {
    title: 'How We Use Information',
    bullets: true,
    body: [
      'To provide, operate, and maintain the core features of the app.',
      'To personalize your experience, such as showing relevant budgets and reports.',
      'To improve app performance, fix bugs, and develop new features.',
      'To send account-related messages, such as email verification codes, optional two-factor authentication codes, and account deletion confirmations.',
      'To communicate with you about updates, security alerts, and support requests.',
    ],
  },
  {
    title: 'Data Security',
    body: [
      'We implement industry-standard technical and organizational safeguards, including encryption in transit and at rest, to protect your personal and financial data from unauthorized access, alteration, disclosure, or destruction.',
      'New accounts are required to verify their email address, and you can optionally enable email one-time-passcode two-factor authentication for an extra layer of login security.',
      'If you use Google Drive Backup, your data is encrypted on your device with AES-256 before it is uploaded, and is stored in a private, app-only area of your Google Drive that is not visible among your regular Drive files.',
      'While we strive to protect your data, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    title: 'Cookies',
    body: [
      'Our website does not currently use advertising or third-party tracking cookies. It may use minimal cookies or local storage required for basic functionality. If we introduce analytics or additional cookies in the future, we will update this policy accordingly.',
    ],
  },
  {
    title: 'Third-Party Services',
    body: [
      'We use Appwrite as our backend and cloud infrastructure provider to securely store and sync your account and financial data.',
      'If you choose to connect Google Drive Backup (Free plan only), Google acts as a third-party storage provider for your encrypted backup file, governed by their own privacy policy.',
      'These providers only receive the information necessary to perform their functions and are contractually obligated to protect your data. We do not sell your personal information to third parties.',
    ],
  },
  {
    title: 'User Rights',
    bullets: true,
    body: [
      'The right to access the personal data we hold about you.',
      'The right to request correction of inaccurate or incomplete data.',
      'The right to permanently delete your account and all associated data at any time, directly from the app’s Profile settings, using a secure email-verified deletion flow.',
      'The right to withdraw consent to data processing at any time.',
    ],
  },
  {
    title: 'Data Retention',
    body: [
      'We retain your personal data only for as long as necessary to provide our services and fulfil the purposes described in this policy, unless a longer retention period is required by law.',
      'When you delete your account through the app, all of your data — including wallets, transactions, budgets, categories, recurring plans, and shared/split expenses — is permanently and irreversibly erased from our systems.',
    ],
  },
  {
    title: "Children's Privacy",
    body: [
      'Expense-Tracker is not directed at children under the age of 13, and we do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us so we can remove it.',
    ],
  },
  {
    title: 'Contact Information',
    body: [
      'If you have any questions or concerns about this Privacy Policy or our data practices, please contact XeuroTech at support@expense-tracker.app.',
    ],
  },
];

export { lastUpdated };
export default privacyPolicySections;
