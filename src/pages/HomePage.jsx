import Seo from '../components/common/Seo';
import HeroSection from '../components/hero/HeroSection';
import FeaturesSection from '../components/features/FeaturesSection';
import ScreenshotsSection from '../components/screenshots/ScreenshotsSection';
import HowItWorksSection from '../components/howItWorks/HowItWorksSection';
import WhyChooseUsSection from '../components/whyChooseUs/WhyChooseUsSection';
import StatisticsSection from '../components/statistics/StatisticsSection';
import TestimonialsSection from '../components/testimonials/TestimonialsSection';
import FaqSection from '../components/faq/FaqSection';

export default function HomePage() {
  return (
    <>
      <Seo
        title={null}
        description="ExpenseXT is a modern expense tracker to manage income, expenses, budgets, and financial reports with ease. Available on iOS and Android."
        path="/"
      />
      <HeroSection />
      <FeaturesSection />
      <ScreenshotsSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <StatisticsSection />
      <TestimonialsSection />
      <FaqSection />
    </>
  );
}
