import ThemeRegistry from '../components/common/ThemeRegistry';
import ScrollManager from '../components/common/ScrollManager';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import './globals.css';

const SITE_URL = 'https://www.expense-tracker.app';
const SITE_NAME = 'AI-Expense Tracker';
const DEFAULT_DESCRIPTION =
  'AI-Expense Tracker is a modern, AI-powered expense tracker to manage income, expenses, budgets, and financial reports with ease.';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Track Expenses, Plan Budgets, Grow Savings`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  icons: { icon: '/favicon.svg' },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Track Expenses, Plan Budgets, Grow Savings`,
    description: DEFAULT_DESCRIPTION,
    images: ['/og-image.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — Track Expenses, Plan Budgets, Grow Savings`,
    description: DEFAULT_DESCRIPTION,
    images: ['/og-image.svg'],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A0A0A',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeRegistry>
          <ScrollManager />
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100svh' }}>
            <Navbar />
            <main style={{ flex: 1 }}>{children}</main>
            <Footer />
          </div>
        </ThemeRegistry>
      </body>
    </html>
  );
}
