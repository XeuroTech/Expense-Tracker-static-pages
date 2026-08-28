const lastUpdated = "August 28, 2026";

const privacyPolicySections = [
  {
    title: "Who this covers",
    body: [
      "This policy applies to the AI Expense Tracker mobile apps (iOS and Android), the related account pages (for example email verification and password reset), and our website where this policy is posted.",
    ],
  },
  {
    title: "Information we collect",
    bullets: true,
    body: [
      "Account. Name, email address, and sign-in data. Passwords are handled by Google Firebase Authentication; we do not store them in readable form. If you use Google Sign-In, Google shares your name, email, and a sign-in token with us. Optional profile photo.",
      "Finance data you enter. Wallets, balances, transactions, categories, budgets, recurring plans, payees, loans, investments, automations, and notes.",
      "Friends and splits (optional). If you search for users, send friend requests, or split expenses, we process names, emails, avatars, and the shared expense details. Other participants in a split can see those shared details. We do not read your phone’s address book.",
      "AI Smart Add (optional, Pro). If you use AI Smart Add, we send the text you type plus relevant finance context (wallet names/types, category names, payee names and related balances, budgets, recurring plans, timezone) to Groq so the App can suggest a record for you to review. This is not a general chatbot. Groq processes that data under Groq’s privacy policy. We do not operate our own AI training pipeline on this content.",
      "Device and notifications. Device type, operating system, app version. If you allow notifications, a push token so we can send friend, split, and account alerts.",
      "Photos. If you allow it, images from camera or photo library for profile or payee logos. Image links may be loadable by anyone who has the exact URL.",
      "Usage and crashes. Screen views, basic feature use, session events, crash logs, and a user ID so we can debug and see which screens fail. This runs through Google Firebase Analytics and Crashlytics. The App does not currently show a separate analytics opt-out.",
      "Subscriptions. If you buy Pro, Apple or Google send purchase/subscription identifiers so we can unlock Pro. We do not receive your full card number.",
      "Google Drive Backup (Free plan, optional). If you connect Drive, we use the Google account email for that connection. The backup file is encrypted on the device before upload into Drive’s app-data area. This is not a user-passphrase / zero-knowledge scheme: it protects the file in Drive, not against someone who has reverse-engineered the app.",
      "Advertising (Free plan only). We show Google AdMob banner and interstitial ads to Free users. Pro users do not see these ads. Google may collect device and advertising identifiers and other data described in Google’s policies, including to serve and measure ads. We request non-personalized ads where the App is configured to do so; Google may still process device data to deliver ads. We do not sell your personal information. Showing ads on the Free plan means we share device/ad identifiers with Google AdMob.",
    ],
  },
  {
    title: "How we use it",
    body: [
      "To run the App (including a local copy of your data on the device, and cloud sync when your plan allows). To sign you in, verify email, and support two-factor authentication (currently Google Authenticator / TOTP on production builds). To run AI Smart Add when you use it. To send transactional email and allowed push notifications. To show ads to Free users. To process Pro subscriptions. To fix crashes and improve the App. To prevent abuse.",
    ],
  },
  {
    title: "Where it is stored",
    body: [
      "Cloud data is stored with Google Firebase (Authentication, Firestore, Storage, Cloud Functions) in the project region (currently me-central1). A copy also sits in a local database on your device. That local database is not a separately encrypted vault. Other companies listed in section 5 process data only for the features you use.",
    ],
  },
  {
    title: "Who else receives it",
    body: [
      "Google (Firebase, AdMob, Google Sign-In, Google Drive if you connect backup, Google Play Billing on Android). Apple (App Store billing on iOS). Groq (AI Smart Add). Expo (push delivery). Resend (transactional email when that path is used). Firebase may also send its own account emails (verification, password reset, email change).",
      "Each of those companies has its own privacy policy. We do not sell your information for money.",
    ],
  },
  {
    title: "Cookies / website",
    body: [
      "The apps use on-device storage required for the product. The website may use basic cookies or local storage. Advertising in this product is in the Free mobile app (Google AdMob), not “website advertising cookies.”",
    ],
  },
  {
    title: "Sharing with other users",
    body: [
      "Friends and split participants see what that feature needs (name, email, avatar, split amounts). Do not put secrets in titles or notes you share.",
    ],
  },
  {
    title: "Your choices",
    body: [
      "You can edit profile details in the App. You can disconnect Google Drive. You can turn off notification permission in system settings. You can upgrade to Pro to stop in-app ads. You can delete your account in Profile → Delete Account by confirming your registered email.",
      "Deletion removes your account and the finance data we hold for you. Splits or friend records that also belong to someone else may remain for that person. Files in your Google Drive stay until you delete them. Some logs or delayed cleanup may remain for a limited time. If you want a copy of your data, email us; the App does not currently offer a one-tap full export of every record.",
    ],
  },
  {
    title: "Children",
    body: [
      "Not directed at children under 13. We do not knowingly collect their data. Contact us if you think we have, and we will delete it.",
    ],
  },
  {
    title: "Security",
    body: [
      "We use HTTPS, Google’s cloud protections for Firebase, access controls on our backend, and on-device encryption of Drive backup files before upload. No system is perfectly secure.",
    ],
  },
  {
    title: "International",
    body: [
      "Data may be processed in the Firebase region, the United States (including some Google and Groq processing), and other places those providers operate.",
    ],
  },
  {
    title: "Contact",
    body: ["XeuroTech — support@expense-tracker.xeurotech.com"],
  },
];

export { lastUpdated };
export default privacyPolicySections;
