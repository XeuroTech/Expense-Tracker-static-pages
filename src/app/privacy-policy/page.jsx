import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import PageHeader from "../../components/common/PageHeader";
import LegalSection from "../../components/common/LegalSection";
import privacyPolicySections, { lastUpdated } from "../../data/privacyPolicy";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Read the AI Expense Tracker Privacy Policy to learn how XeuroTech collects, uses, and shares information in the AI Expense Tracker apps and on related sites.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="AI Expense Tracker, operated by XeuroTech. This policy covers the AI Expense Tracker apps, related account pages, and this website."
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
