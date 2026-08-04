import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Seo from '../components/common/Seo';
import PageHeader from '../components/common/PageHeader';
import LegalSection from '../components/common/LegalSection';
import privacyPolicySections, { lastUpdated } from '../data/privacyPolicy';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="Read the Expense-Tracker Privacy Policy to learn how we collect, use, and protect your personal and financial information."
        path="/privacy-policy"
      />
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Your privacy matters to us. Here's exactly how we handle your data."
      />
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="md">
          <Typography variant="body2" color="text.secondary" sx={{ mb: 5 }}>
            Last updated: {lastUpdated}
          </Typography>
          {privacyPolicySections.map((section, index) => (
            <LegalSection key={section.title} index={index + 1} {...section} />
          ))}
        </Container>
      </Box>
    </>
  );
}
